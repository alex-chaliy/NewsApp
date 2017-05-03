import {Observable} from 'data/observable';

import * as app from 'application';


import listViewModule = require("ui/list-view");
import observableArray = require("data/observable-array");
import labelModule = require("ui/label");

interface INew {
    title: string;
    description: string;
    imageLink: string;
}

export class MainViewModel extends Observable {

    private _counter: number;
    private _message: string;

    public newsList: Array<any> = [
        {title: 'New 1', imageLink: 'http://i.investopedia.com/dimages/graphics/bitcoin.jpg',
         description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, suscipit voluptate, cupiditate dolorum corrupti vero, culpaitaque ab minima, eveniet deserunt ratione maiores! Officiis a delectus, dicta inventore, voluptas reprehenderit.' },

        {title: 'New 2', imageLink: 'http://mwb-india.com/wp-content/uploads/2016/12/bitcoin.jpg',
         description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, suscipit voluptate, cupiditate dolorum corrupti vero, culpaitaque ab minima, eveniet deserunt ratione maiores! Officiis a delectus, dicta inventore, voluptas reprehenderit.' },

        {title: 'New 3', imageLink: 'https://www.invoiceninja.com/wp-content/uploads/2015/07/bitcoin1.png',
         description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, suscipit voluptate, cupiditate dolorum corrupti vero, culpaitaque ab minima, eveniet deserunt ratione maiores! Officiis a delectus, dicta inventore, voluptas reprehenderit.' },

        {title: 'New 4', imageLink: 'https://trezor.io/static/images/logos/insidebtc-logo.png',
         description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, suscipit voluptate, cupiditate dolorum corrupti vero, culpaitaque ab minima, eveniet deserunt ratione maiores! Officiis a delectus, dicta inventore, voluptas reprehenderit.' },

        {title: 'New 5', imageLink: 'https://bitnovosti.files.wordpress.com/2017/02/s3-amazonaws-commain-newsbtc-images20160608175752bitcoin-halving1-1024x475-65dec965b644e10588dcf0d2da7ce56d077c757e1.png?w=700',
         description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, suscipit voluptate, cupiditate dolorum corrupti vero, culpaitaque ab minima, eveniet deserunt ratione maiores! Officiis a delectus, dicta inventore, voluptas reprehenderit.' },

        {title: 'New N', imageLink: 'http://historyofbitcoin.org/assets/img/shots/first-bitcoin-transaction.png',
         description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, suscipit voluptate, cupiditate dolorum corrupti vero, culpaitaque ab minima, eveniet deserunt ratione maiores! Officiis a delectus, dicta inventore, voluptas reprehenderit.' }
    ];

    constructor() {
        super();

        // Initialize default values.
        this._counter = 42;
        this.updateMessage();
    }

    get message(): string {
        return this._message;
    }
    
    set message(value: string) {
        if (this._message !== value) {
            this._message = value;
            this.notifyPropertyChange('message', value)
        }
    }

    public onTap() {
        this._counter--;
        this.updateMessage();
        // app.start({ moduleName: '../posts/posts.page' });
    }

    private updateMessage() {
        if (this._counter <= 0) {
            this.message = 'Hoorraaay! You unlocked the NativeScript clicker achievement!';
        } else {
            this.message = `${this._counter} taps left`;
        }
    }
}