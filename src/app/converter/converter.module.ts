import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConverterRoutingModule } from './converter-routing.module';
import { ConverterComponent } from './converter.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ConverterComponent],
  imports: [
    CommonModule,
    ConverterRoutingModule,
    SharedModule
  ]
})
export class ConverterModule { }
