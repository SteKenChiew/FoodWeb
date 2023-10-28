import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CdkVirtualScrollViewport, ScrollDispatcher } from '@angular/cdk/scrolling';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import {  FilterCategoryPipe } from './filter-category.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FilterCategoryPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CdkVirtualScrollViewport,
    ScrollingModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
