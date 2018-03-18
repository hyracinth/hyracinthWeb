import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hyra-navbar',
  templateUrl: './hyra-navbar.component.html',
  styleUrls: ['./hyra-navbar.component.scss']
})
export class HyraNavbarComponent implements OnInit {

  isCollapsed: boolean;

  constructor(private router: Router) {
    this.isCollapsed = true;
  }

  ngOnInit() {
  }

}
