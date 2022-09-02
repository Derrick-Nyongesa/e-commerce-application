import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-recommended',
  templateUrl: './recommended.component.html',
  styleUrls: ['./recommended.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RecommendedComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
