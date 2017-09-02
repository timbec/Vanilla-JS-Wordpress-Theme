import config from '../../lib/config';
import Helpers from '../../lib/Helpers';


export default class tagPosts {

    /**
     * render - Display Posts on the post
     *
     * @param {String} slug the slug for the tag to display
     */
    static render( id = '' ) {

      let posts = new wp.api.collections.Posts();

		posts.fetch( { data: { _embed: 1, tags: id } }).done( () => {

                let renderedPosts = posts.map( post => {
                   console.log(post.attributes); 
                    Helpers.renderExcerpt( post.attributes, 'h2', true );
                } );
            } )
    }

}
