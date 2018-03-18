import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable'

import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

import { environment } from '../../environments/environment';

const urls = {
  getFilms: 'films'
}

export class StudioGhibliResponse {
  id: string;
  title: string;
  description: string;
  director: string;
  producer: string;
  release_date: string;
  rt_score: string;
  people: string[];
  species: string[];
  locations: string[];
  vehicles: string[];
  url: string;
}

@Injectable()
export class StudioGhibliService {

  constructor(private http:HttpClient) { }

  getMovies(): Observable<StudioGhibliResponse[]> {
    return this.http.get<StudioGhibliResponse[]>(environment.StudioGhibliUrl + urls.getFilms)
    //.do(data => console.log('All : ' + JSON.stringify(data)));
    //TODO HANDLE ERROR
    //.catch(this.handleError);
  }
}
