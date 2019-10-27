
export interface Nullable {
    isNull(): boolean;
}

export abstract class TgMessage implements Nullable {
    _update: any
    constructor(update: string) {
        this._update = update;
    }

    abstract getChatId(): string;
    abstract getMessageId(): string;

    isNull(): boolean {
        return false
    }
}