import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

import { PhotoViewer } from '@ionic-native/photo-viewer';

import { Media } from '../../interfaces/media';
import { HttpClient } from '@angular/common/http';
import { MediaProvider } from '../../app/services/provider/media/media';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  media: Media[] = [];
  url = 'http://media.mw.metropolia.fi/wbma/uploads/';

  constructor(
    public navCtrl: NavController,
    private photoViewer: PhotoViewer,
    public http: HttpClient,
    private mediaProvider: MediaProvider
  ) {}

  ngOnInit() {
    this.mediaProvider.getAllMedia().subscribe((result: Media[]) => {
      this.media = result;
      console.log(this.media);
    });
  }


  viewOriginalImage(linkImage: string) {
    this.photoViewer.show(this.url + linkImage);
  }
}
