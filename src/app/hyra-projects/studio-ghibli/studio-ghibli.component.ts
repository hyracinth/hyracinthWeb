import { Component, OnInit } from '@angular/core';
import { StudioGhibliService, StudioGhibliResponse } from '../../services/studio-ghibli.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-studio-ghibli',
  templateUrl: './studio-ghibli.component.html',
  styleUrls: ['./studio-ghibli.component.scss']
})
export class StudioGhibliComponent implements OnInit {

  displayedColumns = ['title', 'director', 'releaseYear', 'description'];
  filmList: StudioGhibliResponse[] = [];
  selectedFilm: StudioGhibliResponse;
  dataSource: any;

  constructor(private _studioGhibliService: StudioGhibliService,
    public snackBar: MatSnackBar) { }

  getFilms() {
    this._studioGhibliService.getMovies().subscribe(data => {
      this.filmList = data;
      this.dataSource = new MatTableDataSource(data);
    });
  }

  ngOnInit() {
  }

  showDesc(desc: string) {
    this.snackBar.open(desc, 'x');
  }

}
