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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var message_1 = __importDefault(require("./message"));
var UpdateNewMessage = /** @class */ (function (_super) {
    __extends(UpdateNewMessage, _super);
    function UpdateNewMessage() {
        return _super.call(this) || this;
    }
    UpdateNewMessage.prototype.getChannelId = function () {
        console.log("UpdateNewMessage::getChannelId");
        return '';
    };
    UpdateNewMessage.prototype.getMessageId = function () {
        console.log("UpdateNewMessage::getMessageId");
        return '';
    };
    return UpdateNewMessage;
}(message_1.default));
exports.default = UpdateNewMessage;
//# sourceMappingURL=update_new_message.js.map