import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatStepperModule, MatFormField, MatInputModule, MatIconModule, MatFormFieldModule, MAT_DIALOG_DATA, } from '@angular/material';
import { MatDialogModule } from '@angular/material/dialog';
import { MatCardModule } from '@angular/material/';
import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material';
import { AddCategoryComponent } from './User/AddCategory.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { TagInputModule } from 'ngx-chips';
import { Http, HttpModule } from '@angular/http';
import { MasterServices } from './_Services/masterservice';
import { TransactionServices } from './_Services/transactionservice';
import { AppConfig } from './_AppConfig/appconfig';
import { Ng2ImgMaxModule } from 'ng2-img-max';
import { AutoCompleteModule } from 'ng4-auto-complete';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { NgxPasswordToggleModule } from 'ngx-password-toggle';
import {
  MatAutocompleteModule, MatBadgeModule, MatBottomSheetModule, MatButtonToggleModule,
  MatCheckboxModule, MatChipsModule, MatDatepickerModule,
  MatDividerModule, MatExpansionModule, MatGridListModule, MatListModule, MatMenuModule,
  MatNativeDateModule, MatPaginatorModule, MatProgressBarModule, MatProgressSpinnerModule,
  MatRadioModule, MatRippleModule, MatSelectModule, MatSidenavModule, MatSliderModule,
  MatSlideToggleModule, MatSnackBarModule, MatSortModule, MatTableModule, MatTabsModule,
  MatToolbarModule, MatTooltipModule, MatTreeModule,
} from '@angular/material';
import { CategoryComponent } from './User/category/category.component';
import { CategorylistComponent } from './User/categorylist/categorylist.component';
import { UserServices } from './_Services/Userservices';
@NgModule({
  declarations: [
    AppComponent,
    AddCategoryComponent,
    CategoryComponent,
    CategorylistComponent
  ],
  imports: [
    AutoCompleteModule,
    BrowserModule,
    Ng2ImgMaxModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatStepperModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatCardModule,
    BsDatepickerModule.forRoot(),
    TagInputModule,
    HttpModule,
    MatSlideToggleModule,
    MatStepperModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatIconModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    DragDropModule,
    NgxPasswordToggleModule
  ],
  providers: [
    AppConfig,
    MasterServices,
    TransactionServices,
    UserServices,

    {
      provide: MAT_DIALOG_DATA,
      useValue: {}

    },
    {
      provide: ErrorStateMatcher,
      useClass: ShowOnDirtyErrorStateMatcher
    },

  ],
  bootstrap: [AppComponent],

})
export class AppModule { }
