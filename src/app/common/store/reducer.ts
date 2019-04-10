import { State, pictureAdaptor, Picture, DataStore } from './model';
import { ActionType, PictureAction } from './actions';
import { ActionReducerMap } from '@ngrx/store';


export const initialState: State = pictureAdaptor.getInitialState<State>({
    ids: [],
    entities: {}
});

export function picturesReducer(state = initialState, action: PictureAction): State {
    switch (action.type) {
        case ActionType.Add: {
            const payload: Picture = action.payload as Picture;
            return pictureAdaptor.addOne(payload, state);
        }
        case ActionType.Delete: {
            const id: string = action.payload as string;
            return pictureAdaptor.removeOne(id, state);
        }
        default: {
            return state;
        }
    }
}

export const reducers: ActionReducerMap<DataStore> = {
    pictures: picturesReducer
};
