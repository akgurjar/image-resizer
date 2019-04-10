import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { DataStore, pictureAdaptor, State, Picture } from '../common/store';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss']
})
export class ViewComponent implements OnInit {
  picture: Picture = null;
  constructor(
    route: ActivatedRoute,
    public location: Location,
    store: Store<DataStore>
  ) {
    route.params.subscribe(({picture}) => {
      if (picture) {
        store.select('pictures').pipe(map((state: State) => {
          const ids: string[] = pictureAdaptor.getSelectors().selectIds(state) as string[];
          if (ids.indexOf(picture) !== -1) {
            return pictureAdaptor.getSelectors().selectEntities(state)[picture];
          }
          return null;
        })).subscribe((picture: Picture) => {
          this.picture = picture;
        });
      }
    });
  }

  ngOnInit() {
  }

}
