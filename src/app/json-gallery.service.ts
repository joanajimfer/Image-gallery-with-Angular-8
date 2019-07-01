import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JsonGalleryService {

  constructor(private httpService: HttpClient) { }
  getGallery() {
    return this.httpService.get('../../assets/gallery.json');
  }
}
