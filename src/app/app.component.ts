import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TransactionServices } from './services/transactionservice';
import { ReactiveFormConfig } from '@rxweb/reactive-form-validators';
declare var $: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Test';
  constructor(
    private router: Router,

    ) { }
    ngOnInit() {
  }
  changeOfRoutes() {

  }

}
