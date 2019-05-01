import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OverviewComponent } from './overview.component';
import { FeatureComponent  } from './feature/feature.component';
import { AddJSService } from './addjs.service';
import { FeatureService } from './feature/feature.service';

@NgModule({
  declarations: [
    AppComponent,
    OverviewComponent,
    FeatureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [AddJSService, FeatureService],
  bootstrap: [AppComponent]
})
export class AppModule { }
