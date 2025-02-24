import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements AfterViewInit {

  ngAfterViewInit() {
    this.addScrollEffect();
  }

  addScrollEffect() {
    const featureCards = document.querySelectorAll('.feature-card');

    window.addEventListener('scroll', () => {
      featureCards.forEach(card => {
        const cardPos = card.getBoundingClientRect().top;
        const scrollPos = window.innerHeight;

        if (cardPos < scrollPos) {
          card.classList.add('fade-in');
        }
      });
    });
  }
}