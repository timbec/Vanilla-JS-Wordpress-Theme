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

      let writingItems = new wp.api.collections.WritingType();

      writingItems.fetch({ data: { _embed: 1 } })
      .done( () => {
         let renderedMenu = writingItems.map( writingItem => {
            MenuItem.render( writingItem.attributes );
         })
      });
   }

   }
