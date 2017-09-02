import config from '../../lib/config';
import Helpers from '../../lib/Helpers';
import Tag from './Tag';

export default class Tags {

   /**
    * render - Display Posts on the post
    *
    * @param {String} slug the slug for the tag to display
    */
    static render( slug = '' ) {

      let tags = new wp.api.collections.Tags();

      tags.fetch({ data: { _embed: 1, slug: slug } }).done( () => {

                let renderedTags = tags.map( tag => {
                    Helpers.renderHeader( `Tag: ${tag.attributes.name} ${tag.attributes.count}` );
                    Tag.render( tag.attributes.id );
                } );
         });

   }
}
