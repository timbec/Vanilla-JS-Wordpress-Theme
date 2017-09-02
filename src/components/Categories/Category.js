import config from '../../lib/config';
import Helpers from '../../lib/Helpers';

export default class Category {

    /**
     * render - Display Posts on the post
     *
     * @param {Integer} catID the ID for the Categories to display
     */
    static render( catID = '' ) {

      let posts = new wp.api.collections.Posts();

       posts.fetch({ data: { _embed: 1, categories: catID } }).done( () =>
       {
          let renderedPosts = posts.map( post => {
              Helpers.renderExcerpt( post.attributes, 'h2', true );
          } );
       });
    }
}
