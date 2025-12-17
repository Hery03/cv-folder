import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideNavComponent } from './components/side-nav/side-nav.component';
import { TranslateModule,TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,SideNavComponent,TranslateModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private translate: TranslateService) {
    // Idioma por defecto
    this.translate.setDefaultLang('en');

    // Forzar carga del idioma inicial
    this.translate.use('en').subscribe({
      next: () => {
        console.log('Idioma cargado');
      }
    });
  }

}
