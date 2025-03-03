import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  heroData = {
    title: 'A Clear Path for Potential',
    description: 'A strong academic foundation for independent thinking and character development.',
    buttonText: 'LEARN MORE'
  };

  featuresData = [
    { title: 'MIND', description: 'Developing intellectual curiosity and critical thinking.' },
    { title: 'BODY', description: 'Promoting physical health and wellness.' },
    { title: 'SPIRIT', description: 'Nurturing emotional and spiritual growth.' },
    { title: 'CHARACTER', description: 'Building integrity and ethical leadership.' }
  ];

  onLearnMore() {
    alert('You clicked Learn More!');
  }

}
