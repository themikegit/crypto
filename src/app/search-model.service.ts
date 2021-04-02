import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchModelService {
  modelValue: Subject<any>;
  isFilterResult: Subject<any>;

  constructor() {
    this.modelValue = new Subject<any>();
    this.isFilterResult = new Subject<any>();
  }
}
