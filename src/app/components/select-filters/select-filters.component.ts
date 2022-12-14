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

  //getting the change of breed value and sending to parent component as an output
  onChangeBr = (value: Event) => {
    let x = (value.target as HTMLInputElement).value;
    this.breed = x;
    this.onBreedChange.emit(this.breed);
  };

  //getting the change of amount value and sending to parent component as an output
  setAmount = (event: Event) => {
    let x = (event.target as HTMLInputElement).value;
    this.amount = x ? parseFloat(x) : 0;
    this.onAmountChange.emit(this.amount);
  };
}
