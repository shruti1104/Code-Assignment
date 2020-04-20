import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CodeServiceService {

  private apiUrl = "http://starlord.hackerearth.com/gamesarena";

  constructor(private httpclient: HttpClient) { }

  public getGamesData(){
    return this.httpclient.get<any>('http://starlord.hackerearth.com/gamesarena');

}
}
