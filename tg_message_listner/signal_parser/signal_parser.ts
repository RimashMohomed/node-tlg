import natural from 'natural';

import {ParameterArgument} from './parameter_arguments';
import {OptionArgument} from './option_argument';


export class SignalParser {
    symbols = ['GBPUSD', 'GBPEUR', 'LKRUSD'];
    actions = ['SELL', 'BUY'];
    orderTypes = ['LIMIT', 'MARKET'];
    priceToken = '@';
    stopLimitToken = 'SL';
    takeProfitToken = 'TP';

    signal_tokens: Array<string> = new Array();

    symbol = new OptionArgument(this.symbols);
    action = new OptionArgument(this.actions);
    orderType = new OptionArgument(this.orderTypes);
    price = new ParameterArgument(this.priceToken);
    stopLimit = new ParameterArgument(this.stopLimitToken);
    takeProfit = new ParameterArgument(this.takeProfitToken);

    constructor(command: string) {
        const tokenizer = new natural.WordPunctTokenizer();
        this.signal_tokens = tokenizer.tokenize(command);
        console.log('Token ', this.signal_tokens);
        //TODO weekness - can not identified unhandled tokens
        for (let i = 0; i < this.signal_tokens.length; i++) {
            const token = this.signal_tokens[i];
            
            this.symbol.parse(this.signal_tokens, i);

            this.action.parse(this.signal_tokens, i);

            this.orderType.parse(this.signal_tokens, i);

            this.price.parse(this.signal_tokens, i);

            this.stopLimit.parse(this.signal_tokens, i);

            this.takeProfit.parse(this.signal_tokens, i);
        }
    }
}






