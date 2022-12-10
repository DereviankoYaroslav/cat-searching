import { Component } from '@angular/core';
import { first, Observable, tap } from 'rxjs';
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
  defaultAmount: number = 10;
  cats: Observable<ICats[]>;
  loading = false;

  constructor(
    private breedService: BreedService,
    private catService: CatService
  ) {}

  ngOnInit(): void {
    this.loading = true;
    this.breeds = this.breedService.fetchBreeds();
    this.cats = this.catService
      .fetchCats(this.defaultAmount, this.breed)
      .pipe(tap(() => (this.loading = false)));
  }

  onAmountChange = (amount: number) => {
    this.loading = true;
    this.defaultAmount = amount;
    this.cats = this.catService
      .fetchCats(amount, this.breed)
      .pipe(tap(() => (this.loading = false)));
  };

  onBreedChange = (breed: string) => {
    this.loading = true;
    this.breed = breed;
    this.cats = this.catService
      .fetchCats(this.defaultAmount, breed)
      .pipe(tap(() => (this.loading = false)));
  };
}
