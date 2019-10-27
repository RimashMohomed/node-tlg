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
var tg_message_1 = require("./tg_message");
var TgNewMessage = /** @class */ (function (_super) {
    __extends(TgNewMessage, _super);
    function TgNewMessage(update) {
        return _super.call(this, update) || this;
    }
    TgNewMessage.prototype.getChatId = function () {
        return this._update.message.chat_id;
    };
    TgNewMessage.prototype.getMessageId = function () {
        return this._update.message.message_id;
    };
    return TgNewMessage;
}(tg_message_1.TgMessage));
exports.TgNewMessage = TgNewMessage;
//# sourceMappingURL=tg_new_message.js.map