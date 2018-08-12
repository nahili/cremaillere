import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {AppMaterialModule} from './app-material.module';

import { TitleComponent } from './title/title.component';
import { DescriptionComponent } from './description/description.component';
import { FooterComponent } from './footer/footer.component';
import { WhishlistComponent } from './whishlist/whishlist.component';

@NgModule({
  declarations: [
    AppComponent,
    TitleComponent,
    DescriptionComponent,
    FooterComponent,
    WhishlistComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppMaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
