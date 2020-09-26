import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  // CategoryCode: string;
  Depth: string;
  CategoryName: string;
  // Slug: string;
  Status: Boolean;
  playerForm: FormGroup;
  submitted = false;
  Userdata: any = [];
  CheckData: any = [];
  Editdata: any = [];
  buttontext = 'Save';
  i: any;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
  ) {

  }

  ngOnInit() {
    this.playerForm = this.formBuilder.group({
      // categoryCode: ['', Validators.required],
      depth: [''],
      categoryName: [''],
      // slug: [''],
      status: false,
  });
  this.playerForm.reset();
    this.Editdata = JSON.parse(localStorage.getItem('Editdata'));
    this.i = localStorage.getItem('i');
    this.CheckData = JSON.parse(localStorage.getItem('Userdata'));
    if (this.Editdata != null) {
      this.buttontext = 'Update';
      this.Updatedata(this.Editdata);
    } else {
      this.buttontext = 'Save';
      this.playerForm.reset();
    }
  }
  get f() { return this.playerForm.controls; }
  saverecord() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.playerForm.invalid) {
      return;
    } else {
      if (this.buttontext === 'Save') {
        const data = {
          // CategoryCode: this.CategoryCode,
          Depth: this.Depth,
          CategoryName: this.CategoryName,
          // Slug: this.Slug,
          Status: this.Status
        };
        this.Userdata.push(data);
        if (this.CheckData != null) {
          this.CheckData.push(data);
          localStorage.setItem('Userdata', JSON.stringify(this.CheckData));
          this.router.navigate(['/categorylist']);
        } else {
          localStorage.setItem('Userdata', JSON.stringify(this.Userdata));
          this.router.navigate(['/categorylist']);
        }

      } else {
        const data = {
          // CategoryCode: this.CategoryCode,
          Depth: this.Depth,
          CategoryName: this.CategoryName,
          // Slug: this.Slug,
          Status: this.Status
        };
        debugger;
        if (this.CheckData != null) {
          this.CheckData.splice(this.i, 1);
          this.CheckData.push(data);
          localStorage.setItem('Userdata', JSON.stringify(this.CheckData));
          this.router.navigate(['/categorylist']);
        } else {
          localStorage.setItem('Userdata', JSON.stringify(this.Userdata));
          this.router.navigate(['/categorylist']);
        }
      }

    }
  }

  Updatedata(Editdata) {
    // this.CategoryCode = Editdata.CategoryCode;
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
