"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tg_message_1 = require("./tg_message");
var tg_nullable_message_1 = require("./tg_nullable_message");
var TgMessageBuilder = /** @class */ (function () {
    function TgMessageBuilder(updateMessageConstuctorRepo) {
        this._updateMessageConstuctorRepo = updateMessageConstuctorRepo;
    }
    TgMessageBuilder.prototype._isChannelUpdateConstructorName = function (mayBeChannelUpdatesConstructorName) {
        var result = false;
        Object.keys(this._updateMessageConstuctorRepo).map(function (consturctorName) {
            if (mayBeChannelUpdatesConstructorName === consturctorName)
                result = true;
        });
        return result;
    };
    TgMessageBuilder.prototype._isChannelUpdatesConstructor = function (mayBeChannelUpdatesConstructor) {
        return Object.getPrototypeOf(mayBeChannelUpdatesConstructor) === tg_message_1.TgMessage;
    };
    TgMessageBuilder.prototype.construct = function (update) {
        // console.log('_updateMessageConstuctorRepo',this._updateMessageConstuctorRepo)
        var updateMessageConstructorOrName = update['@type'];
        if (this._isChannelUpdatesConstructor(updateMessageConstructorOrName))
            return new updateMessageConstructorOrName();
        return (this._isChannelUpdateConstructorName(updateMessageConstructorOrName))
            ? new this._updateMessageConstuctorRepo[updateMessageConstructorOrName](update)
            : new tg_nullable_message_1.TgNullableMessages(updateMessageConstructorOrName);
    };
    return TgMessageBuilder;
}());
exports.TgMessageBuilder = TgMessageBuilder;
//# sourceMappingURL=tg_message_builder.js.map