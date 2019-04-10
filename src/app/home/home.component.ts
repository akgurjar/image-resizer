import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { DataStore, pictureAdaptor, Picture } from '../common/store';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  pictures: Picture[] = null;
  constructor(store: Store<DataStore>) {
    store.select('pictures').pipe(map(pictureAdaptor.getSelectors().selectAll)).subscribe((pictures) => {
      this.pictures = pictures;
    });
  }

  ngOnInit() {
  }

}
