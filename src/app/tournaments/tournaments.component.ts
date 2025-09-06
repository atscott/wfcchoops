import {Component} from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
    selector: 'tournaments',
    styleUrls: ['./tournaments.style.scss'],
    templateUrl: './tournaments.template.html',
    imports: [MatTabsModule]
})
export default class Tournaments {
}
