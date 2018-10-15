import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the MovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MovieProvider {

  private baseApiPath = "https://api.themoviedb.org/3";

  constructor(public http: HttpClient) {
    console.log('Hello MovieProvider Provider');
  }

  getLastMovies(page = 1){
    return this.http.get(this.baseApiPath + `/movie/popular?page=${page}&api_key=e45f2a0fe1ab061649793f966a701b08`);
  }

  getMoviesDetails(filmeId){
    return this.http.get(this.baseApiPath + `/movie/${filmeId}?api_key=e45f2a0fe1ab061649793f966a701b08`);
  }
 
}
