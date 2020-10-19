import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MasterServices } from 'src/app/services/masterservice';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  categoryData: any[] = [];
  ParentCategory: string;
  Depth: number;
  CategoryName: string;
  // Slug: string;
  Status: Boolean;
  categoryForm: FormGroup;
  submitted = false;
  CategoryData: any = [];
  CheckData: any = [];
  Editdata: any = [];
  buttontext = 'Save';
  i: any;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private _masterService: MasterServices,
  ) {
 
  }

  ngOnInit() {
    this.categoryForm = this.formBuilder.group({
      parentCategory: ['', Validators.required],
      depth: ['', Validators.required],
      categoryName: ['', Validators.required],
      status: false,
  });
  this._categoryList();
  this.categoryForm.reset();
    this.Editdata = JSON.parse(localStorage.getItem('EditCategorydata'));
    this.i = localStorage.getItem('i');
    this.CheckData = JSON.parse(localStorage.getItem('CategoryData'));
    if (this.Editdata != null) {
      this.buttontext = 'Update';
      this.Updatedata(this.Editdata);
    } else {
      this.buttontext = 'Save';
      this.categoryForm.reset();
    }
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
  get f() { return this.categoryForm.controls; }
  public saveCategory(): void {
    this.submitted = true;
    // stop here if form is invalid
    if (this.categoryForm.invalid) {
      return;
    } else {
      if (this.buttontext === 'Save') {
        const data = {
          categoryCode: this.CategoryName,
          depth: this.Depth,
          active: this.Status,
          parentId: this.ParentCategory,
          descriptions: [{
            categoryName: this.CategoryName,
            slug: this.CategoryName.replace(/\s/g, '').toLowerCase(),
            language: {
               languageId:'en'
              }
          }]
        };
        this._masterService.addCategories(data)
        .subscribe((data: any) => {
            if (data.status === 'OK') {
              this.router.navigate(['/categorylist']);
             // this.customerList = response['res'];
           //   this.categoryData =data.data.content;
            }
        });
        // this.CategoryData.push(data);
        // if (this.CheckData != null) {
        //   this.CheckData.push(data);
        //   localStorage.setItem('CategoryData', JSON.stringify(this.CheckData));
        //   this.router.navigate(['/categorylist']);
        // } else {
        //   localStorage.setItem('CategoryData', JSON.stringify(this.CategoryData));
        //   this.router.navigate(['/categorylist']);
        // }

      } else {
        const data = {
          categoryCode: this.CategoryName,
          depth: this.Depth,
          active: this.Status,
          parentId: this.ParentCategory,
          categoryId:this.Editdata.categoryId,
          descriptions: [{
            categoryName: this.CategoryName,
            slug: this.CategoryName.replace(/\s/g, '').toLowerCase(),
            language: {
               languageId: 'en'
              }
          },]
        };
        this._masterService.categoryUpdate(data)
        .subscribe((data: any) => {
            if (data.status === 'OK') {
              this.router.navigate(['/categorylist']);
            }
        });
      }

    }
  }

  Updatedata(Editdata) {
    this.ParentCategory = Editdata.categoryId;
   this.Depth = Editdata.depth;
    this.CategoryName = Editdata.descriptions[1].categoryName;
    this.Status = Editdata.active;
    this.i = this.i;
  }
  backnavlist() {
    this.router.navigate(['/categorylist']);
  }
  OnlyCharacter(event) {
    const charCode = (event.which) ? event.which : event.keyCode;
    if ((charCode < 65 || charCode > 90) && (charCode < 97 || charCode > 123) && charCode !== 32) {
            return false;
            return true;
      }
}
}
