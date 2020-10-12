import { Component, OnInit } from '@angular/core';
import { MasterServices } from 'src/app/services/masterservice';
import { Router } from '@angular/router';
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

// private _categoryList():void{
//   const promise = this._masterService.getCategories();
//     promise.then(
//       response => {
//         this.customerList = response['res'];
//         this.categoryData = this.customerList[0].data;
//       },
//       error => {
//         console.log('error' + error);
//       }
//     );
// }

public _categoryList() {
      this._masterService.getcategories()
          .subscribe(data => {
            console.log(data)
              if (data) {
               // this.customerList = response['res'];
                this.categoryData =data.data.content;
                
            console.log(this.categoryData)
              }
          });
  }


editdata(data, i) {
  localStorage.setItem('EditProductdata', JSON.stringify(data));
  localStorage.setItem('i', JSON.stringify(i));
  this._router.navigate(['/category']);
}
Delete(i) {
  this.categoryData.splice(i, 1);
  localStorage.setItem('ProductListData', JSON.stringify(this.categoryData));
}

backnav() {
  localStorage.removeItem('EditProductdata');
  this._router.navigate(['/category']);
}
}

