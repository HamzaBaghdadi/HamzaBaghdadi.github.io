import { Component } from '@angular/core';

type link = {
  label: string;
  uri: string;
};

@Component({
  standalone: true,
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.scss'],
})
export class SocialMediaComponent {
  links: link[] = [
    { label: 'Instagram', uri: 'https://www.instagram.com/hamzabaghdad1' },
    { label: 'YouTube', uri: 'https://www.youtube.com/@HamzaBaghdadi' },
    { label: 'Facebook', uri: 'https://facebook.com/hamzabaghdadi11' },
    {
      label: 'Spotify',
      uri: 'https://open.spotify.com/artist/038iWRAtJlzcnIcoslKhCE',
    },
  ];
}
