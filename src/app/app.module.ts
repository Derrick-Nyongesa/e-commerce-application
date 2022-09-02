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
import { TuiSvgModule } from '@taiga-ui/core';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RetailComponent } from './components/retail/retail.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { RecommendedComponent } from './components/recommended/recommended.component';
import { ProductsComponent } from './components/products/products.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProductComponent } from './components/product/product.component';
import { LoginComponent } from './components/authentication/login/login.component';
import { RegisterComponent } from './components/authentication/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    RetailComponent,
    CarouselComponent,
    RecommendedComponent,
    ProductsComponent,
    NotFoundComponent,
    ProductComponent,
    LoginComponent,
    RegisterComponent,
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
    TuiTextAreaModule,
    TuiSvgModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
