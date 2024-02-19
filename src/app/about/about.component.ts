import {Component} from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';

@Component({
    selector: 'about',
    styleUrls: ['./about.style.css'],
    templateUrl: './about.template.html',
    standalone: true,
    imports: [MatTabsModule]
})
export class About {
}
