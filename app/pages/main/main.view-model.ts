import {Observable} from 'data/observable';

import * as app from 'application';


import listViewModule = require("ui/list-view");
import observableArray = require("data/observable-array");
import labelModule = require("ui/label");

export class MainViewModel extends Observable {

    private _counter: number;
    private _message: string;

    public myItems: Array<any> = [
        {name: 'apple', quantity: 42 },
        {name: 'banana', quantity: 7 },
        {name: 'pineapple', quantity: 3 },
        {name: 'appricote', quantity: 9 },
        {name: 'pear', quantity: 5 },
        {name: 'plum', quantity: 11 },
        {name: 'strawberry', quantity: 1 },
        {name: 'blueberry', quantity: 0 },
        {name: 'appricote', quantity: 9 },
        {name: 'pear', quantity: 5 },
        {name: 'plum', quantity: 11 },
        {name: 'apple', quantity: 42 },
        {name: 'banana', quantity: 7 },
        {name: 'pineapple', quantity: 3 },
        {name: 'strawberry', quantity: 1 },
        {name: 'blueberry', quantity: 0 },
        {name: 'appricote', quantity: 9 },
        {name: 'pear', quantity: 5 },
        {name: 'plum', quantity: 11 },
        {name: 'strawberry', quantity: 1 },
        {name: 'blueberry', quantity: 0 },
        {name: 'appricote', quantity: 9 },
        {name: 'pear', quantity: 5 },
        {name: 'plum', quantity: 11 }
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