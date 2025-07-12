import { Component, HostListener, OnInit, AfterViewInit, ElementRef, Renderer2, ViewChildren, QueryList } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  standalone:false,
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit, AfterViewInit {
  @ViewChildren('animateCard') animateCards!: QueryList<ElementRef>;
  @ViewChildren('counterElement') counterElements!: QueryList<ElementRef>;
  
  isNavbarScrolled = false;
  showScrollToTop = false;
  stats = [
    { current: 0, target: 1000, icon: 'fa-user-graduate', text: 'Étudiants diplômés', prefix: '+' },
    { current: 0, target: 50, icon: 'fa-chalkboard-teacher', text: 'Enseignants', prefix: '+' },
    { current: 0, target: 85, icon: 'fa-briefcase', text: 'Taux d\'insertion professionnelle', suffix: '%' },
    { current: 0, target: 7, icon: 'fa-building', text: 'Départements', prefix: '' }
  ];

  constructor(private renderer: Renderer2) {}

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.isNavbarScrolled = window.scrollY > 100;
    this.showScrollToTop = window.scrollY > 300;
    this.checkElementVisibility();
  }

  ngOnInit(): void {
    this.startCountersAnimation();
  }

  ngAfterViewInit(): void {
    this.setupCardHoverEffects();
    this.setupSmoothScrolling();
    this.checkElementVisibility(); // Vérifie immédiatement les éléments visibles
  }

  private startCountersAnimation(): void {
    const duration = 4000; // Durée totale de l'animation en ms
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1); // Normalisé entre 0 et 1

      // Met à jour toutes les valeurs
      this.stats.forEach(stat => {
        stat.current = Math.floor(progress * stat.target);
      });

      // Continue l'animation si pas terminée
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    // Démarre l'animation
    requestAnimationFrame(animate);
  }

  private checkElementVisibility(): void {
    if (!this.animateCards) return;

    const windowHeight = window.innerHeight;
    const windowBottom = window.scrollY + windowHeight;

    this.animateCards.forEach(card => {
      const cardElement = card.nativeElement;
      const rect = cardElement.getBoundingClientRect();
      const cardTop = window.scrollY + rect.top;
      const cardBottom = cardTop + rect.height;

      // Vérifie si la carte est dans la vue
      const isVisible = (cardTop <= windowBottom) && (cardBottom >= window.scrollY);
      
      if (isVisible && !cardElement.classList.contains('animate__animated')) {
        this.renderer.addClass(cardElement, 'animate__animated');
        this.renderer.addClass(cardElement, 'animate__fadeInUp');
      }
    });
  }

  private setupCardHoverEffects(): void {
    // Cette fonctionnalité est maintenant gérée directement dans le template
    // avec (mouseenter) et (mouseleave)
  }

  private setupSmoothScrolling(): void {
    // La navigation est gérée par Angular Router
    // Cette méthode peut être supprimée si vous utilisez routerLink
  }

  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  onCardHover(cardTitle: HTMLElement, isHovered: boolean): void {
    this.renderer.setStyle(
      cardTitle,
      'color',
      isHovered ? 'var(--secondary-color)' : ''
    );
  }

  // Méthode pour le défilement fluide vers une section
  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 70; // Ajustez selon la hauteur de votre navbar
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      
      window.scrollTo({
        top: elementPosition - offset,
        behavior: 'smooth'
      });
    }
  }
}