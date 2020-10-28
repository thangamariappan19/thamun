import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MatTableDataSource } from "@angular/material";
import { MasterServices } from "../../services/masterservice";
import { PageEvent } from "@angular/material";
@Component({
  selector: "app-categorylist",
  templateUrl: "./categorylist.component.html",
  styleUrls: ["./categorylist.component.css"]
})
export class CategorylistComponent implements OnInit {
  public totalHits: number;
  public page: number = 0;
  public pageSize: number = 10;
  public searchTerm: string;
  categoryData: any[] = [];
  customerList: any[] = [];
  displayedColumns: string[] = [
    "categoryCode",
    "categoryName",
    "depth",
    "slug",
    "active",
    "action"
  ];
  dataSource = new MatTableDataSource();
  constructor(
    private _masterService: MasterServices,
    private _router: Router
  ) {}

  public ngOnInit(): void {
    this._categoryList();
  }

  private _categoryList() {
    this._masterService
      .getcategories({ page: this.page, hitsPerPage: this.pageSize })
      .subscribe(data => {
        if (data) {
          this.dataSource = new MatTableDataSource();
          this.totalHits = data.data.totalElements;
          this.dataSource.data = data.data.content;
        }
      });
  }

  public changePage(event: PageEvent) {
    this.page = event.pageIndex;
    this._categoryList();
  }

  editdata(data, i) {
    localStorage.setItem("EditCategorydata", JSON.stringify(data));
    localStorage.setItem("i", JSON.stringify(i));
    this._router.navigate(["/category"]);
  }
  Delete(id) {
    this._masterService.categoryDelete(id).subscribe(data => {
      console.log(data);
      if (data) {
        this.categoryData = data.data.content;
        console.log(this.categoryData);
      }
    });
  }

  backnav() {
    localStorage.removeItem("EditProductdata");
    this._router.navigate(["/category"]);
  }
}
