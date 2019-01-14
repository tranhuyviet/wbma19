import { Component } from '@angular/core';

class Pic {
  constructor(
      public title: string,
      public details: string,
      public thumbnail: string,
      public original: string,
  ) {
  }

}


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  picArray: Pic[] = [
    {
      'title': 'Title 1',
      'details': 'Lorem ipsum dolor sit am',
      'thumbnail': 'http://placekitten.com/310/302',
      'original': 'http://placekitten.com/2048/1920',
    },
    {

      'title': 'Title 2',
      'details': 'Donec dignissim tincidunt ',
      'thumbnail': 'http://placekitten.com/321/300',
      'original': 'http://placekitten.com/2041/1922',
    },
    {
      'title': 'Title 3',
      'details': 'Phasellus imperdiet nunc is',
      'thumbnail': 'http://placekitten.com/319/301',
      'original': 'http://placekitten.com/2039/1920',
    },
  ];



}
