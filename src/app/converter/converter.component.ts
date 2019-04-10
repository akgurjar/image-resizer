import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Location } from '@angular/common';
import { FileUrlPipe } from '../shared/pipes/file-url/file-url.pipe';
import { Store } from '@ngrx/store';
import { DataStore, AddPictureAction } from '../common/store';

const allowedFileTypes: string[] = ['image/png', 'image/jpg', 'image/jpeg'];
const fileUrlPipe = new FileUrlPipe();

@Component({
  selector: 'app-converter',
  templateUrl: './converter.component.html',
  styleUrls: ['./converter.component.scss']
})
export class ConverterComponent implements OnInit {
  fileUrl: string = null;
  @ViewChild('canvas') canvasRef: ElementRef<HTMLCanvasElement>;
  constructor(
    public location: Location,
    private _store: Store<DataStore>
  ) { }

  ngOnInit() {
  }
  onSelectImage(input: HTMLInputElement) {
    const file = input.files.item(0);
    if (file && allowedFileTypes.includes(file.type)) {
      fileUrlPipe.transform(file).then((url: string) => {
        this.fileUrl = url;
      });
    }
  }
  onLoadImage(img: HTMLImageElement) {
    // console.log(img);
    if (this.canvasRef) {
      const context = this.canvasRef.nativeElement.getContext('2d');
      context.drawImage(img, 0, 0, img.width, img.height);
    }
  }
  onUploadFile() {
    const data = {
      originalUrl: this.fileUrl,
      resizeUrl: this.canvasRef.nativeElement.toDataURL('image/png')
    };
    this._store.dispatch(new AddPictureAction(data));
    this.location.back();
  }
}
