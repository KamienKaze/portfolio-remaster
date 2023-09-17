import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StaticSectionModule } from './static-section/static-section.module';
import { ScrollSectionModule } from './scroll-section/scroll-section.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, StaticSectionModule, ScrollSectionModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
