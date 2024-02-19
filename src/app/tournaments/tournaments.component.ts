import {Component} from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
    selector: 'tournaments',
    styleUrls: ['./tournaments.style.css'],
    templateUrl: './tournaments.template.html',
    standalone: true,
    imports: [MatTabsModule]
})
export class Tournaments {
  constructor() {
  }
}
