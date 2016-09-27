import {Component} from '@angular/core';

@Component({
  selector: 'open-gym',
  styles: [``],
  template: `
<div class="main">
  <h2>WFCC Open-Gym Schedule</h2>
  There are no open gyms scheduled for this time.
  Having trouble viewing? Download this pdf <a href="http://wfcchoops.com/assets/docs/Open Gyms Fall.pdf">here</a>
  <iframe src="http://docs.google.com/gview?url=http://wfcchoops.com/assets/docs/Open Gyms Fall.pdf&amp;embedded=true" style="width: 100%; height: 800px;" frameborder="0"></iframe><br>
</div>`
})
export class OpenGym {
  constructor() {
  }
}
