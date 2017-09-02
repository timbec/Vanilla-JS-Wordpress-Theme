(function($) {

	const articleContainer = $('main#main');


	/**
	 * init - Intiates call to load posts
	 *
	 */
	function init() {
		loadPosts();
		loadPages();
		loadCategories();
		loadTags();
	};
	init();

	console.log(data.rest_url);
   /**
    * loadHeader - Gets posts from API and calls to have them rendered
    *
    */
   // function loadHeader() {
   //    console.log(wp.api.root);
   // }

	/**
	 * loadPosts - Gets posts from API and calls to have them rendered
	 *
	 */
	function loadPosts() {
		let posts = new wp.api.collections.Posts();

		posts.fetch({ data: { per_page: 100, orderby: 'title', order: 'asc' } }).done( () => {
				clearPosts();
				posts.each( post => loadPost( post.attributes ) );
		});
	}

	/**
	 * loadPosts - Gets posts from API and calls to have them rendered
	 *
	 */
	function loadPages() {
		let pages = new wp.api.collections.Pages();


		pages.fetch({ data: { per_page: 10, orderby: 'title', order: 'asc' } }).done( () => {
				clearPages();
				pages.each( page => loadPage( page.attributes ) );
		});
	}

	/**
	 * loadCategories - Gets posts from API and calls to have them rendered
	 *
	 */
	function loadCategories() {
		let categories = new wp.api.collections.Categories()

		categories.fetch().done( () => {
			console.log(categories);
				//clearCategories();
				categories.each( category => loadCategory( category.attributes ) );
		});
	}

	/**
	 * loadTags - Gets tags from API and calls to have them rendered
	 *
	 */
	function loadTags() {
		let tags = new wp.api.collections.Tags()

		tags.fetch().done( () => {
			console.log(tags);
				//clearCategories();
				tags.each( tag => loadTag( tag.attributes ) );
		});
	}




	/**
	 * loadPost - Loads an individual post to the page
	 *
	 * @param  {Object} post API Post Object
	 */
	function loadPost( post ) {
		let article = $('<article class="post api"></article>'),
				titleLink = $('<a></a>').attr( 'href', post.link ).text( post.title.rendered ),
				title = $('<h2 class="entry-title"></h2>').append( titleLink ),
				content = $('<div class="entry-content"></div>').html( post.excerpt.rendered );

		$(article).append(title).append(content);
		$(articleContainer).append(article) ;
	}

	/**
	 * loadPage - Loads an individual post to the page
	 *
	 * @param  {Object} post API Page Object
	 */
	function loadPage( page ) {
		console.log(page.title.rendered);
	}

	/**
	 * loadCategory - Loads an individual category to the page
	 *
	 * @param  {Object} category API Page Object
	 */
	function loadCategory( category ) {
		console.log(category.name);
	}

	/**
	 * loadTag - Loads an individual tag to the page
	 *
	 * @param  {Object} tag API Page Object
	 */
	function loadTag( tag ) {
		console.log(tag.name);
	}

	/**
	 * clearPosts - Clears posts on the page
	 *
	 */
	function clearPosts() {
		$(articleContainer).html('');
	}

	/**
	 * clearPages - Clears posts on the page
	 *
	 */
	function clearPages() {
		$(articleContainer).html('');
	}

})( jQuery );
