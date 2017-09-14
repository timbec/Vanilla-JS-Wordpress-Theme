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

		tags.fetch({ data: { _embed: 1, per_page: 100 }}).done( () => {

               const sidebar = config.sidebar,
                     widget = document.createElement( 'div' );
               let widgetMarkup = '';

               widgetMarkup += '<h3>Tags</h3>';
               widgetMarkup += '<ul class="tags"></ul>';

               widget.innerHTML = widgetMarkup;
               sidebar.appendChild( widget );

               let renderedTags = tags.map( tag => {
                  console.log(tag.attributes.name);
                  Tag.render( tag.attributes );
               } );
         });
   }
}
