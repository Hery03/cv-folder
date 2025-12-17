import { Component } from '@angular/core';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent {
  bis: string[] = [];

  constructor(private translate: TranslateService) {
    // Cargar arreglo de traducciones
    this.translate.get('EXPERIENCE').subscribe((res: string[]) => {
      this.bis = res;
    });
  }


}
