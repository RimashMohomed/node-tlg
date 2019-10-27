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
var natural = require('natural');
var SignalParser = /** @class */ (function () {
    function SignalParser(command) {
        this.symbols = ['GBPUSD', 'GBPEUR', 'LKRUSD'];
        this.actions = ['SELL', 'BUY'];
        this.orderTypes = ['LIMIT', 'MARKET'];
        this.priceToken = '@';
        this.stopLimitToken = 'SL';
        this.takeProfitToken = 'TP';
        this.signal_tokens = new Array();
        this.symbol = new OptionArgument(this.symbols);
        this.action = new OptionArgument(this.actions);
        this.orderType = new OptionArgument(this.orderTypes);
        this.price = new ParameterArgument(this.priceToken);
        this.stopLimit = new ParameterArgument(this.stopLimitToken);
        this.takeProfit = new ParameterArgument(this.takeProfitToken);
        var tokenizer = new natural.WordPunctTokenizer();
        this.signal_tokens = tokenizer.tokenize(command);
        console.log('Token ', this.signal_tokens);
        //TODO weekness - can not identified unhandled tokens
        for (var i = 0; i < this.signal_tokens.length; i++) {
            var token = this.signal_tokens[i];
            this.symbol.parse(this.signal_tokens, i);
            this.action.parse(this.signal_tokens, i);
            this.orderType.parse(this.signal_tokens, i);
            this.price.parse(this.signal_tokens, i);
            this.stopLimit.parse(this.signal_tokens, i);
            this.takeProfit.parse(this.signal_tokens, i);
        }
    }
    return SignalParser;
}());
var ParameterArgument = /** @class */ (function (_super) {
    __extends(ParameterArgument, _super);
    function ParameterArgument(marker) {
        var _this = _super.call(this) || this;
        _this.marker = marker;
        return _this;
    }
    ParameterArgument.prototype.isValidCommand = function (text) {
        if (this.marker === text) {
            return true;
        }
        return false;
    };
    ParameterArgument.prototype.parse = function (signalTokens, currentIndex) {
        var token = signalTokens[currentIndex];
        var nextToken = signalTokens[currentIndex + 1];
        if (this.isValidCommand(token)) {
            this.setVal(nextToken);
            return true;
        }
        return false;
    };
    return ParameterArgument;
}(Argument));
function main() {
    console.log('Parser');
    var signal = 'GBPUSD SELL LIMIT @ 1.2886\
SL 1.2920\
TP 1.2750';
    var signalParser = new SignalParser(signal);
    console.log('symbol', signalParser.symbol.getVal());
    console.log('action', signalParser.action.getVal());
    console.log('orderType', signalParser.orderType.getVal());
    console.log('price', signalParser.price.getVal());
    console.log('stopLimit', signalParser.stopLimit.getVal());
    console.log('takeProfit', signalParser.takeProfit.getVal());
}
main();
//# sourceMappingURL=parser.js.map