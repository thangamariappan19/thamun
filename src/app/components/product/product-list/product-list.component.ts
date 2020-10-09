import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  color = 'green';
  ProductListData: any = [];

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.ProductListData = JSON.parse(localStorage.getItem('ProductListData'));
  }
editdata(data, i) {
  localStorage.setItem('EditProductdata', JSON.stringify(data));
  localStorage.setItem('i', JSON.stringify(i));
  this.router.navigate(['/product']);
}
Delete(i) {
  this.ProductListData.splice(i, 1);
  localStorage.setItem('ProductListData', JSON.stringify(this.ProductListData));
}
backnav() {
  localStorage.removeItem('EditProductdata');
  this.router.navigate(['/product']);
}

}
