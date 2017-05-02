"use strict";
var observable_1 = require("data/observable");
var MainViewModel = (function (_super) {
    __extends(MainViewModel, _super);
    function MainViewModel() {
        var _this = _super.call(this) || this;
        _this.myItems = [
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi52aWV3LW1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpbi52aWV3LW1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSw4Q0FBMkM7QUFTM0M7SUFBbUMsaUNBQVU7SUE4QnpDO1FBQUEsWUFDSSxpQkFBTyxTQUtWO1FBL0JELGFBQU8sR0FBa0I7WUFDckIsT0FBTztZQUNQLFFBQVE7WUFDUixXQUFXO1lBQ1gsV0FBVztZQUNYLE1BQU07WUFDTixNQUFNO1lBQ04sWUFBWTtZQUNaLGFBQWE7WUFDYixXQUFXO1lBQ1gsT0FBTztZQUNQLFdBQVc7WUFDWCxXQUFXO1lBQ1gsTUFBTTtZQUNOLFFBQVE7WUFDUixXQUFXO1lBQ1gsV0FBVztZQUNYLE1BQU07WUFDTixNQUFNO1lBQ04sWUFBWTtZQUNaLGFBQWE7WUFDYixXQUFXO1lBQ1gsT0FBTztTQUNWLENBQUM7UUFLRSw2QkFBNkI7UUFDN0IsS0FBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFDbkIsS0FBSSxDQUFDLGFBQWEsRUFBRSxDQUFDOztJQUN6QixDQUFDO0lBRUQsc0JBQUksa0NBQU87YUFBWDtZQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3pCLENBQUM7YUFFRCxVQUFZLEtBQWE7WUFDckIsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsS0FBSyxLQUFLLENBQUMsQ0FBQyxDQUFDO2dCQUMxQixJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQztnQkFDdEIsSUFBSSxDQUFDLG9CQUFvQixDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQTtZQUMvQyxDQUFDO1FBQ0wsQ0FBQzs7O09BUEE7SUFTTSw2QkFBSyxHQUFaO1FBQ0ksSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2hCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNyQixvREFBb0Q7SUFDeEQsQ0FBQztJQUVPLHFDQUFhLEdBQXJCO1FBQ0ksRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3JCLElBQUksQ0FBQyxPQUFPLEdBQUcsK0RBQStELENBQUM7UUFDbkYsQ0FBQztRQUFDLElBQUksQ0FBQyxDQUFDO1lBQ0osSUFBSSxDQUFDLE9BQU8sR0FBTSxJQUFJLENBQUMsUUFBUSxlQUFZLENBQUM7UUFDaEQsQ0FBQztJQUNMLENBQUM7SUFDTCxvQkFBQztBQUFELENBQUMsQUE5REQsQ0FBbUMsdUJBQVUsR0E4RDVDO0FBOURZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdkYXRhL29ic2VydmFibGUnO1xuXG5pbXBvcnQgKiBhcyBhcHAgZnJvbSAnYXBwbGljYXRpb24nO1xuXG5cbmltcG9ydCBsaXN0Vmlld01vZHVsZSA9IHJlcXVpcmUoXCJ1aS9saXN0LXZpZXdcIik7XG5pbXBvcnQgb2JzZXJ2YWJsZUFycmF5ID0gcmVxdWlyZShcImRhdGEvb2JzZXJ2YWJsZS1hcnJheVwiKTtcbmltcG9ydCBsYWJlbE1vZHVsZSA9IHJlcXVpcmUoXCJ1aS9sYWJlbFwiKTtcblxuZXhwb3J0IGNsYXNzIE1haW5WaWV3TW9kZWwgZXh0ZW5kcyBPYnNlcnZhYmxlIHtcblxuICAgIHByaXZhdGUgX2NvdW50ZXI6IG51bWJlcjtcbiAgICBwcml2YXRlIF9tZXNzYWdlOiBzdHJpbmc7XG5cbiAgICBteUl0ZW1zOiBBcnJheTxzdHJpbmc+ID0gW1xuICAgICAgICBcImFwcGxlXCIsXG4gICAgICAgIFwiYmFuYW5hXCIsXG4gICAgICAgIFwicGluZWFwcGxlXCIsXG4gICAgICAgIFwiYXBwcmljb3RlXCIsXG4gICAgICAgIFwicGVhclwiLFxuICAgICAgICBcInBsdW1cIixcbiAgICAgICAgXCJzdHJhd2JlcnJ5XCIsXG4gICAgICAgIFwic3Ryb25nYmVycnlcIixcbiAgICAgICAgXCJibHVlYmVycnlcIixcbiAgICAgICAgXCJhcHBsZVwiLFxuICAgICAgICBcInBpbmVhcHBsZVwiLFxuICAgICAgICBcImFwcHJpY290ZVwiLFxuICAgICAgICBcInBlYXJcIixcbiAgICAgICAgXCJiYW5hbmFcIixcbiAgICAgICAgXCJwaW5lYXBwbGVcIixcbiAgICAgICAgXCJhcHByaWNvdGVcIixcbiAgICAgICAgXCJwZWFyXCIsXG4gICAgICAgIFwicGx1bVwiLFxuICAgICAgICBcInN0cmF3YmVycnlcIixcbiAgICAgICAgXCJzdHJvbmdiZXJyeVwiLFxuICAgICAgICBcImJsdWViZXJyeVwiLFxuICAgICAgICBcImFwcGxlXCJcbiAgICBdO1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgLy8gSW5pdGlhbGl6ZSBkZWZhdWx0IHZhbHVlcy5cbiAgICAgICAgdGhpcy5fY291bnRlciA9IDQyO1xuICAgICAgICB0aGlzLnVwZGF0ZU1lc3NhZ2UoKTtcbiAgICB9XG5cbiAgICBnZXQgbWVzc2FnZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5fbWVzc2FnZTtcbiAgICB9XG4gICAgXG4gICAgc2V0IG1lc3NhZ2UodmFsdWU6IHN0cmluZykge1xuICAgICAgICBpZiAodGhpcy5fbWVzc2FnZSAhPT0gdmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMuX21lc3NhZ2UgPSB2YWx1ZTtcbiAgICAgICAgICAgIHRoaXMubm90aWZ5UHJvcGVydHlDaGFuZ2UoJ21lc3NhZ2UnLCB2YWx1ZSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHB1YmxpYyBvblRhcCgpIHtcbiAgICAgICAgdGhpcy5fY291bnRlci0tO1xuICAgICAgICB0aGlzLnVwZGF0ZU1lc3NhZ2UoKTtcbiAgICAgICAgLy8gYXBwLnN0YXJ0KHsgbW9kdWxlTmFtZTogJy4uL3Bvc3RzL3Bvc3RzLnBhZ2UnIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgdXBkYXRlTWVzc2FnZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuX2NvdW50ZXIgPD0gMCkge1xuICAgICAgICAgICAgdGhpcy5tZXNzYWdlID0gJ0hvb3JyYWFheSEgWW91IHVubG9ja2VkIHRoZSBOYXRpdmVTY3JpcHQgY2xpY2tlciBhY2hpZXZlbWVudCEnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5tZXNzYWdlID0gYCR7dGhpcy5fY291bnRlcn0gdGFwcyBsZWZ0YDtcbiAgICAgICAgfVxuICAgIH1cbn0iXX0=