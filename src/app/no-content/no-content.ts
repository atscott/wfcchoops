import {Component} from '@angular/core';

@Component({
    selector: 'no-content',
    template: `
    <div>
      <h1>404: page missing</h1>
    </div>
  `,
    standalone: true
})
export default class NoContent {

}
