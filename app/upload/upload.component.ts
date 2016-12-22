import {Component, ChangeDetectorRef} from "@angular/core";

import {FileUploader, FileSelectDirective, FileDropDirective } from "ng2-file-upload";

const URL = 'http://localhost:3009/api/';


@Component({
  moduleId: module.id,
  selector: 'charon-upload',
  templateUrl: 'upload.component.html',
  styleUrls: ['upload.component.css']
})
export class UploadComponent {
  public uploader:FileUploader = new FileUploader({url: URL});
  public hasBaseDropZoneOver:boolean = false;

  constructor(private changeDetector: ChangeDetectorRef){}

  uploadAll() {
    // for (let file of this.uploader.queue) {
    //   file.onProgress = (progress: any) => {
    //     this.changeDetector.detectChanges();
    //   }
    // }
    this.uploader.uploadAll();
  }

  public fileOverBaseArea(e:any):void {
    this.hasBaseDropZoneOver = e;
  }

  public fileDropOnBaseArea(e: File[]):void {
    let file = this.uploader.queue.pop();
    file.onProgress = (progress: any) => {
      this.changeDetector.detectChanges();
    };
    this.uploader.queue.push(file);
    file.upload();
  }

}
