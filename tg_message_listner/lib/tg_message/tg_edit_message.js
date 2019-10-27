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
var TgMessageEdited = /** @class */ (function (_super) {
    __extends(TgMessageEdited, _super);
    function TgMessageEdited(type) {
        return _super.call(this, type) || this;
    }
    TgMessageEdited.prototype.getChatId = function () {
        return this._update.chat_id;
    };
    TgMessageEdited.prototype.getMessageId = function () {
        return this._update.message_id;
    };
    return TgMessageEdited;
}(tg_message_1.TgMessage));
exports.TgMessageEdited = TgMessageEdited;
//# sourceMappingURL=tg_edit_message.js.map