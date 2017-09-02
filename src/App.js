import Header from './components/Header';
import Menu from './components/Menu/Index';
import Router from './lib/Router';

export default class App {

    /**
     * init - Initialize the app
     * @return {void} Not meant to return
     */
    static init() {
        console.log('Is this for freaking real??');
        Header.render();
        Menu.render();
        Router.init();


    }

}

App.init();
