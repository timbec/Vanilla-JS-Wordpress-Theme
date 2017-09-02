import config from '../../lib/config';
import Comment from './Comment';

export default class Comments {

   /**
    * render - Display Comments on Page
    *
    * @param {Integer} id ID of the post to display comments for
    */
    static render( id ) {

      let comments = new wp.api.collections.Comments();

		comments.fetch({ data: { _embed: 1, post: id, order: 'asc' } }).done( () => {
				comments.each( comment => {
               Comment.render( comment.attributes );
            });
      });
   }
}
