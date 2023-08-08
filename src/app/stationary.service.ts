import { Injectable } from '@angular/core';
import { Product, productz } from './product';

@Injectable({
  providedIn: 'root'
})
export class StationaryService {

  constructor() { }
  getProducts(): Product[] {
    return productz;
  }

}
