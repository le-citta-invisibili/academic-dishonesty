import { Component, OnInit } from '@angular/core';
import { PoptroxService } from './poptrox.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: []
})
export class OverviewComponent implements OnInit {
  constructor(private poptroxService: PoptroxService) {}

  ngOnInit() {
    // Just call your load scripts function with scripts you want to load
    this.loadScripts();
  }

  private loadScripts() {
    // You can load multiple scripts by just providing the key as argument into load method of the service
    this.poptroxService.load('activate-poptrox').then(data => {
      // Script Loaded Successfully
    }).catch(error => console.log(error));
  }
}
