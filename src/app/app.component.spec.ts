import { provideLocationMocks } from "@angular/common/testing";
import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { provideRouter } from "@angular/router";

import { AppComponent } from "./app.component";
import { ROUTES } from "./app.routes";

describe("App", () => {
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    TestBed.configureTestingModule({
      // TODO: routertestingmodule.withroutes when it's available
      providers: [provideRouter(ROUTES), provideLocationMocks()],
    });
    await TestBed.compileComponents();
    fixture = TestBed.createComponent(AppComponent);
  });

  it("should only have routes with titles", () => {
    expect(
      fixture.componentInstance.routes.every((r) => r.data?.["title"])
    ).toBe(true);
  });

  it('should set sidenav mode to "over" for small screens', async () => {
    fixture.detectChanges();

    fixture.componentInstance.onResize(300);
    expect(fixture.componentInstance.sidenavMode).toEqual("over");

    fixture.detectChanges();
    const sidenav = fixture.nativeElement.querySelector("mat-sidenav");
    expect(sidenav.getAttribute("ng-reflect-mode")).toEqual("over");
  });
});
