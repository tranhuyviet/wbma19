import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';

import { PhotoViewer } from '@ionic-native/photo-viewer';

import { Pic } from '../../interfaces/pic';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  picArray: Pic[] = [];
  url = 'http://media.mw.metropolia.fi/wbma/uploads/';

  constructor(
    public navCtrl: NavController,
    private photoViewer: PhotoViewer,
    public http: HttpClient
  ) {}

  ngOnInit() {
    this.getPic();
  }

  getPic() {
    // this.http.get('../../assets/test.json').subscribe((result: Pic[]) => {
    this.http.get<Pic[]>('http://media.mw.metropolia.fi/wbma/media').subscribe((result: Pic[]) => {
      this.picArray = result;
      console.log(this.picArray);
    });
  }

  viewOriginalImage(linkImage: string) {
    this.photoViewer.show(this.url + linkImage);
  }
}
