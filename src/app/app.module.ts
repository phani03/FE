import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SliderComponent } from './shared/components/slider/slider.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { DataService } from './shared/services/data.service';
import { HttpClientModule } from '@angular/common/http';
import { TabComponent } from './shared/components/tab/tab.component';

@NgModule({
  declarations: [
    AppComponent,
    SliderComponent,
    HeaderComponent,
    FooterComponent,
    TabComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
