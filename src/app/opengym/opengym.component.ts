import {Component} from '@angular/core';

@Component({
  selector: 'open-gym',
  styles: [`
  `],
  template: `
<div class="main">
<h2>WFCC Open-Gym Schedule</h2>
There are no open gyms scheduled for this time.
<!--Having trouble viewing? Download this pdf <a href="http://wfcchoops.com/files/docs/Open Gyms Fall 2014.pdf">here</a>
<iframe src="http://docs.google.com/gview?url=http://wfcchoops.com/files/docs/Open Gyms Fall 2014.pdf&amp;embedded=true" style="width: 100%; height: 800px;" frameborder="0"></iframe><br>
-->
<!--<h3>An invitation from Coach Haese</h3><strong><br></strong><strong>When:</strong> Monday's and Wednesday's at the WHS gym from 6:00-7:30 <br><strong>Dates:</strong>
<ul>
<li><span style="color: red;" _mce_style="color: red;">June</span> 6, 8, 13, 15, 20, 22, 27, 29</li>
<li><span style="color: red;" _mce_style="color: red;">July</span> 6, 11, 13, 18, 20</li>
</ul>--></div>
  `
})
export class OpenGym {
  constructor() {}
}
