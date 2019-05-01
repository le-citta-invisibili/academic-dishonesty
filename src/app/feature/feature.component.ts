import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AddJSService } from '../addjs.service';
import { FeatureService } from './feature.service';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: []
})
export class FeatureComponent implements OnInit {
  name: string;
  image: string;
  text: string;
  link: string;

  constructor(private route: ActivatedRoute, private addJSService: AddJSService, private featureService: FeatureService) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
       this.name = params['name'];
    });

    this.featureService.getAllFeatures().subscribe((data: any) => {
      console.log(data);
      console.log(data[this.name]);
      this.image = data[this.name].image;
      this.text = data[this.name].text;
      this.link = data[this.name].link;
    });

    this.loadScripts();
  }

  private loadScripts() {
    this.addJSService.load('activate-poptrox').then(data => {
    }).catch(error => console.log(error));
  }
}
