import config from '../../lib/config';
import Helpers from '../../lib/Helpers';
import Comments from '../Comments/Index';


export default class Post {
   /**
    * render - Display Posts on the post
    *
    * @param {String} slug Slug of post to display
    */
    static render( slug ) {

      let posts = new wp.api.collections.Posts();

		posts.fetch({ data: { _embed: 1, slug: slug, per_page: 1 } }).done( () => {
				//clearPosts();
				posts.each( post => {
               console.log(post.attributes.title.rendered);
               Helpers.renderContent( post.attributes, 'h1', false );
               Comments.render( post.id );
            });
      });
   }
}
