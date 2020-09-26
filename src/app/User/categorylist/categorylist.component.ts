import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-categorylist',
  templateUrl: './categorylist.component.html',
  styleUrls: ['./categorylist.component.css']
})
export class CategorylistComponent implements OnInit {
  color = 'green';
  Userdata: any = [];

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.Userdata = JSON.parse(localStorage.getItem('Userdata'));
  }
editdata(data, i) {
  localStorage.setItem('Editdata', JSON.stringify(data));
  localStorage.setItem('i', JSON.stringify(i));
  this.router.navigate(['/category']);
}
Delete(i) {
  this.Userdata.splice(i, 1);
  localStorage.setItem('Userdata', JSON.stringify(this.Userdata));
}
backnav() {
  localStorage.removeItem('Editdata');
  this.router.navigate(['/category']);
}
}
