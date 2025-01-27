import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

type Link = {
  label: string;
  uri: string;
  id?: string;
};

@Component({
  standalone: true,
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  imports: [RouterLink],
})
export class NavbarComponent {
  links: Link[] = [
    { label: 'About Me', uri: '/', id: 'about-me' },
    { label: 'Last Music', uri: '/', id: 'last-music' },
    { label: 'Social Media', uri: '/', id: 'social-media' },
    { label: 'Releases', uri: 'releases' },
  ];

  scrollTo(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
