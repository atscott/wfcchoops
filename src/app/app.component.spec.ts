import {Component} from '@angular/core';
import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {provideRoutes, RouterModule, Routes} from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';
import {MdModule} from './md.module';

import {AppComponent} from './app.component';
import {AppModule} from './app.module';

@Component({selector: 'app-test-cmp', template: ''})
class BlankCmp {
}

let config: Routes = [{path: '', component: BlankCmp}];

describe('App', () => {

  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BlankCmp],
      imports: [AppModule, MdModule, RouterTestingModule, RouterModule],
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

  it('should set sidenav mode to "over" for small screens', async(() => {
    fixture.detectChanges();

    fixture.componentInstance.onResize(300);
    expect(fixture.componentInstance.sidenavMode).toEqual('over');

    fixture.detectChanges();
    const sidenav = fixture.nativeElement.querySelector('md-sidenav');
    expect(sidenav.getAttribute('ng-reflect-mode')).toEqual('over');
  }));

});
