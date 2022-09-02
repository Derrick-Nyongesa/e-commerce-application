import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css'],
})
export class CarouselComponent implements OnInit {
  filters = {
    page: 1,
    page_size: 10,
    sort_by: 'created_at',
    is_active: true,
  };

  // $shoppingDeals: Observable<ShoppingDeal[]>;
  carouselaction: boolean = false;
  sizeCount: number;
  index: number = 0;

  constructor() {}

  ngOnInit(): void {}
}
