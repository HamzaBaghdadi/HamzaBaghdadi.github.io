import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from '../sub-components/footer/footer.component';
import { HeaderComponent } from '../sub-components/header/header.component';
import { NavbarComponent } from '../sub-components/navbar/navbar.component';

@Component({
  standalone: true,
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  imports: [RouterOutlet, HeaderComponent, NavbarComponent, FooterComponent],
})
export class MainComponent {}
