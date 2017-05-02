import {Observable} from 'data/observable';

import * as app from 'application';


import listViewModule = require("ui/list-view");
import observableArray = require("data/observable-array");
import labelModule = require("ui/label");

export class MainViewModel extends Observable {

    private _counter: number;
    private _message: string;

    myItems: Array<string> = [
        "apple",
        "banana",
        "pineapple",
        "appricote",
        "pear",
        "plum",
        "strawberry",
        "strongberry",
        "blueberry",
        "apple",
        "pineapple",
        "appricote",
        "pear",
        "banana",
        "pineapple",
        "appricote",
        "pear",
        "plum",
        "strawberry",
        "strongberry",
        "blueberry",
        "apple"
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