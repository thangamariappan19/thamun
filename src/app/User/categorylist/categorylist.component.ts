import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-categorylist',
  templateUrl: './categorylist.component.html',
  styleUrls: ['./categorylist.component.css']
})
export class CategorylistComponent implements OnInit {
  color = 'green';
  CategoryData: any = [];

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.CategoryData = JSON.parse(localStorage.getItem('CategoryData'));
  }
  
EditCategoryData(data, i) {
  localStorage.setItem('EditCategoryData', JSON.stringify(data));
  localStorage.setItem('i', JSON.stringify(i));
  this.router.navigate(['/category']);
}
Delete(i) {
  this.CategoryData.splice(i, 1);
  localStorage.setItem('CategoryData', JSON.stringify(this.CategoryData));
}
backnav() {
  localStorage.removeItem('EditCategoryData');
  this.router.navigate(['/category']);
}
}
