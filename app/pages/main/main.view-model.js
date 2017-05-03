"use strict";
var observable_1 = require("data/observable");
var MainViewModel = (function (_super) {
    __extends(MainViewModel, _super);
    function MainViewModel() {
        var _this = _super.call(this) || this;
        _this.newsList = [
            { title: 'New 1', imageLink: 'http://i.investopedia.com/dimages/graphics/bitcoin.jpg',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, suscipit voluptate, cupiditate dolorum corrupti vero, culpaitaque ab minima, eveniet deserunt ratione maiores! Officiis a delectus, dicta inventore, voluptas reprehenderit.' },
            { title: 'New 2', imageLink: 'http://mwb-india.com/wp-content/uploads/2016/12/bitcoin.jpg',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, suscipit voluptate, cupiditate dolorum corrupti vero, culpaitaque ab minima, eveniet deserunt ratione maiores! Officiis a delectus, dicta inventore, voluptas reprehenderit.' },
            { title: 'New 3', imageLink: 'https://www.invoiceninja.com/wp-content/uploads/2015/07/bitcoin1.png',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, suscipit voluptate, cupiditate dolorum corrupti vero, culpaitaque ab minima, eveniet deserunt ratione maiores! Officiis a delectus, dicta inventore, voluptas reprehenderit.' },
            { title: 'New 4', imageLink: 'https://trezor.io/static/images/logos/insidebtc-logo.png',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, suscipit voluptate, cupiditate dolorum corrupti vero, culpaitaque ab minima, eveniet deserunt ratione maiores! Officiis a delectus, dicta inventore, voluptas reprehenderit.' },
            { title: 'New 5', imageLink: 'https://bitnovosti.files.wordpress.com/2017/02/s3-amazonaws-commain-newsbtc-images20160608175752bitcoin-halving1-1024x475-65dec965b644e10588dcf0d2da7ce56d077c757e1.png?w=700',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, suscipit voluptate, cupiditate dolorum corrupti vero, culpaitaque ab minima, eveniet deserunt ratione maiores! Officiis a delectus, dicta inventore, voluptas reprehenderit.' },
            { title: 'New N', imageLink: 'http://historyofbitcoin.org/assets/img/shots/first-bitcoin-transaction.png',
                description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, suscipit voluptate, cupiditate dolorum corrupti vero, culpaitaque ab minima, eveniet deserunt ratione maiores! Officiis a delectus, dicta inventore, voluptas reprehenderit.' }
        ];
        // Initialize default values.
        _this._counter = 42;
        _this.updateMessage();
        return _this;
    }
    Object.defineProperty(MainViewModel.prototype, "message", {
        get: function () {
            return this._message;
        },
        set: function (value) {
            if (this._message !== value) {
                this._message = value;
                this.notifyPropertyChange('message', value);
            }
        },
        enumerable: true,
        configurable: true
    });
    MainViewModel.prototype.onTap = function () {
        this._counter--;
        this.updateMessage();
        // app.start({ moduleName: '../posts/posts.page' });
    };
    MainViewModel.prototype.updateMessage = function () {
        if (this._counter <= 0) {
            this.message = 'Hoorraaay! You unlocked the NativeScript clicker achievement!';
        }
        else {
            this.message = this._counter + " taps left";
        }
    };
    return MainViewModel;
}(observable_1.Observable));
exports.MainViewModel = MainViewModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi52aWV3LW1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpbi52aWV3LW1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSw4Q0FBMkM7QUFlM0M7SUFBbUMsaUNBQVU7SUF5QnpDO1FBQUEsWUFDSSxpQkFBTyxTQUtWO1FBMUJNLGNBQVEsR0FBZTtZQUMxQixFQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLHdEQUF3RDtnQkFDbkYsV0FBVyxFQUFFLGlQQUFpUCxFQUFFO1lBRWpRLEVBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsNkRBQTZEO2dCQUN4RixXQUFXLEVBQUUsaVBBQWlQLEVBQUU7WUFFalEsRUFBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxzRUFBc0U7Z0JBQ2pHLFdBQVcsRUFBRSxpUEFBaVAsRUFBRTtZQUVqUSxFQUFDLEtBQUssRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLDBEQUEwRDtnQkFDckYsV0FBVyxFQUFFLGlQQUFpUCxFQUFFO1lBRWpRLEVBQUMsS0FBSyxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsK0tBQStLO2dCQUMxTSxXQUFXLEVBQUUsaVBBQWlQLEVBQUU7WUFFalEsRUFBQyxLQUFLLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSw0RUFBNEU7Z0JBQ3ZHLFdBQVcsRUFBRSxpUEFBaVAsRUFBRTtTQUNwUSxDQUFDO1FBS0UsNkJBQTZCO1FBQzdCLEtBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ25CLEtBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQzs7SUFDekIsQ0FBQztJQUVELHNCQUFJLGtDQUFPO2FBQVg7WUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUN6QixDQUFDO2FBRUQsVUFBWSxLQUFhO1lBQ3JCLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQztnQkFDMUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxLQUFLLENBQUM7Z0JBQ3RCLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUE7WUFDL0MsQ0FBQztRQUNMLENBQUM7OztPQVBBO0lBU00sNkJBQUssR0FBWjtRQUNJLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNoQixJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDckIsb0RBQW9EO0lBQ3hELENBQUM7SUFFTyxxQ0FBYSxHQUFyQjtRQUNJLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNyQixJQUFJLENBQUMsT0FBTyxHQUFHLCtEQUErRCxDQUFDO1FBQ25GLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNKLElBQUksQ0FBQyxPQUFPLEdBQU0sSUFBSSxDQUFDLFFBQVEsZUFBWSxDQUFDO1FBQ2hELENBQUM7SUFDTCxDQUFDO0lBQ0wsb0JBQUM7QUFBRCxDQUFDLEFBekRELENBQW1DLHVCQUFVLEdBeUQ1QztBQXpEWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAnZGF0YS9vYnNlcnZhYmxlJztcblxuaW1wb3J0ICogYXMgYXBwIGZyb20gJ2FwcGxpY2F0aW9uJztcblxuXG5pbXBvcnQgbGlzdFZpZXdNb2R1bGUgPSByZXF1aXJlKFwidWkvbGlzdC12aWV3XCIpO1xuaW1wb3J0IG9ic2VydmFibGVBcnJheSA9IHJlcXVpcmUoXCJkYXRhL29ic2VydmFibGUtYXJyYXlcIik7XG5pbXBvcnQgbGFiZWxNb2R1bGUgPSByZXF1aXJlKFwidWkvbGFiZWxcIik7XG5cbmludGVyZmFjZSBJTmV3IHtcbiAgICB0aXRsZTogc3RyaW5nO1xuICAgIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG4gICAgaW1hZ2VMaW5rOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjbGFzcyBNYWluVmlld01vZGVsIGV4dGVuZHMgT2JzZXJ2YWJsZSB7XG5cbiAgICBwcml2YXRlIF9jb3VudGVyOiBudW1iZXI7XG4gICAgcHJpdmF0ZSBfbWVzc2FnZTogc3RyaW5nO1xuXG4gICAgcHVibGljIG5ld3NMaXN0OiBBcnJheTxhbnk+ID0gW1xuICAgICAgICB7dGl0bGU6ICdOZXcgMScsIGltYWdlTGluazogJ2h0dHA6Ly9pLmludmVzdG9wZWRpYS5jb20vZGltYWdlcy9ncmFwaGljcy9iaXRjb2luLmpwZycsXG4gICAgICAgICBkZXNjcmlwdGlvbjogJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBGYWNpbGlzLCBzdXNjaXBpdCB2b2x1cHRhdGUsIGN1cGlkaXRhdGUgZG9sb3J1bSBjb3JydXB0aSB2ZXJvLCBjdWxwYWl0YXF1ZSBhYiBtaW5pbWEsIGV2ZW5pZXQgZGVzZXJ1bnQgcmF0aW9uZSBtYWlvcmVzISBPZmZpY2lpcyBhIGRlbGVjdHVzLCBkaWN0YSBpbnZlbnRvcmUsIHZvbHVwdGFzIHJlcHJlaGVuZGVyaXQuJyB9LFxuXG4gICAgICAgIHt0aXRsZTogJ05ldyAyJywgaW1hZ2VMaW5rOiAnaHR0cDovL213Yi1pbmRpYS5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTYvMTIvYml0Y29pbi5qcGcnLFxuICAgICAgICAgZGVzY3JpcHRpb246ICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gRmFjaWxpcywgc3VzY2lwaXQgdm9sdXB0YXRlLCBjdXBpZGl0YXRlIGRvbG9ydW0gY29ycnVwdGkgdmVybywgY3VscGFpdGFxdWUgYWIgbWluaW1hLCBldmVuaWV0IGRlc2VydW50IHJhdGlvbmUgbWFpb3JlcyEgT2ZmaWNpaXMgYSBkZWxlY3R1cywgZGljdGEgaW52ZW50b3JlLCB2b2x1cHRhcyByZXByZWhlbmRlcml0LicgfSxcblxuICAgICAgICB7dGl0bGU6ICdOZXcgMycsIGltYWdlTGluazogJ2h0dHBzOi8vd3d3Lmludm9pY2VuaW5qYS5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTUvMDcvYml0Y29pbjEucG5nJyxcbiAgICAgICAgIGRlc2NyaXB0aW9uOiAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEZhY2lsaXMsIHN1c2NpcGl0IHZvbHVwdGF0ZSwgY3VwaWRpdGF0ZSBkb2xvcnVtIGNvcnJ1cHRpIHZlcm8sIGN1bHBhaXRhcXVlIGFiIG1pbmltYSwgZXZlbmlldCBkZXNlcnVudCByYXRpb25lIG1haW9yZXMhIE9mZmljaWlzIGEgZGVsZWN0dXMsIGRpY3RhIGludmVudG9yZSwgdm9sdXB0YXMgcmVwcmVoZW5kZXJpdC4nIH0sXG5cbiAgICAgICAge3RpdGxlOiAnTmV3IDQnLCBpbWFnZUxpbms6ICdodHRwczovL3RyZXpvci5pby9zdGF0aWMvaW1hZ2VzL2xvZ29zL2luc2lkZWJ0Yy1sb2dvLnBuZycsXG4gICAgICAgICBkZXNjcmlwdGlvbjogJ0xvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0LCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBGYWNpbGlzLCBzdXNjaXBpdCB2b2x1cHRhdGUsIGN1cGlkaXRhdGUgZG9sb3J1bSBjb3JydXB0aSB2ZXJvLCBjdWxwYWl0YXF1ZSBhYiBtaW5pbWEsIGV2ZW5pZXQgZGVzZXJ1bnQgcmF0aW9uZSBtYWlvcmVzISBPZmZpY2lpcyBhIGRlbGVjdHVzLCBkaWN0YSBpbnZlbnRvcmUsIHZvbHVwdGFzIHJlcHJlaGVuZGVyaXQuJyB9LFxuXG4gICAgICAgIHt0aXRsZTogJ05ldyA1JywgaW1hZ2VMaW5rOiAnaHR0cHM6Ly9iaXRub3Zvc3RpLmZpbGVzLndvcmRwcmVzcy5jb20vMjAxNy8wMi9zMy1hbWF6b25hd3MtY29tbWFpbi1uZXdzYnRjLWltYWdlczIwMTYwNjA4MTc1NzUyYml0Y29pbi1oYWx2aW5nMS0xMDI0eDQ3NS02NWRlYzk2NWI2NDRlMTA1ODhkY2YwZDJkYTdjZTU2ZDA3N2M3NTdlMS5wbmc/dz03MDAnLFxuICAgICAgICAgZGVzY3JpcHRpb246ICdMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCwgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gRmFjaWxpcywgc3VzY2lwaXQgdm9sdXB0YXRlLCBjdXBpZGl0YXRlIGRvbG9ydW0gY29ycnVwdGkgdmVybywgY3VscGFpdGFxdWUgYWIgbWluaW1hLCBldmVuaWV0IGRlc2VydW50IHJhdGlvbmUgbWFpb3JlcyEgT2ZmaWNpaXMgYSBkZWxlY3R1cywgZGljdGEgaW52ZW50b3JlLCB2b2x1cHRhcyByZXByZWhlbmRlcml0LicgfSxcblxuICAgICAgICB7dGl0bGU6ICdOZXcgTicsIGltYWdlTGluazogJ2h0dHA6Ly9oaXN0b3J5b2ZiaXRjb2luLm9yZy9hc3NldHMvaW1nL3Nob3RzL2ZpcnN0LWJpdGNvaW4tdHJhbnNhY3Rpb24ucG5nJyxcbiAgICAgICAgIGRlc2NyaXB0aW9uOiAnTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIEZhY2lsaXMsIHN1c2NpcGl0IHZvbHVwdGF0ZSwgY3VwaWRpdGF0ZSBkb2xvcnVtIGNvcnJ1cHRpIHZlcm8sIGN1bHBhaXRhcXVlIGFiIG1pbmltYSwgZXZlbmlldCBkZXNlcnVudCByYXRpb25lIG1haW9yZXMhIE9mZmljaWlzIGEgZGVsZWN0dXMsIGRpY3RhIGludmVudG9yZSwgdm9sdXB0YXMgcmVwcmVoZW5kZXJpdC4nIH1cbiAgICBdO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgLy8gSW5pdGlhbGl6ZSBkZWZhdWx0IHZhbHVlcy5cbiAgICAgICAgdGhpcy5fY291bnRlciA9IDQyO1xuICAgICAgICB0aGlzLnVwZGF0ZU1lc3NhZ2UoKTtcbiAgICB9XG5cbiAgICBnZXQgbWVzc2FnZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5fbWVzc2FnZTtcbiAgICB9XG4gICAgXG4gICAgc2V0IG1lc3NhZ2UodmFsdWU6IHN0cmluZykge1xuICAgICAgICBpZiAodGhpcy5fbWVzc2FnZSAhPT0gdmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX21lc3NhZ2UgPSB2YWx1ZTtcbiAgICAgICAgICAgIHRoaXMubm90aWZ5UHJvcGVydHlDaGFuZ2UoJ21lc3NhZ2UnLCB2YWx1ZSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBvblRhcCgpIHtcbiAgICAgICAgdGhpcy5fY291bnRlci0tO1xuICAgICAgICB0aGlzLnVwZGF0ZU1lc3NhZ2UoKTtcbiAgICAgICAgLy8gYXBwLnN0YXJ0KHsgbW9kdWxlTmFtZTogJy4uL3Bvc3RzL3Bvc3RzLnBhZ2UnIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgdXBkYXRlTWVzc2FnZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuX2NvdW50ZXIgPD0gMCkge1xuICAgICAgICAgICAgdGhpcy5tZXNzYWdlID0gJ0hvb3JyYWFheSEgWW91IHVubG9ja2VkIHRoZSBOYXRpdmVTY3JpcHQgY2xpY2tlciBhY2hpZXZlbWVudCEnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5tZXNzYWdlID0gYCR7dGhpcy5fY291bnRlcn0gdGFwcyBsZWZ0YDtcbiAgICAgICAgfVxuICAgIH1cbn0iXX0=