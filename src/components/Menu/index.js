import config from '../../lib/config';
import Helpers from '../../lib/Helpers';
import MenuItem from './Item';

export default class Menu {

   /**
    * render - Displays menu on all pages
    *
    */
    static render() {
      let pages = new wp.api.collections.Pages();

		pages.fetch({ data: { parent: 0, orderby: 'menu_order', order: 'asc' } })
      .done( () => {
         console.log(pages);
				pages.each( content => {

                    MenuItem.render( content.attributes );

            });
		});

   }

   }
