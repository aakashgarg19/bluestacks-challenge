import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css']
})
export class MainHeaderComponent implements OnInit {

  public selectedLanguage = 'en';
  constructor(
    private translate: TranslateService
  ) { }

  ngOnInit() {
    this.initializeTranslation();
  }

  private initializeTranslation() {
    this.translate.addLangs(['en', 'fr']);
    this.translate.setDefaultLang('en');
    const browserLang = this.translate.getBrowserLang();
    this.translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
    this.selectedLanguage = browserLang.match(/en|fr/) ? browserLang : 'en';
  }

  public changeLanguage() {
    this.translate.use(this.selectedLanguage);
  }
}
