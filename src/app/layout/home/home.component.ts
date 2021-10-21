import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { NotificationService } from 'src/app/services/notification.service';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  phoneNumberValidationForm: FormGroup;
  alphatwoCodeDetails = []
  errorMessage: any;
  validationResponse: any;
  public alphatwocodeData: object;
  constructor(
    private fb: FormBuilder,
    private dataService: DataService,
    private toaster: NotificationService,
    public dialog: MatDialog,
    private matDialog: MatDialog

  ) { }

  ngOnInit(): void {
    this.getalphaTwoCode();
    this.setupForm();
  }

  async sendPhoneNumber(params) {
    try {
      const results = await this.dataService.verifyNumber(params)
        if(results.valid){ this.toaster.showSucess('Number is Valid') }
          else  {
           results.error?.info ? this.toaster.showError(results.error?.info)  : this.toaster.showError('Number is invalid');   
         }


    } catch (error) { console.error(error) }
  }

  getalphaTwoCode() {
    this.dataService.fetchalalphaTwoCode()
      .subscribe((data) => {
        if(data){
          this.alphatwocodeData = data
          let keys = Object.keys(this.alphatwocodeData);
          let items = [];
          keys.forEach(key => {
            items.push({
              alphaTwoCode: key,
              name: this.alphatwocodeData[key].country_name,
              diallingCode: this.alphatwocodeData[key].dialling_code
            })
          })
      
         this.alphatwoCodeDetails = items
       
        }
      })
     
  
  }
  setupForm() {
    
    this.phoneNumberValidationForm = this.fb.group({
      number: [null, [Validators.required]],
      country_code: null
    })
  }


  getRequiredMessage() {
    if (this.phoneNumberValidationForm.controls.number.hasError('required'))
      return 'You must enter a phone number'
  }
}
