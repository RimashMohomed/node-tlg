import {TgMessage} from './tg_message';

export class TgNullableMessages extends TgMessage {
    constructor(update: string) {
        super(update);
    }
    
    getChatId(): string {
        return '0';
    }

    getMessageId(): string {
        return '0';
    }


    isNull(): boolean {
        return false
    }
}