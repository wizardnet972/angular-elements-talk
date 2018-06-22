import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  repo = 'angular/angular';

  contribution = null;

  pick(contribution) {
    this.contribution = contribution;
  }


}
