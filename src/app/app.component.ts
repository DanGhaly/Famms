import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { BlogComponent } from './blog/blog.component';
import { NewArrivalsComponent } from './new-arrivals/new-arrivals.component';
import { ProductsComponent } from './products/products.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, BlogComponent, NewArrivalsComponent, ProductsComponent, SubscribeComponent , TestimonialsComponent ,ContactComponent , FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Famms';
}
