import { Component, OnInit, Input } from '@angular/core';
import { Picture } from 'src/app/common/store';

@Component({
  selector: 'app-image-card',
  templateUrl: './image-card.component.html',
  styleUrls: ['./image-card.component.scss']
})
export class ImageCardComponent implements OnInit {
  @Input() picture: Picture;
  constructor() { }

  ngOnInit() {
  }

}
