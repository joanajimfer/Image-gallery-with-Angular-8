import { Component, OnInit } from '@angular/core';
import { JsonGalleryService } from './../json-gallery.service';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  title = 'Image-gallery';
  gallery;
  constructor(private myService: JsonGalleryService) {}

  ngOnInit() {
    this.myService.getGallery()
      .subscribe(res => this.gallery = res);
  }

}
