import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { APP_ROUTES_LIST } from 'src/app/core/contants/routes';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public navbarOpened = false;
  public readonly appRouteList = APP_ROUTES_LIST;

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

}
