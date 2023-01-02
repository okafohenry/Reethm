import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_KEY  } from 'src/util';

@Injectable({
  providedIn: 'root'
})
export class AppService {
 private BASE_URL = 'https://api.napster.com/v2.2';

constructor( private http: HttpClient ) { }

date = new Date();
last_two = this.date.setMonth(this.date.getMonth() - 1);




  search(){
    alert(this.last_two);
  }

  getTrendingNewHits(){}

  getTopArtists(){
    return this.http.get<any>(`${this.BASE_URL}/artists/top?apiKey=${API_KEY}`)
  }

  getAllGenres(){
    return this.http.get<any>(`${this.BASE_URL}/genres?apiKey=${API_KEY}`);
  }

  getTopChartingSongs(){
    return this.http.get(`${this.BASE_URL}/playlists/top`)
  }

}
