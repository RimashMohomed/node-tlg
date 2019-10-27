"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var natural = require('natural');
var parameter_arguments_1 = require("./parameter_arguments");
var option_argument_1 = require("./option_argument");
var SignalParser = /** @class */ (function () {
    function SignalParser(command) {
        this.symbols = ['GBPUSD', 'GBPEUR', 'LKRUSD'];
        this.actions = ['SELL', 'BUY'];
        this.orderTypes = ['LIMIT', 'MARKET'];
        this.priceToken = '@';
        this.stopLimitToken = 'SL';
        this.takeProfitToken = 'TP';
        this.signal_tokens = new Array();
        this.symbol = new option_argument_1.OptionArgument(this.symbols);
        this.action = new option_argument_1.OptionArgument(this.actions);
        this.orderType = new option_argument_1.OptionArgument(this.orderTypes);
        this.price = new parameter_arguments_1.ParameterArgument(this.priceToken);
        this.stopLimit = new parameter_arguments_1.ParameterArgument(this.stopLimitToken);
        this.takeProfit = new parameter_arguments_1.ParameterArgument(this.takeProfitToken);
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
exports.SignalParser = SignalParser;
//# sourceMappingURL=signal_parser.js.map