import config from '../../lib/config';
import Helpers from '../../lib/Helpers';

export default class Posts {

   static render() {

      let posts = new wp.api.collections.Posts();

		posts.fetch({ data: { _embed: 1, per_page: 50, orderby: 'title', order: 'desc' } }).done( () => {
				//clearPosts();
				posts.each( post => {
               Helpers.renderHeader( 'Writing', 'h1' );
               Helpers.clearPosts();
                let renderedPosts = posts.map( content => {
                    Helpers.renderExcerpt( content.attributes, 'h2', true );
                } );
            });
		});

   }
}
