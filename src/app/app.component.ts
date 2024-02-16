import { Component } from "@angular/core";
import { HomeComponent } from "./home/home.component";
import { RouterModule } from "@angular/router";

@Component({
  selector: "app-root",
  styleUrls: ["./app.component.css"],
  standalone: true,
  imports: [HomeComponent,RouterModule],
  template: `
      <main>
        <a [routerLink]="['/']">
          <header class="brand-name">
            <img class="brand-logo" src="/assets/logo.svg" alt="logo" aria-hidden="true">
          </header>
        </a>
        <section class="content">
          <router-outlet></router-outlet>
        </section>
      </main>
    `,
})
export class AppComponent {
  public title = "Homes";
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
