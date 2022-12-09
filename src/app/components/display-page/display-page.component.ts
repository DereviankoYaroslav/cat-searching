import { Component } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { IBreeds } from 'src/app/models/breeds';
import { ICats } from 'src/app/models/cats';
import { BreedService } from 'src/app/services/breed.service';
import { CatService } from 'src/app/services/cats.service';

@Component({
  selector: 'app-display-page',
  templateUrl: './display-page.component.html',
  styleUrls: ['./display-page.component.css'],
})
export class DisplayPageComponent {
  breeds: Observable<IBreeds[]>;
  breed: string = 'abys';
  defaultAmount: number = 1;
  cats: Observable<ICats[]>;

  constructor(
    private breedService: BreedService,
    private catService: CatService
  ) {}

  ngOnInit(): void {
    this.breeds = this.breedService
      .fetchBreeds()
      .pipe(tap(() => console.log(this.breeds)));
    this.cats = this.catService
      .fetchCats(this.defaultAmount, this.breed)
      .pipe(tap(() => console.log(this.cats)));
  }

  onAmountChange = (amount: number) => {
    this.defaultAmount = amount;
    this.cats = this.catService
      .fetchCats(amount, this.breed)
      .pipe(tap(() => console.log(this.cats)));
  };

  onBreedChange = (breed: string) => {
    this.breed = breed;
    this.cats = this.catService
      .fetchCats(this.defaultAmount, breed)
      .pipe(tap(() => console.log(this.cats)));
  };
}
