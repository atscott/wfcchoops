import {Component} from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
    selector: 'about',
    styleUrls: ['./about.style.scss'],
    templateUrl: './about.template.html',
    imports: [MatTabsModule]
})
export default class About {
}
