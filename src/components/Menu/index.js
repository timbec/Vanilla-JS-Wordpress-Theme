import config from '../../lib/config';
import Helpers from '../../lib/Helpers';
import MenuItem from './Item';

export default class Menu {

   /**
    * render - Displays menu on all pages
    *
    */
    static render() {
      // let categories = new wp.api.collections.Categories();
      // console.log(categories);
      //
		// categories.fetch({ data: { _embed: 1, per_page: 10} })
      // .done( () => {
      //    //console.log(categories);
      //    let renderedMenu = categories.map( category => {
      //
      //       MenuItem.render( category.attributes );
      //    } );
		// });

      let pages = new wp.api.collections.Pages();

      pages.fetch({ data: { _embed: 1, per_page: 10, order_by: 'menu_order'  } })
      .done( () => {
         let renderedMenu = pages.map( page => {

            MenuItem.render( page.attributes );
         })
      });
   }

   }
