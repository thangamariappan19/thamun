import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import { Ng2ImgMaxService } from 'ng2-img-max';
import * as _ from "lodash";
import { MasterServices } from '../../../services/masterservice';
declare var jquery: any;
declare var $: any;

var google: any;
@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.scss']
})
export class CreateProductComponent implements OnInit {
  buttontext = 'Save';
  myFiles: string [] = [];
  urls = [];
  imagePreview:any;
  Imageupload: any
  ProductID:string;
  ProductName: string;
  Description: string;
  ShortDescription: string;
  Category: any[];
  ImageFile:any;
  ProductImage:any;
  Price:string;
     Discount: string;
  Unit:string;
   Status: string;
   productForm: FormGroup;
  submitted = false;
  ProductListData: any = [];
  productData: any = [];
  Editdata: any = [];
  category:any;
  Imagefile:any;
  Color:any;
  i: any;
  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};
  dropdownColor = {};
  requiredField: boolean = false;
  selectedHobbiesNames:any[];

  myhobbies: any = [
    {
      name: "XXL",
      value: "XXL"
    },
    {
      name: "XL",
      value: "XL",
    },
    {
      name: "L",
      value: "L",
    },
    {
      name: "M",
      value: "M",
    },
    {
      name: "S",
      value: "S"
    },
  ];

  public list = [
    {
      id: 1,
      title: '',
    },
    {
      id: 2,
      title: 'M',
    },
    {
      id: 3,
      title: 'L',

    },
    {
      id: 4,
      title: 'XL',
    },
  ]
  public ColorData = [
    {
      id: 1,
      title: 'red',
    },
    {
      id: 2,
      title: 'green',
    },
    {
      id: 3,
      title: 'yeelow',

    },
    {
      id: 4,
      title: 'orange',
    },
  ]
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
  public UserImage:any;
  public item:any;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private sanitizer: DomSanitizer,
    private ng2ImgMax: Ng2ImgMaxService,
    private _masterService:MasterServices,
  ) {
 
  }

  ngOnInit() {
    this.ProductImage = '/assets/images/dummy.png'
    this.dropdownSettings = {
      singleSelection: false,
      idField: 'id',
      textField: 'CategoryName',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
    this.dropdownColor = {
      singleSelection: false,
      idField: 'id',
      textField: 'title',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
    this.setStatus();
    this.category = JSON.parse(localStorage.getItem('CategoryData'));
    console.log(this.category)
    this.productForm = this.formBuilder.group({
      productID: ['',],
      productName: ['', Validators.required],
      description: [''],
      shortDescription: ['',],
      category: [''],
      price: ['',],
      discount: ['',],
      unit: ['',],
      status: ['',],
      color:[''],
      hobbies: this.createHobbies(this.myhobbies)
  });
  this.productForm.reset();
    this.Editdata = JSON.parse(localStorage.getItem('EditProductdata'));
    this.i = localStorage.getItem('i');
    this.productData = JSON.parse(localStorage.getItem('ProductListData'));
    if (this.Editdata != null) {
      this.buttontext = 'Update';
      this.Updatedata(this.Editdata);
    } else {
      this.buttontext = 'Save';
      this.productForm.reset();
    }
  }
  createHobbies(hobbiesInputs) {
    const arr = hobbiesInputs.map(hobby => {
      return new FormControl(hobby.selected || false);
    });
    return new FormArray(arr);
  }
  getSelectedHobbies() {
    this.selectedHobbiesNames = _.map(
      this.productForm.controls.hobbies["controls"],
      (hobby, i) => {
        return hobby.value && this.myhobbies[i].value;
      }
    );
    this.getSelectedHobbiesName();
  }

  getSelectedHobbiesName() {
    this.selectedHobbiesNames = _.filter(
      this.selectedHobbiesNames,
      function(hobby) {
        if (hobby !== false) {
          return hobby;
        }
      }
    );
  }
  
  get f() { return this.productForm.controls; }
  saverecord() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.productForm.invalid) {
      return;
    } else {
      if (this.buttontext === 'Save') {
        const data = {
          descriptions: [{
            productName: this.productForm.get('productName').value,
            slug: this.productForm.get('productName').value.replace(/\s/g, '').toLowerCase(),
            language: {
               languageId: 'en'
              }
          }],
          productAttributes: [],
          productImages:[{
            imageName: this.myFiles,
            }],
            categories:[],
        };
        debugger;
        console.log(data)
        this._masterService.addProducts(data)
        .subscribe((data: any) => {
            if (data.status === 'OK') {
              this.router.navigate(['/product-list']);
            }
        });

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
          Status: this.Status,
          Color: this.Color,
          CreatedDate: this.Editdata.CreatedDate,
          ProductImage: this.ProductImage,
          SIze:this.productForm.get('hobbies').value,
        };
        console.log(data)
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
         this.Price = Editdata.Price,
         this. Discount= Editdata.Discount,
         this. Unit=Editdata.Unit,
         this. Status=Editdata.Status,
         this.Color= Editdata.Color,
         this.ProductImage = Editdata.ProductImage,
         this.productForm.patchValue({hobbies: Editdata.SIze });
        
      //   this.item.checked=Editdata.Size,
         
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

setStatus() {
  (this.selectedItems.length > 0) ? this.requiredField = true : this.requiredField = false;
}

onItemSelect(item: any) {
  //Do something if required
  this.setClass();
}
onSelectAll(items: any) {
  console.log(items)
  //Do something if required
  this.setClass();
}

setClass() {
  this.setStatus();
  if (this.selectedItems.length > 0) { return 'validField' }
  else { return 'invalidField' }
}
DocumentFile(event) {
  const fileSize = event.target.files;
  const image1 = event.target.files;
  let reader = new FileReader();
  this.ng2ImgMax.compress([event.target.files[0]], 0.3).subscribe(
    result => {
      this.Document64(result);
    })
}
Document64(file: File) {
  const reader: FileReader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = (e: any) => {

    const imagePreview:any = reader.result;
    this.Imageupload = imagePreview.replace('data:' + file.type + ";base64,", "");

    console.log(this.Imageupload)
  };
}
getImagePreview(file: File) {
  const reader: FileReader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = (e: any) => {
debugger;
    this.ProductImage= reader.result;
    this.Imagefile = this.ProductImage.replace("data:" + file.type + ";base64,", "");

    console.log(this.Imagefile)
  };
}
onFileChange(fileInput: any) {

  const fileSize = fileInput.target.files[0].size;
  if (fileSize < "2000000") {

    let image1 = fileInput.target.files[0];
    let ext;
    if (image1 != undefined) {
      if (image1.type == 'image/jpeg') {
        ext = "jpeg";
      } else if (image1.type == 'image/jpeg') {
        ext = "png";
      }
      if (image1.type == "image/jpeg" || image1.type == "image/jpeg" || image1.type == "image/png") {
        let reader = new FileReader();
        this.ng2ImgMax.compress([fileInput.target.files[0]], 0.3).subscribe(
          result => {
            this.getImagePreview(result);
          },
          error => {
            console.log('ðŸ˜¢ Oh no!', error);
          }
        );
      }

    }
  }

}



// latest code for images

onSelectFile(event) {
  if (event.target.files && event.target.files[0]) {
      const filesAmount = event.target.files.length;
      console.log(filesAmount);
      for (let i = 0; i < filesAmount; i++) {
              const reader = new FileReader();

              reader.onload = (event:any) => {
                 this.urls.push(event.target.result); 
                 console.log(this.urls);
              },
              this.myFiles.push(event.target.files[i].name);
              console.log(this.myFiles);
              reader.readAsDataURL(event.target.files[i]);
      }
  }
}

}
