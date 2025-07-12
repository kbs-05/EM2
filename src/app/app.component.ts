import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'EM';
  showSplash = true;

  constructor() {
    setTimeout(() => {
      this.showSplash = false;
    }, 3000);
  }

}
