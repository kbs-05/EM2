import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Importez le service Router

@Component({
  selector: 'app-faq',
  standalone: false,
  templateUrl: './faq.component.html',
  styleUrl: './faq.component.css'
})
export class FaqComponent {

  // Injectez le service Router dans le constructeur
  constructor(private router: Router) {}

  // Méthode pour revenir à la page précédente
  goBack() {
    this.router.navigate(['/dashboard']); // Remplacez '/dashboard' par la route souhaitée
  }
}