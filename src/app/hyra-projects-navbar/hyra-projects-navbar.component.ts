import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hyra-projects-navbar',
  templateUrl: './hyra-projects-navbar.component.html',
  styleUrls: ['./hyra-projects-navbar.component.scss']
})
export class HyraProjectsNavbarComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit() {
  }

}
