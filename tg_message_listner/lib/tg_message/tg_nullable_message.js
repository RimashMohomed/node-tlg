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
var TgNullableMessages = /** @class */ (function (_super) {
    __extends(TgNullableMessages, _super);
    function TgNullableMessages(update) {
        return _super.call(this, update) || this;
    }
    TgNullableMessages.prototype.getChatId = function () {
        return '0';
    };
    TgNullableMessages.prototype.getMessageId = function () {
        return '0';
    };
    TgNullableMessages.prototype.isNull = function () {
        return false;
    };
    return TgNullableMessages;
}(tg_message_1.TgMessage));
exports.TgNullableMessages = TgNullableMessages;
//# sourceMappingURL=tg_nullable_message.js.map