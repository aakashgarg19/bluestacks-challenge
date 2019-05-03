import { Component, OnInit } from '@angular/core';
import { Events } from 'src/app/models/events';
import { TabsDataService } from 'src/app/services/tabs-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public events: Events ;
  public selectedTab: string;
  constructor(
    private tabsService: TabsDataService
  ) { }

  ngOnInit() {
    this.getTabsData();
  }

  private getTabsData() {
    this.tabsService.getTabData().subscribe((data) => {
      this.events = data;
      console.log(this.events);
    });
  }

  private updateSelectedTab(tabName) {
    this.selectedTab = tabName;
  }

  getDiferenceInDays(theDate: string): string {
    const date = new Date(theDate).getTime();
    const currentDate = new Date().getTime();
    const diff =  Math.round(Math.abs(date - currentDate) / (1000 * 60 * 60 * 24));
    if (date < currentDate) {
      return `${diff} days ago`;
    } else {
      return `After ${diff} days`;
    }
 }

 public openCalendar(index) {
   const element = document.getElementById(`date-${index}`);
   if (element) {
     element.click();
   }
 }
}
