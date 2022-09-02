import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import {
  TuiButtonModule,
  TuiCalendarModule,
  TuiHintModule,
  TuiHostedDropdownModule,
  TuiLoaderModule,
  TuiTooltipModule,
} from '@taiga-ui/core';
import {
  TuiBreadcrumbsModule,
  TuiCalendarRangeModule,
  TuiCarouselModule,
  TuiInputCountModule,
  TuiIslandModule,
  TuiLineClampModule,
  TuiPaginationModule,
  TuiTabsModule,
  TuiTagModule,
  TuiTextAreaModule,
} from '@taiga-ui/kit';
import {
  TuiColorPickerModule,
  TuiInputColorModule,
} from '@taiga-ui/addon-editor';
import { TuiInputModule, TuiSelectModule } from '@taiga-ui/kit';
import { TuiCardModule } from '@taiga-ui/addon-commerce';
import { TuiTableModule } from '@taiga-ui/addon-table';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RetailComponent } from './components/retail/retail.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { RecommendedComponent } from './components/recommended/recommended.component';
import { ProductsComponent } from './components/products/products.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    RetailComponent,
    CarouselComponent,
    RecommendedComponent,
    ProductsComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
        ReactiveFormsModule,
        TuiCalendarModule,
        TuiCalendarRangeModule,
        TuiColorPickerModule,
        TuiInputColorModule,
        TuiSelectModule,
        TuiInputModule,
        TuiButtonModule,
        TuiCarouselModule,
        TuiTagModule,
        TuiCardModule,
        TuiTooltipModule,
        TuiHintModule,
        TuiTabsModule,
        TuiInputCountModule,
        TuiLineClampModule,
        TuiButtonModule,
        TuiPaginationModule,
        TuiBreadcrumbsModule,
        TuiTableModule,
        TuiLoaderModule,
        TuiHostedDropdownModule,
        TuiInputModule,
        TuiIslandModule,
        TuiTextAreaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
