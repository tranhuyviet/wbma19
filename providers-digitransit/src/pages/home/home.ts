import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

import { PhotoViewer } from '@ionic-native/photo-viewer';

import { Media } from '../../interfaces/media';
import { HttpClient } from '@angular/common/http';
import { MediaProvider } from '../../app/services/provider/media/media';
import { DigitransitProvider } from '../../app/services/provider/digitransit/digitransit';

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
    private mediaProvider: MediaProvider,
    private digitransitProvider: DigitransitProvider
  ) {}

  ngOnInit() {
    this.digitransitProvider.getDigitransit().subscribe((result) => {
      console.log(result);
    });
  }


  viewOriginalImage(linkImage: string) {
    this.photoViewer.show(this.url + linkImage);
  }
}
