import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'tournaments',
  encapsulation: ViewEncapsulation.None,
  styles: [`
    tournaments md-tab-group .md-tab-label[class] {
      min-width: 33.34%;
    }
  `],
  templateUrl: './tournaments.template.html'
})
export class Tournaments {
  constructor() {
  }
}
