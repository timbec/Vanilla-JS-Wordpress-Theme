import config from '../../../lib/config';
import Category from './Category';

export default class Categories {

   /**
    * render - Display Categories in a list
    *
    */
    static render() {

      if( document.querySelector( 'ul.categories' ) ) {
         return false;
      }

      let categories = new wp.api.collections.Categories();

		categories.fetch({ data: { _embed: 1, per_page: 10 } }).done( () => {
				//clearPosts();
				// categories.each( category => {
               const sidebar = config.sidebar,
                     widget = document.createElement( 'div' );
               let widgetMarkup = '';

               widgetMarkup += '<h3>Categories</h3>';
               widgetMarkup += '<ul class="categories"></ul>';

               widget.innerHTML = widgetMarkup;
               sidebar.appendChild( widget );

               let renderedCategories = categories.map( category => {
                  Category.render( category.attributes );
               } );
            // });
         });
   }
}
