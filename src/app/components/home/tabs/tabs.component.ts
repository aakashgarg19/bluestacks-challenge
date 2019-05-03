import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent implements OnInit {

  @Output() public selectedTabChanged = new EventEmitter<string>();
  private selectedTab = 'U';
  constructor() { }

  ngOnInit() {
    this.selectedTabChanged.emit(this.selectedTab);
  }

  public updateSelectedTab(selectedTab) {
    this.selectedTab = selectedTab;
    this.selectedTabChanged.emit(this.selectedTab);
  }
}
