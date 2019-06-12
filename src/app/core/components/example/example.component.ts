import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.scss']
})
export class ExampleComponent implements OnInit {
  title = 'Angular Netlify Starter App';

  @Input() name: string;

  constructor() { }

  ngOnInit() {
  }

}
