import { Component, OnInit } from '@angular/core';
import { StudioGhibliService, StudioGhibliResponse } from '../../services/studio-ghibli.service';

@Component({
  selector: 'app-studio-ghibli',
  templateUrl: './studio-ghibli.component.html',
  styleUrls: ['./studio-ghibli.component.css']
})
export class StudioGhibliComponent implements OnInit {

  filmList: StudioGhibliResponse[] = [];

  constructor(private _studioGhibliService: StudioGhibliService) { }

  getFilms() {
    this._studioGhibliService.getMovies().subscribe(data => {
      this.filmList = data;
    });
  }

  ngOnInit() {
  }

}
