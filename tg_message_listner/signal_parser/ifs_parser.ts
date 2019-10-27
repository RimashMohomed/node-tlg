interface Parser {
    isValidCommand(command: string): boolean;
    parse(signalTokens: Array<string>, currentIndex: number): boolean
}