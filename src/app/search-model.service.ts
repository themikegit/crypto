import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SearchModelService {
  modelValue: Subject<any>;

  constructor(private http: HttpClient) {
    this.modelValue = new Subject<any>();
  }
}
