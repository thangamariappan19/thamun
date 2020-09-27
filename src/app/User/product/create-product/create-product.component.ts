import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {
  ProductID:string;
  ProductName: string;
  Description: string;
  ShortDescription: string;
  Category: string;
  Price:string;
     Discount: string;
  Unit:string;
   Status: string;
   playerForm: FormGroup;
  submitted = false;
  ProductListData: any = [];
  productData: any = [];
  Editdata: any = [];
  buttontext = 'Save';
  category;any;
  i: any;
  
 
  public  unit = [
    {
      id:'1',
      unitName:'piece'
    },
    {
      id:'2',
      unitName:'kilogram'
    },
    {
      id:'3',
      unitName:'Gram'
    },
    {
      id:'4',
      unitName:'meter'
    }
  ] 
  public  status = [
    {
      id:'1',
      status:'published'
    },
    {
      id:'2',
      status:'notpublished'
    },
    {
      id:'3',
      status:'banned'
    }
  ] 
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
  ) {
 
  }

  ngOnInit() {
    this.category=JSON.parse(localStorage.getItem('Userdata'));
    console.log(this.category)
    this.playerForm = this.formBuilder.group({
      productID: ['',],
      productName: ['', Validators.required],
      description: ['', Validators.required],
      shortDescription: ['', Validators.required],
      category: ['', Validators.required],
      price: ['', Validators.required],
      discount: ['', Validators.required],
      unit: ['', Validators.required],
      status: ['', Validators.required],
  });
  this.playerForm.reset();
    this.Editdata = JSON.parse(localStorage.getItem('EditProductdata'));
    this.i = localStorage.getItem('i');
    this.productData = JSON.parse(localStorage.getItem('ProductListData'));
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
          ProductID: this.ProductID,
          ProductName: this.ProductName,
          Description: this.Description,
          ShortDescription: this.ShortDescription,
          Category: this.Category,
          Price: this.Price,
          Discount: this.Discount,
          Unit: this.Unit,
          Status: this.Status
        };
        this.ProductListData.push(data);
        if (this.productData != null) {
          this.productData.push(data);
          localStorage.setItem('ProductListData', JSON.stringify(this.productData));
          this.router.navigate(['/product-list']);
        } else {
          localStorage.setItem('ProductListData', JSON.stringify(this.ProductListData));
          this.router.navigate(['/product-list']);
        }

      } else {
        const data = {
          ProductID: this.ProductID,
          ProductName: this.ProductName,
          Description: this.Description,
          ShortDescription: this.ShortDescription,
          Category: this.Category,
          Price: this.Price,
          Discount: this.Discount,
          Unit: this.Unit,
          Status: this.Status
        };
        if (this.productData != null) {
          this.productData.splice(this.i, 1);
          this.productData.push(data);
          localStorage.setItem('ProductListData', JSON.stringify(this.productData));
          this.router.navigate(['/product-list']);
        } else {
          localStorage.setItem('ProductListData', JSON.stringify(this.ProductListData));
          this.router.navigate(['/product-list']);
        }
      }

    }
  }

  Updatedata(Editdata) {
         this.ProductID=Editdata.ProductID,
         this. ProductName=Editdata.ProductName,
         this.Description=Editdata.Description,
         this. ShortDescription=Editdata.ShortDescription,
         this.Category=Editdata.Category,
         this.Price=Editdata.Price,
         this. Discount=Editdata.Discount,
         this. Unit=Editdata.Unit,
         this. Status=Editdata.Status
    this.i = this.i;
  }
  backnavlist() {
    this.router.navigate(['/product-list']);
  }
  OnlyCharacter(event) {
    const charCode = (event.which) ? event.which : event.keyCode;
    if ((charCode < 65 || charCode > 90) && (charCode < 97 || charCode > 123) && charCode !== 32) {
            return false;
            return true;
      }
}
}
