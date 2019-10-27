import {TgMessage} from './tg_message';


export class TgNewMessage extends TgMessage {
    constructor(update: any) {
        super(update);
    }

    getChatId(): string {
        return this._update.message.chat_id;
    }

    getMessageId(): string {
        return this._update.message.message_id;
    }
}