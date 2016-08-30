import {Component} from '@angular/core';

@Component({
  selector: 'links',
  styles: [`
  `],
  template: `
<div class="main">
<h3>Links to tournament-listing sites and other local basketball clubs</h3>
<ul>
<li><a href="http://www.greenbaypressgazette.com/apps/pbcs.dll/section?category=GPG0210">Green Bay Press Gazette tournament listings</a> 
<ul>
<li><em>Look for "Upcoming events" under the dates listed.</em></li>
</ul>
</li>
<li><a href="http://www.wissports.net/eventfind.asp?ETID=1&amp;sportID=1&amp;ageID=">Wisconsin Hoops</a></li>
<li><span style="color: #000000; font-family: Arial, sans-serif; line-height: 15px; white-space: pre-wrap;"><a href="gnlb.org">Wisconsin State Invitational Championship Tournaments</a></span></li>
<li><a href="http://eteamz.active.com/foxvalleybasketball/">Matt McCabe's ball-handling clinics</a></li>
<li><a href="http://www.redbirdbasketball.com">De Pere Basketball</a></li>
<li><a href="http://www.westdeperebasketball.com">West De Pere Basketball</a></li>
<li><a href="http://southwestyouthbasketball.com">Green Bay Southwest Boys Youth Basketball</a></li>
<li><a href="http://www.kaukaunaboyshoopsclub.com">Kaukauna Boys Hoops Club</a></li>
<li><a href="http://www.aeyba.com">Appleton East Youth Basketball Association</a></li>
<li><a href="http://www.nlgyba.com">New London Girls Youth Basketball Association</a></li>
<li><a href="http://www.owbc.org">Oshkosh West Basketball Club</a></li>
</ul>
</div>
  `
})
export class Links {
  constructor() {}
}
