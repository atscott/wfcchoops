import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'about',
  encapsulation: ViewEncapsulation.None,
  styles: [require('./about.style.css')],
  templateUrl: './about.template.html'
})
export class About {
  constructor() {
  }

  ngOnInit() {
    console.log('hello!!! `About` component');
  }
}
