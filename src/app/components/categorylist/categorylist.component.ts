import { Component, OnInit , ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { MasterServices } from '../../services/masterservice';
@Component({
  selector: 'app-categorylist',
  templateUrl: './categorylist.component.html',
  styleUrls: ['./categorylist.component.css']
})
export class CategorylistComponent implements OnInit {
  categoryData: any[] = [];
  customerList: any[] = [];
  color = 'green';
  displayedColumns: string[] = [ 'categoryCode', 'categoryName', 'depth', 'slug', 'active','action'];
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator) paginator: MatPaginator;
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
              if (data) {
                this.dataSource = new MatTableDataSource();
                this.dataSource.data = data.data.content;
                this.dataSource.paginator = this.paginator;
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

