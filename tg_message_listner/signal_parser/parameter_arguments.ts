import {Argument} from './argument';

export class ParameterArgument extends Argument implements Parser {
    marker: string;

    constructor(marker: string) {
        super();
        this.marker = marker;
    }

    isValidCommand(text: string): boolean {
        if (this.marker === text) {
            return true;
        }
        return false;
    }

    parse(signalTokens: Array<string>, currentIndex: number): boolean {
        const token = signalTokens[currentIndex];
        const nextToken = signalTokens[currentIndex + 1];
        if (this.isValidCommand(token)) {
            this.setVal(nextToken);
            return true;
        }
        return false;
    }
}