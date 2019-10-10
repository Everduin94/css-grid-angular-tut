import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  @Input() numOfItems = 5;

  items;

  constructor() { }

  ngOnInit() {
    this.items = [...Array(this.numOfItems).keys()]
  }

}
