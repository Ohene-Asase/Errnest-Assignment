import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { NotificationService } from 'src/app/services/notification.service';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Country } from 'src/app/interface/data.model';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  phoneNumberValidationForm: FormGroup;
  countriesDetails: Country[]
  errorMessage: string;
  validationResponse: string;
  countries: object;

  constructor(
    private fb: FormBuilder,
    private dataService: DataService,
    private toaster: NotificationService,
    public dialog: MatDialog,
    private matDialog: MatDialog

  ) { }

  ngOnInit(): void {
    this.setupForm();
    this.getCountries();
  
  }

  sendPhoneNumber(params) {
   this.dataService.verifyNumber(params)
     .subscribe((data) => {
       let results = data
       if(results.valid){ this.toaster.showSucess('Number is Valid') }
       else  {
        results.error?.info ? this.toaster.showError(results.error?.info)  : this.toaster.showError('Number is invalid');   
      }
     })
      


    
  }

  getCountries() {
    this.dataService.fetchCountries()
      .subscribe((data) => {
        if(data){
          this.countries = data
          let keys = Object.keys(this.countries);
          let items = [];
          keys.forEach(key => {
            items.push({
              alphaTwoCode: key,
              name: this.countries[key].country_name,
              diallingCode: this.countries[key].dialling_code
            })
          })
      
         this.countriesDetails = items
       
        }
      })
     
  
  }
  setupForm() {
    
    this.phoneNumberValidationForm = this.fb.group({
      number: [null, [Validators.required]],
      country_code: [null, [Validators.required]]
    })
  }


  getRequiredMessageForNumber() {
    if (this.phoneNumberValidationForm.controls.number.hasError('required'))
      return 'You must enter a phone number'
  }

  getRequiredMessageForCode() {
    if (this.phoneNumberValidationForm.controls.country_code.hasError('required'))
      return 'You must enter country code'
  }


}


