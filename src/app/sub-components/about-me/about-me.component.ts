import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { SocialMediaComponent } from '../social-media/social-media.component';

type Music = { title: string; uri: string };

@Component({
  standalone: true,
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
  imports: [SocialMediaComponent],
})
export class AboutMeComponent {
  lastMusic: Music = {
    title: 'Hamza Baghdadi - فيرونيكا (Official Audio)',
    uri: 'https://www.youtube.com/watch?v=Sa6o4eZB2Rk',
  };

  constructor(private sanitizer: DomSanitizer) {}

  sanitizeUrl() {
    const [_, videoId] = this.lastMusic.uri.split('=');
    const uri = `https://www.youtube.com/embed/${videoId}`;
    return this.sanitizer.bypassSecurityTrustResourceUrl(uri);
  }
}
