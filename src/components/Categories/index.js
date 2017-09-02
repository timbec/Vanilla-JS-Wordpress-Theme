import config from '../../lib/config';
import Helpers from '../../lib/Helpers';
import Category from './Category';


export default class Categories {

    /**
     * render - Display Posts on the post
     *
     * @param {Integer} catID the ID for the Categories to display
     */
    static render( catSlug = '' ) {

      let categories = new wp.api.collections.Categories();

      categories.fetch({ data: { _embed: 1, slug: catSlug } }).done( () => {

                let renderedCategories = categories.map( category => {
                    Helpers.renderHeader( `Category: ${category.attributes.name} ${category.attributes.count}` );
                    Category.render( category.attributes.id );
                } );
         });
    }
}
