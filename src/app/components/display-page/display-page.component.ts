import { Component } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { IBreeds } from 'src/app/models/breeds';
import { CatService } from 'src/app/services/cat.service';

@Component({
  selector: 'app-display-page',
  templateUrl: './display-page.component.html',
  styleUrls: ['./display-page.component.css'],
})
export class DisplayPageComponent {
  breeds: Observable<IBreeds[]>;

  constructor(private catService: CatService) {}

  ngOnInit(): void {
    this.breeds = this.catService
      .fetchBreeds()
      .pipe(tap(() => console.log(this.breeds)));
  }
}
