import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dataUrl'
})
export class DataUrlPipe implements PipeTransform {

  transform(value: string, convertFlag: boolean = false, fileName?: string): boolean | Blob | File {
    const dataUrlRegex = /^\s*data:([a-z]+\/[a-z]+(;[a-z\-]+\=[a-z\-]+)?)?(;base64)?,[a-z0-9\!\$\&\'\,\(\)\*\+\,\;\=\-\.\_\~\:\@\/\?\%\s]*\s*$/i;
    if (convertFlag) {
      // const docUrl: string = group.controls['docUrl'].value;
      // const fileName: string = group.controls['filename'].value;
      // convert base64 to raw binary data held in a string
      // doesn't handle URLEncoded DataURIs - see SO answer #6850276 for code that does this
      var byteString = atob(value.split(',')[1]);

      // separate out the mime component
      var mimeString = value.split(',')[0].split(':')[1].split(';')[0];

      // write the bytes of the string to an ArrayBuffer
      var ab = new ArrayBuffer(byteString.length);
      var ia = new Uint8Array(ab);
      for (var i = 0; i < byteString.length; i++) {
          ia[i] = byteString.charCodeAt(i);
      }

      //Old Code
      //write the ArrayBuffer to a blob, and you're done
      //var bb = new BlobBuilder();
      //bb.append(ab);
      //return bb.getBlob(mimeString);

      //New Code
      const blob = new Blob([ab], {type: mimeString});
      if (fileName) {
        return new File([blob], fileName);
      }
      return blob;
    }
    return !!value.match(dataUrlRegex);
  }

}
