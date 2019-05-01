import { Component, OnInit } from '@angular/core';
import { AddJSService } from './addjs.service';
import { FeatureService } from './feature/feature.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: []
})
export class OverviewComponent implements OnInit {
  top_articles: any = [];
  bottom_articles: any = [];

  constructor(private addJSService: AddJSService, private featureService: FeatureService) {}

  ngOnInit() {
    this.loadScripts();
    this.featureService.getAllFeatures().subscribe((data: any) => {
      var in_top: number = 0;
      for (var key in data) {
        var article: any = data[key];
        article["name"] = key;
        if (in_top < 8) {
          this.top_articles.push(article);
        } else {
          this.bottom_articles.push(article);
        }
        in_top += 1;
      }
    });
  }

  private loadScripts() {
    this.addJSService.load('activate-poptrox').then(data => {
    }).catch(error => console.log(error));
  }
}
