import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TranslateModule,TranslateService  } from '@ngx-translate/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [MatIconModule,MatTooltipModule,TranslateModule ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {

  email: string = 'heribertotijerina333@gmail.com';
  phone: string = '528673391285';

  constructor(private translate: TranslateService) {}

  copyEmail(){
    navigator.clipboard.writeText(this.email).then(() => {
      // alert('Email copied to clipboard!')
    }).catch(err => {
    });

    this.translate.get('CONTACT.TITLE6').subscribe((msg: string) => {
      alert(msg);
    });

  }

  copyPhone(){
    navigator.clipboard.writeText(this.phone).then(() => {
      // alert('Phone copied to clipboard!')
    }).catch(err => {
    });
    this.translate.get('CONTACT.TITLE7').subscribe((msg: string) => {
      alert(msg);
    });
  }

}
