import { Component, OnInit } from '@angular/core';
import { ServerHttpInterceptor } from './../core/http.interceptor';
import { AppServices } from '../core/services';

@Component({
  selector: 'app-main-page',
  providers:  [ AppServices ],
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor(private services: AppServices) { }

  ngOnInit() {
  }

}
