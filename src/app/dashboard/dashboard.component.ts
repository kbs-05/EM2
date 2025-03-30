import { Component, HostListener } from '@angular/core';
import type { OnInit, AfterViewInit } from '@angular/core'; // Import séparé pour les types

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, AfterViewInit {
  isNavbarScrolled = false;
  showScrollToTop = false;

  constructor() { }

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.isNavbarScrolled = window.scrollY > 100;
    this.showScrollToTop = window.scrollY > 300;
    this.checkElementVisibility();
  }

  ngOnInit(): void {
    this.initializeCounter();
  }

  ngAfterViewInit(): void {
    // Initialisation après le rendu de la vue
  }

  private initializeCounter(): void {
    // Implémentation native
    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => {
      const target = +(counter.getAttribute('data-target') || 0);
      const duration = 2000;
      const start = 0;
      const increment = target / (duration / 16);

      const updateCounter = () => {
        const current = +(counter.textContent || 0);
        if (current < target) {
          counter.textContent = Math.ceil(current + increment).toString();
          requestAnimationFrame(updateCounter);
        } else {
          counter.textContent = target.toString();
        }
      };

      updateCounter();
    });
  }

  private checkElementVisibility(): void {
    const elements = document.querySelectorAll('.animate-card');
    elements.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom >= 0) {
        el.classList.add('animate__animated', 'animate__fadeInUp');
      }
    });
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  smoothScroll(target: string): void {
    const element = document.querySelector(target);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
}