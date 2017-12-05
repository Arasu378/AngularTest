import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import {HeroFormComponent} from './hero/Hero-Form.component';
import {
  HeroDetailComponent
} from './reactiveforms/hero-detail.component';
import {HeroListComponent} from './reactiveforms/hero-list.component';
import {HeroService} from './reactiveforms/hero.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    HeroFormComponent,
    HeroDetailComponent,
    HeroListComponent
  ],
  exports: [ // export for the DemoModule
    AppComponent,
    HeroDetailComponent,
    HeroListComponent
  ],
  providers: [ HeroService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
