import { Component, OnInit } from '@angular/core';
import { StationaryService } from '../stationary.service';
import { productz } from '../product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  productsarray = productz;
  constructor(productlist: StationaryService) {}
  ngOnInit() {
  }

}
