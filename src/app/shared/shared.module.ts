import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatIconModule,
  MatButtonModule,
  MatToolbarModule,
  MatRippleModule,
} from '@angular/material';
import { InfiniteScrollDirective } from './directives/infinite-scroll/infinite-scroll.directive';
import { PullRefreshDirective } from './directives/pull-refresh/pull-refresh.directive';
import { DataUrlPipe } from './pipes/data-url/data-url.pipe';
import { FileUrlPipe } from './pipes/file-url/file-url.pipe';
import { AppEffects } from '../app.effects';
import { ApiService } from './services/api/api.service';

const Modules = [
  MatIconModule,
  MatButtonModule,
  MatToolbarModule,
  MatRippleModule
];

@NgModule({
  declarations: [
    InfiniteScrollDirective,
    PullRefreshDirective,
    FileUrlPipe,
    DataUrlPipe,
  ],
  imports: [
    CommonModule,
    ...Modules
  ],
  exports: [
    ...Modules,
    InfiniteScrollDirective,
    PullRefreshDirective,
    FileUrlPipe,
    DataUrlPipe,
  ],
  providers: [
    AppEffects,
    ApiService
  ]
})
export class SharedModule { }
