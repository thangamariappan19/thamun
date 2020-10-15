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
  public  category = [
    {
      id:'1',
      categoryName:'Mobile Phones'
    },
    {
      id:'2',
      categoryName:'Electronics'
    },
    {
      id:'3',
      categoryName:'Grooming'
    }
  ] 
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
  this.categoryForm.reset();
    this.Editdata = JSON.parse(localStorage.getItem('Editdata'));
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
        .subscribe((data:any) => {
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
          ParentCategory: this.ParentCategory,
          Depth: this.Depth,
          CategoryName: this.CategoryName,
           Slug: this.CategoryName.trim(),
          Status: this.Status
        };
        if (this.CheckData != null) {
          this.CheckData.splice(this.i, 1);
          this.CheckData.push(data);
          localStorage.setItem('CategoryData', JSON.stringify(this.CheckData));
          this.router.navigate(['/categorylist']);
        } else {
          localStorage.setItem('CategoryData', JSON.stringify(this.CategoryData));
          this.router.navigate(['/categorylist']);
        }
      }

    }
  }

  Updatedata(Editdata) {
    this.ParentCategory = Editdata.ParentCategory;
   this.Depth = Editdata.Depth;
    this.CategoryName = Editdata.CategoryName;
    //  this.Slug = Editdata.Slug;
    this.Status = Editdata.Status;
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
