import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { Router } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-side-nav',
  standalone: true,
  imports: [MatSidenavModule,
          MatToolbarModule,
          MatIconModule,
          MatListModule,TranslateModule],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.css'
})
export class SideNavComponent {

  language:string = "EN"

  constructor(private router: Router,private translate: TranslateService) {
    this.language = this.translate.currentLang.toUpperCase();
  }

  goToHome() {
    this.router.navigate(['/']);
  }

  goToExperience() {
    this.router.navigate(['/experience']);
  }

  goToSkills() {
    this.router.navigate(['/skills']);
  }

  goToContact() {
    this.router.navigate(['/contact']);
  }

  changeLanguage() {
    const lang = this.translate.currentLang === 'es' ? 'en' : 'es';
    this.translate.use(lang);
    this.language = lang.toUpperCase();
  }


}
