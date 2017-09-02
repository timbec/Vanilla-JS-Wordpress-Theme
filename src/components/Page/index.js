import config from '../../lib/config';
import Helpers from '../../lib/Helpers';

export default class Page {

   /**
    * render - Display pages on the Page
    *
    * @param {String} slug The slug of the page to display
    */
    static render( slug ) {

      let pages = new wp.api.collections.Pages();

		pages.fetch({ data: { _embed: 1, slug: slug, per_page: 1 } }).done( () => {
         pages.each( page => {
            if( page ) {
               Helpers.renderContent( page.attributes );
            } else {
               Helpers.renderContent( config.page404 );
            }
         })
      })
   }
}
