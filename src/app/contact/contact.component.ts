import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Importez le service Router

@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  // Injectez le service Router dans le constructeur
  constructor(private router: Router) {}

  // Méthode pour revenir à la page précédente
  goBack() {
    this.router.navigate(['/dashboard']); // Remplacez '/dashboard' par la route souhaitée
  }
}