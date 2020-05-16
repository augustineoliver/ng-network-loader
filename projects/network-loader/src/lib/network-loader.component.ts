import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'ng-network-loader',
  templateUrl: './network-loader.component.html',
  styleUrls: ['./network-loader.component.css']
})
export class NetworkLoaderComponent implements OnInit {

  @Input() loaderType: number = null;
  @Input() loaderPosition: number = null;

  constructor() { }

  ngOnInit(): void {
  }

}
