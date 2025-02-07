import { Component } from '@angular/core';

type Release = { title: string; uri: string; img: string; incoming?: boolean };

@Component({
  standalone: true,
  selector: 'app-releases',
  templateUrl: './releases.component.html',
  styleUrls: ['./releases.component.scss'],
})
export class ReleasesComponent {
  releases: Release[] = [
    {
      title: 'فيرونيكا',
      uri: 'https://www.youtube.com/watch?v=Sa6o4eZB2Rk',
      img: 'veronica.webp',
    },
    {
      title: 'بتهون',
      uri: 'https://www.youtube.com/watch?v=v5LNQ9hFuUw',
      img: 'بتهون.png',
    },
    { title: 'سرمدي', uri: 'https://youtu.be/WqpJJ33_Fu4', img: 'سرمدي.png' },
    {
      title: 'نزيف العروبة',
      uri: 'https://youtu.be/Fp9iKXsBO8g?si=hkePOOriLzGNOG9i',
      img: 'نزيف العروبة.png',
    },
    {
      title: 'رونق',
      uri: 'https://youtu.be/22d48E7vekQ?si=55e9pUGLvFSIUoeF',
      img: 'رونق.png',
    },
    {
      title: 'تسع شهور',
      uri: 'https://youtu.be/Y72qQOgOQhY?si=xH79huhuk01568V6',
      img: 'تسع شهور.png',
    },
    {
      title: 'مهما شئتي',
      uri: 'https://youtu.be/_E_01FVdrC8?si=CjdPZTXNmdDmmaYY',
      img: 'مهما شئتي.png',
    },
    {
      title: 'ناصية',
      uri: 'https://youtu.be/YfK4_T6usOY?si=haY-tVYR09ck6_fC',
      img: 'ناصية.png',
    },
    {
      title: 'متيّم',
      uri: 'https://www.youtube.com/watch?v=t_h4OBZhgHg',
      img: 'متيم.png',
    },
    {
      title: 'Moon Fighters',
      uri: 'https://youtu.be/9VxrRMtbnyM?si=jemHx6aXLoOULaqK',
      img: 'Moon Fighters.png',
    },
    {
      title: 'بلا ميناء',
      uri: 'https://youtu.be/3s_Tyvb6x6c?si=5wA0t_nzJ02Nr5md',
      img: 'بلا ميناء.png',
    },
    {
      title: 'خطفتِ قلبي',
      uri: 'https://youtu.be/OzNqH_HSekU?si=6O5QzGrXvv4uYYhV',
      img: 'خطفتِ قلبي.png',
    },
  ];
}
