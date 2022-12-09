import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ICats } from '../models/cats';

@Injectable({
  providedIn: 'root',
})
export class CatService {
  key = 'live_9pTw0xIxd8GMQqCr2C67AG6UrOHO5HJ7RrSKb7RxQ18XrazOpJ4Sx6tDm4ohSwMI';
  headerDict = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    'x-api-key': this.key,
  };

  constructor(private http: HttpClient) {}

  fetchCats(limit: number = 0, breed: string): Observable<ICats[]> {
    const parameters = {
      limit: limit,
      breed_ids: breed,
    };
    return this.http.get<ICats[]>(
      'https://api.thecatapi.com/v1/images/search',
      {
        params: new HttpParams({
          fromObject: parameters,
        }),
        headers: new HttpHeaders(this.headerDict),
      }
    );
  }
}
