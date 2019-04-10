import { Action } from '@ngrx/store';
import { PictureData, Picture } from './model';

/**
 * @description Unique Action Type Enum
 */
export enum ActionType {
    Add = '[Picture] ADD',
    Delete = '[Picture] DELETE'
}


/**
 * @description Action to add picture in store
 */
export class AddPictureAction implements Action {
    readonly type: ActionType = ActionType.Add;
    payload: Picture;
    constructor(data: PictureData) {
        this.payload = {
            id: Date.now().toString(),
            createdAt: new Date(),
            ...data
        };
    }
}

/**
* @description Action to Delete a picture from store
*/
export class DeletePictureAction implements Action {
   readonly type: ActionType = ActionType.Delete;
   constructor(public payload: string) { }
}

/**
 * @description type of all actions
 */
export type PictureAction = AddPictureAction | DeletePictureAction;