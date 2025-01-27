import { ApplicationRef, Component } from '@angular/core';
import { NavigationStart, Router, RouterOutlet } from '@angular/router';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { switchMap, tap } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgxSpinnerModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'hamzabaghdadi-web';

  constructor(
    private spinner: NgxSpinnerService,
    private router: Router,
    private applicationRef: ApplicationRef
  ) {}

  ngOnInit() {
    this.router.events
      .pipe(
        tap((event) => {
          event instanceof NavigationStart ? this.spinner.show() : null;
        }),
        switchMap(() =>
          this.applicationRef.isStable.pipe(
            tap((isStable) => {
              const isLoading = this.spinner.spinnerObservable.value?.show;
              isStable && isLoading ? this.spinner.hide() : null;
            })
          )
        )
      )
      .subscribe();
  }
}
