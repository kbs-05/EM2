import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css'],
  standalone: true,
  imports: [FormsModule, CommonModule]
})
export class FaqComponent {
  formData = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };
  
  // Propriétés ajoutées pour le template
  errorMessage: string | null = null;
  submitSuccess: boolean = false;
  currentYear: number = new Date().getFullYear();
  
  isLoading = false;

  constructor(private router: Router, private http: HttpClient) {}

  onSubmit() {
    if (!this.validateForm()) {
      this.errorMessage = 'Veuillez remplir tous les champs requis';
      this.submitSuccess = false;
      return;
    }

    this.isLoading = true;
    this.errorMessage = null;

    const emailjsData = {
      service_id: 'service_v3chcmd',
      template_id: 'template_wjxifao',
      user_id: 'RX9gEtlcfc4SgOwJe',
      template_params: {
        from_name: this.formData.name,
        from_email: this.formData.email,
        reply_to: this.formData.email,
        subject: this.formData.subject,
        message_content: this.formData.message,
        to_email: 'tumbalombeisaacbaboungui@gmail.com'
      }
    };

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Origin': window.location.origin
    });

    this.http.post('https://api.emailjs.com/api/v1.0/email/send', emailjsData, { 
      headers,
      responseType: 'text' 
    }).subscribe({
      next: (response) => {
        console.log('Email envoyé', response);
        this.submitSuccess = true;
        this.resetForm();
        this.isLoading = false;
      },
      error: (err) => {
        console.error("Erreur lors de l'envoi", err);
        this.errorMessage = err.message || "Échec de l'envoi du message";
        this.submitSuccess = false;
        this.isLoading = false;
      }
    });
  }

  private validateForm(): boolean {
    return !!(
      this.formData.name && 
      this.formData.email && 
      this.formData.subject && 
      this.formData.message
    );
  }

  private resetForm(): void {
    this.formData = {
      name: '',
      email: '',
      subject: '',
      message: ''
    };
  }

  goBack() {
    this.router.navigate(['/dashboard']);
  }
}