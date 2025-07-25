import { Component } from '@angular/core';

@Component({
  selector: 'app-splash-screen',
  standalone: false,
  templateUrl: './splash-screen.component.html',
  styleUrl: './splash-screen.component.css'
})
export class SplashScreenComponent {
  showSplash = true;

  ngOnInit() {
    setTimeout(() => {
      this.showSplash = false;
    }, 3000); // 3 secondes
  }
}
