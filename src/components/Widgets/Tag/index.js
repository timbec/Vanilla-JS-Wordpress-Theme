import config from '../../../lib/config';
import Tag from './Tag';

export default class Tags {

   /**
    * render - Display Tags in a list
    *
    */
    static render() {

      if( document.querySelector( 'ul.tags' ) ) {
            return false;
        }

      let tags = new wp.api.collections.Tags();

		tags.fetch().done( () => {

               const sidebar = config.sidebar,
                     widget = document.createElement( 'div' );
               let widgetMarkup = '';

               widgetMarkup += '<h3>Tags</h3>';
               widgetMarkup += '<ul class="tags"></ul>';

               widget.innerHTML = widgetMarkup;
               sidebar.appendChild( widget );

               let renderedTags = tags.map( tag => {
                  Tag.render( tag.attributes );
               } );
         });
   }
}
