import Helpers from "../../../lib/Helpers";

export default class Tag {

    /**
     * render - Display tag on the Page
     *
     * @param  {Object} tag Tag object
     */
    static render( tag ) {

        const ul = document.querySelector( 'ul.tags' ),
            li = document.createElement( 'li' );
        let link = Helpers.makeHashFromLink( tag, 'tag' ),
            liMarkup = '';

        if ( tag.count > 0 ) {
            liMarkup += `<a href="${link}">${tag.name} [${tag.count}]</a>`;
            li.innerHTML = liMarkup;
            ul.appendChild( li );
        }

    }

}
