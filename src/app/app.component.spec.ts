import {Component} from '@angular/core';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import {provideRoutes, RouterModule, Routes} from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';
import {MatModule} from './md.module';

import {AppComponent} from './app.component';
import {AppModule} from './app.module';

@Component({
    selector: 'app-test-cmp', template: '',
    standalone: true,
    imports: [AppModule, MatModule, RouterTestingModule, RouterModule]
})
class BlankCmp {
}

let config: Routes = [{path: '', component: BlankCmp}];

describe('App', () => {

  let fixture: ComponentFixture<AppComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
    imports: [AppModule, MatModule, RouterTestingModule, RouterModule, BlankCmp],
    // TODO: routertestingmodule.withroutes when it's available
    providers: [provideRoutes(config)]
});
    TestBed.compileComponents().then(
        () => {
          fixture = TestBed.createComponent(AppComponent);
        });

  }));

  it('should only have routes with titles', () => {
    expect(fixture.componentInstance.routes.every(r => r.data['title']))
        .toBe(true);
  });

  it('should set sidenav mode to "over" for small screens', waitForAsync(() => {
    fixture.detectChanges();

    fixture.componentInstance.onResize(300);
    expect(fixture.componentInstance.sidenavMode).toEqual('over');

    fixture.detectChanges();
    const sidenav = fixture.nativeElement.querySelector('mat-sidenav');
    expect(sidenav.getAttribute('ng-reflect-mode')).toEqual('over');
  }));

});
