import { NgOptimizedImage } from "@angular/common";
import { Component, OnDestroy, OnInit, signal } from "@angular/core";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { MatLineModule } from "@angular/material/core";
import { MatDividerModule } from "@angular/material/divider";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { MatToolbarModule } from "@angular/material/toolbar";
import { RouterLink, RouterLinkActive, RouterOutlet } from "@angular/router";

import { ROUTES } from "./app.routes";

@Component({
  selector: "app",
  styleUrls: ["./app.style.scss"],
  templateUrl: "./app.template.html",
  imports: [
    MatListModule,
    RouterLinkActive,
    RouterLink,
    MatLineModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    RouterOutlet,
    MatDividerModule,
    NgOptimizedImage,
  ],
})
export class AppComponent {
  routes = ROUTES.filter((r) => r.title);
  isSidenavOpen = signal(false);

  constructor() {
    if (typeof document !== "undefined")
      window.addEventListener("keydown", (event: KeyboardEvent) => {
        if (event.key === "Escape") {
          this.isSidenavOpen.set(false);
        }
      });
  }

  toggleSidenav() {
    this.isSidenavOpen.update((open) => !open);
  }
}
