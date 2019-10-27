"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var argument_1 = require("./argument");
var OptionArgument = /** @class */ (function (_super) {
    __extends(OptionArgument, _super);
    function OptionArgument(commandList) {
        var _this = _super.call(this) || this;
        _this.command_list = commandList;
        return _this;
    }
    OptionArgument.prototype.addCommand = function (command) {
        this.command_list.push(command);
    };
    OptionArgument.prototype.isValidCommand = function (text) {
        for (var _i = 0, _a = this.command_list; _i < _a.length; _i++) {
            var command = _a[_i];
            if (command === text)
                return true;
        }
        return false;
    };
    OptionArgument.prototype.parse = function (signalTokens, currentIndex) {
        var token = signalTokens[currentIndex];
        if (this.isValidCommand(token)) {
            this.setVal(token);
            return true;
        }
        return false;
    };
    return OptionArgument;
}(argument_1.Argument));
exports.OptionArgument = OptionArgument;
//# sourceMappingURL=option_argument.js.map