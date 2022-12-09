import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IBreeds } from 'src/app/models/breeds';

@Component({
  selector: 'app-select-filters',
  templateUrl: './select-filters.component.html',
  styleUrls: ['./select-filters.component.css'],
})
export class SelectFiltersComponent {
  @Input() breeds: IBreeds[];
  @Input() amount: number;
  @Input() breed: string;
  @Output() onAmountChange = new EventEmitter<number>();
  @Output() onBreedChange = new EventEmitter<string>();

  onChangeF = (value: Event) => {
    let x = (value.target as HTMLInputElement).value;
    this.breed = x;
    this.onBreedChange.emit(this.breed);
  };

  setAmount = (event: Event) => {
    let x = (event.target as HTMLInputElement).value;
    this.amount = x ? parseFloat(x) : 0;
    this.onAmountChange.emit(this.amount);
  };
}
