import {TgMessage} from './tg_message';
import {TgNullableMessages} from './tg_nullable_message';

type TgMessageConstructor = new () => TgMessage;
type TgMessageConstructorOrName = TgMessageConstructor;

export class TgMessageBuilder {
    private _updateMessageConstuctorRepo: any;

    constructor(updateMessageConstuctorRepo: any) {
        this._updateMessageConstuctorRepo = updateMessageConstuctorRepo;
    }

    private _isChannelUpdateConstructorName(mayBeChannelUpdatesConstructorName: string): boolean {
        let result = false;
        Object.keys(this._updateMessageConstuctorRepo).map((consturctorName: string) => {
            if(mayBeChannelUpdatesConstructorName === consturctorName)
                result = true;
        });
        return result;
    }
    private _isChannelUpdatesConstructor(mayBeChannelUpdatesConstructor: TgMessageConstructorOrName): mayBeChannelUpdatesConstructor is TgMessageConstructor {
        return Object.getPrototypeOf(mayBeChannelUpdatesConstructor) === TgMessage;
    }
    
    construct(update: any): TgMessage {
        // console.log('_updateMessageConstuctorRepo',this._updateMessageConstuctorRepo)

        const updateMessageConstructorOrName: TgMessageConstructorOrName = update['@type'];
        if(this._isChannelUpdatesConstructor(updateMessageConstructorOrName))
            return new updateMessageConstructorOrName();
        
        return (this._isChannelUpdateConstructorName(updateMessageConstructorOrName)) 
        ? new this._updateMessageConstuctorRepo[updateMessageConstructorOrName](update)
        : new TgNullableMessages(updateMessageConstructorOrName)
    }
}