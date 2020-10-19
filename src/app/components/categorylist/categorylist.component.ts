import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MasterServices } from '../../services/masterservice';
@Component({
  selector: 'app-categorylist',
  templateUrl: './categorylist.component.html',
  styleUrls: ['./categorylist.component.css']
})
export class CategorylistComponent implements OnInit {
  categoryData: any[] = [];
  customerList: any[] = [];
  constructor(
    private _masterService: MasterServices,
    private _router: Router
  ) { }

  public ngOnInit(): void {
    this._categoryList();
}

private _categoryList() {
      this._masterService.getcategories()
          .subscribe(data => {
            console.log(data)
              if (data) {
                this.categoryData = data.data.content;
            console.log(this.categoryData)
              }
          });
  }


editdata(data, i) {
  localStorage.setItem('EditCategorydata', JSON.stringify(data));
  localStorage.setItem('i', JSON.stringify(i));
  this._router.navigate(['/category']);
}
Delete(id) {
  this._masterService.categoryDelete(id)
  .subscribe(data => {
    console.log(data)
      if (data) {
        this.categoryData = data.data.content;
    console.log(this.categoryData)
      }
  });
}

backnav() {
  localStorage.removeItem('EditProductdata');
  this._router.navigate(['/category']);
}
}

