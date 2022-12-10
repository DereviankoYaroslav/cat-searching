import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IBreeds } from '../models/breeds';

@Injectable({
  providedIn: 'root',
})
export class BreedService {
  constructor(private http: HttpClient) {}

  //getting breeds data
  fetchBreeds(): Observable<IBreeds[]> {
    return this.http.get<IBreeds[]>('https://api.thecatapi.com/v1/breeds', {});
  }
}
