import {Component} from '@angular/core';
import { MatLegacyTabsModule as MatTabsModule } from '@angular/material/legacy-tabs';

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
