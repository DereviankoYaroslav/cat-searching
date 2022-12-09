import { Component, Input } from '@angular/core';
import { IBreeds } from 'src/app/models/breeds';

@Component({
  selector: 'app-select-filters',
  templateUrl: './select-filters.component.html',
  styleUrls: ['./select-filters.component.css'],
})
export class SelectFiltersComponent {
  @Input() breeds: IBreeds[];
}
