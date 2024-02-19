import {Component} from '@angular/core';
import { MatLegacyTabsModule as MatTabsModule } from '@angular/material/legacy-tabs';

@Component({
    selector: 'about',
    styleUrls: ['./about.style.css'],
    templateUrl: './about.template.html',
    standalone: true,
    imports: [MatTabsModule]
})
export class About {
}
