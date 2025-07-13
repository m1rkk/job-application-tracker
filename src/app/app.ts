import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template:`<router-outlet></router-outlet>`,
  standalone: true,
  styles:[]
})
export class App {
  protected title = 'job-application-tracker';
}
