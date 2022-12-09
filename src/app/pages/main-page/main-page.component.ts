import { Component, OnInit } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { IBreeds } from 'src/app/models/breeds';
import { CatService } from 'src/app/services/cat.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent {}
