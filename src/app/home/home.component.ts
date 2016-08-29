import {Component} from '@angular/core';

import {Title} from './title';
import {XLarge} from './x-large';

@Component({
  selector: 'home',
  providers: [Title],
  directives: [XLarge],
  styleUrls: ['./home.style.css'],
  templateUrl: './home.template.html'
})
export class Home {
  // Set our default values
  localState = {value: ''};
  // TypeScript public modifiers
  constructor(public title: Title) {}

  ngOnInit() {
    console.log('hello `Home` component');
    // this.title.getData().subscribe(data => this.data = data);
  }

  submitState(value) {
    console.log('submitState', value);
    this.localState.value = '';
  }
}
