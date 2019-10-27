


import {TgMessage} from './tg_message';

export class TgDeleteMessages extends TgMessage {
    constructor(type: string) {
        super(type);
    }
    
    getChatId(): string {
        return  this._update.chat_id;
    }

    getMessageId(): string {
        return  this._update.message_id;
    }
}
