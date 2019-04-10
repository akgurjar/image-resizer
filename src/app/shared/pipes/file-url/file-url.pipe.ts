import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fileUrl'
})
export class FileUrlPipe implements PipeTransform {

  transform(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      try {
        const reader = new FileReader();
        reader.addEventListener('load', function loader() {
          resolve(reader.result as string);
          reader.removeEventListener('load', loader, false);
        }, false);
        reader.readAsDataURL(file);
      } catch(error) {
        reject(error);
      }
    });
  }

}
