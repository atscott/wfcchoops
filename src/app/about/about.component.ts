import {Component} from '@angular/core';

@Component({
  selector: 'about',
  styles: [`
  `],
  templateUrl: './about.template.html'
})
export class About {
  constructor() {}

  ngOnInit() { console.log('hello `About` component'); }
}
