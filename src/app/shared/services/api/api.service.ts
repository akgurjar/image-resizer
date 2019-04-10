import { Injectable } from '@angular/core';
import { from } from 'rxjs';

@Injectable()
export class ApiService {

  constructor() { }
  loadImages() {
    return from([]);
  }
}
