

import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { IdSelector } from '@ngrx/entity/src/models';


export interface PictureData {
    originalUrl: string;
    resizeUrl: string;
}

export interface Picture extends PictureData {
    id: string;
    createdAt: Date;
}

export interface State extends EntityState<Picture> {}

export interface DataStore {
    pictures: State;
}

export const pictureAdaptor: EntityAdapter<Picture> = createEntityAdapter<Picture>({
    sortComparer(a: Picture, b: Picture): number {
        return a.createdAt.getTime() - b.createdAt.getTime();
    }
});