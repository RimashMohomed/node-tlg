import {Argument} from './argument';

export class OptionArgument extends Argument implements Parser {
    command_list: Array<string>;

    constructor(commandList: Array<string>) {
        super();
        this.command_list = commandList;
    }

    addCommand(command: string) {
        this.command_list.push(command);
    }

    isValidCommand(text: string): boolean {
        for (const command of this.command_list) {
            if (command === text)
                return true;
        }
        return false;
    }

    parse(signalTokens: Array<string>, currentIndex: number): boolean {
        const token = signalTokens[currentIndex];
        if (this.isValidCommand(token)) {
            this.setVal(token);
            return true;
        }
        return false;
    }
}
