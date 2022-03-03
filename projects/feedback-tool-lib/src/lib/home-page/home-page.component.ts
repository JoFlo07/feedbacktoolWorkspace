import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'dev-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css'],
})
export class HomePageComponent implements OnInit {
  @Input()
  title!: string;
  @Input()
  content!: string;
  constructor() {}

  ngOnInit(): void {}
}
