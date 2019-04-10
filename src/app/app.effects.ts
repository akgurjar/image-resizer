import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { ApiService } from './shared/services/api/api.service';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class AppEffects {
  @Effect()
  loadMovies$ = this.actions$.pipe(
    ofType('[Picture] Load Picture'),
    mergeMap(() => this.api.loadImages()
      .pipe(
        map(movies => ({ type: '[Picture API] Image Loaded Success', payload: movies })),
        catchError(() => of({ type: '[Picture API] Picture Loaded Error' }))
      ))
  );
  constructor(private actions$: Actions, private api: ApiService) {}
}
