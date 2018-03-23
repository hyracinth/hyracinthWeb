import { Component, OnInit } from '@angular/core';
import { StudioGhibliService, StudioGhibliResponse } from '../../services/studio-ghibli.service';

@Component({
  selector: 'app-studio-ghibli',
  templateUrl: './studio-ghibli.component.html',
  styleUrls: ['./studio-ghibli.component.scss']
})
export class StudioGhibliComponent implements OnInit {

  filmList: StudioGhibliResponse[] = [];
  selectedFilm: StudioGhibliResponse;

  constructor(private _studioGhibliService: StudioGhibliService) { }

  getFilms() {
    this._studioGhibliService.getMovies().subscribe(data => {
      this.filmList = data;
    });
  }

  selectFilm(currFilm: StudioGhibliResponse) {
    this.selectedFilm = currFilm;
  }

  ngOnInit() {
  }

  toggleDisplayDesc(currFilm: StudioGhibliResponse) {
    if (!currFilm.displayDesc) {
      currFilm.displayDesc = true;
    } else {
      currFilm.displayDesc = false;
    }
  }

}
