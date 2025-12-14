import {
  Component,
  HostListener,
  OnInit,
  AfterViewInit,
  ElementRef,
  Renderer2,
  ViewChildren,
  QueryList
} from '@angular/core';
import { Firestore, collectionData, collection, query, orderBy } from '@angular/fire/firestore';
import { Observable, map } from 'rxjs';

// =======================
// INTERFACES
// =======================

interface Stat {
  current: number;
  target: number;
  icon: string;
  text: string;
  prefix?: string;
  suffix?: string;
}

export interface Actualite {
  id: string;
  titre: string;
  excerpt: string;
  date: string;
  featuredImage: string;
  category?: string;
  published: boolean;
}

// =======================
// COMPONENT
// =======================

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  standalone: false // pour l’ancienne version Angular
})
export class DashboardComponent implements OnInit, AfterViewInit {

  @ViewChildren('animateCard') animateCards!: QueryList<ElementRef>;

  isNavbarScrolled = false;
  showScrollToTop = false;

  // =======================
  // STATS
  // =======================

  stats: Stat[] = [
    { current: 0, target: 1000, icon: 'fa-user-graduate', text: 'Étudiants diplômés', prefix: '+' },
    { current: 0, target: 50, icon: 'fa-chalkboard-teacher', text: 'Enseignants', prefix: '+' },
    { current: 0, target: 85, icon: 'fa-briefcase', text: 'Taux d\'insertion professionnelle', suffix: '%' },
    { current: 0, target: 7, icon: 'fa-building', text: 'Départements' }
  ];

  // =======================
  // FIREBASE REAL-TIME DATA
  // =======================

  actualites$: Observable<Actualite[]>;

  constructor(
    private renderer: Renderer2,
    private firestore: Firestore
  ) {
    const ref = collection(this.firestore, 'actualites');
    const q = query(ref, orderBy('date', 'desc'));

    // 🔥 Charger toutes les actus en temps réel (typées)
    this.actualites$ = collectionData(q, { idField: 'id' }) as Observable<Actualite[]>;
  }

  // 🔥 NE MONTRER QUE LES ACTUS PUBLIÉES
  get publishedActualites$(): Observable<Actualite[]> {
    return this.actualites$.pipe(
      map((actualites: Actualite[]) =>
        actualites.filter((a: Actualite) => a.published === true)
      )
    );
  }

  // =======================
  // LIFECYCLES
  // =======================

  ngOnInit(): void {
    this.animateCounters();
  }

  ngAfterViewInit(): void {
    this.checkVisibleCards();
  }

  // =======================
  // ANIMATIONS
  // =======================

  private animateCounters(): void {
    const duration = 2000;
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      this.stats.forEach(stat => {
        stat.current = Math.floor(progress * stat.target);
      });

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }

  private checkVisibleCards(): void {
    if (!this.animateCards) return;

    const windowHeight = window.innerHeight;
    const windowBottom = window.scrollY + windowHeight;

    this.animateCards.forEach(card => {
      const el = card.nativeElement;
      const rect = el.getBoundingClientRect();
      const elTop = window.scrollY + rect.top;
      const elBottom = elTop + rect.height;

      const isVisible = elTop <= windowBottom && elBottom >= window.scrollY;

      if (isVisible && !el.classList.contains('animate__animated')) {
        this.renderer.addClass(el, 'animate__animated');
        this.renderer.addClass(el, 'animate__fadeInUp');
      }
    });
  }

  // =======================
  // SCROLLING
  // =======================

  @HostListener('window:scroll')
  onWindowScroll(): void {
    this.isNavbarScrolled = window.scrollY > 100;
    this.showScrollToTop = window.scrollY > 300;
    this.checkVisibleCards();
  }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  scrollToSection(sectionId: string): void {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 70;
      const position = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top: position - offset, behavior: 'smooth' });
    }
  }
}
