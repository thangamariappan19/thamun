import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MatPaginator, MatTableDataSource } from '@angular/material';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { UserServices } from '../_Services/Userservices';
declare var $: any;
@Component({
    selector: 'app-AddCategory',
    templateUrl: './AddCategory.component.html',
})
export class AddCategoryComponent implements OnInit {

    // Variable Declaration
    color = 'green';
    displayedColumns: string[] = [ 'Depth', 'CategoryName', 'Status', 'Action'];
    dataSource = new MatTableDataSource();
    @ViewChild(MatPaginator) paginator: MatPaginator;
    playerForm: FormGroup;
    updateForm: FormGroup;
    submitted = false;
    // CategoryCode: string;
    Depth: string;
    CategoryName: string;
    // Slug: string;
    Status: Boolean;
    ButtonText: string;
    UserData = [];
    checkdata: any = [];
    i: any;
    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private userServices: UserServices
    ) {

     }

    ngOnInit() {
        this.playerForm = this.formBuilder.group({
            categoryCode: ['', Validators.required],
            depth: [''],
            categoryName: [''],
            slug: [''],
            status: false,

        });
        this.updateForm = this.formBuilder.group({
          categoryCode: ['', Validators.required],
          depth: [''],
          categoryName: [''],
          slug: [''],
          status: false,

      });
    }

    edit(data: any) {
      // this.CategoryCode = data.CategoryCode,
      this.Depth = data.Depth,
      this.CategoryName = data.CategoryName,
      // this.Slug = data.Slug,
      this.Status = data.Status;
      this.ButtonText = 'Update';
    }
// Create Player
updateCategory() {
  this.submitted = true;
  if (this.playerForm.invalid) {
      return;
  }

  const data = {
    // CategoryCode: this.CategoryCode,
    Depth: this.Depth,
    CategoryName: this.CategoryName,
    // Slug: this.Slug,
    Status: this.Status,
  };

  this.UserData.splice(this.i, 1);
  this.UserData.push(data);
  if (this.checkdata != null) {
    debugger;
    $('#CreateModal').modal('hide');
    this.checkdata.push(data);
    this.dataSource = new MatTableDataSource();
    this.dataSource.data = this.UserData;
    console.log(this.dataSource.data);
  }


}
    createPlayer() {
        this.submitted = true;
        if (this.playerForm.invalid) {
            return;
        }
            const text = {
              // CategoryCode: this.CategoryCode,
              Depth: this.Depth,
              CategoryName: this.CategoryName,
                // Slug: this.Slug,
                Status: this.Status,
            };
            this.UserData.push(text);
            if (this.checkdata != null) {
              debugger;
              $('#CreateModal').modal('hide');
              this.checkdata.push(text);
              this.dataSource = new MatTableDataSource();
              this.dataSource.data = this.UserData;
              console.log(this.dataSource.data);
            }
        }
    get f() { return this.playerForm.controls; }
    get f1() { return this.updateForm.controls; }
    closecreateModal() {
        $('#CreateModal').modal('hide');
        this.playerForm.reset();
    }
    closeUpdateModal() {
      $('#UpdateModal').modal('hide');
      this.updateForm.reset();
  }
    CancelCreateModal() {
        $('#CreateModal').modal('hide');
        this.playerForm.reset();
    }
    ClearCreateModal() {
        $('#CreateModal').modal('hide');
        this.playerForm.reset();
    }

    // GetHospital() {
    //     this.HospitalService.HospitalFetch(this.HospitalID)
    //         .subscribe(data => {
    //             if (data != null && data.msg.length > 0) {
    //                 this.dataSource = new MatTableDataSource();
    //                 this.dataSource.data = data.msg;
    //                 this.dataSource.paginator = this.paginator;
    //             }
    //         });
    // }
}

