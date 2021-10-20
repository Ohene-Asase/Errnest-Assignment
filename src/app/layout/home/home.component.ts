import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { NotificationService } from 'src/app/services/notification.service';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogBodyComponent } from 'src/app/dialog-body/dialog-body.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  phoneNumberValidationForm: FormGroup;
  alphatwoCodeDetails = []
  errorMessage: any;

  constructor(
    private fb: FormBuilder,
    private dataService: DataService,
    private toaster: NotificationService,
    public dialog: MatDialog,
    private matDialog: MatDialog
    
  ) { }

  ngOnInit(): void {
    this.setupForm();
    this.getalphaTwoCode();
  }

  async sendPhoneNumber(params) {
    try {
      const results = await this.dataService.verifyNumber(params)
       results.valid ? this.toaster.showSucess('Number is valid') : this.toaster.showError(results.error.info);

    } catch (error) { console.error(error) }
  }

  async getalphaTwoCode() {
    try {
      const results = await this.dataService.fetchalalphaTwoCode();
      let keys = Object.keys(results);
      let items = [];
      keys.forEach(key => {
        items.push({
          alphaTwoCode: key,
          name: results[key].country_name,
          diallingCode: results[key].dialling_code
        })
      })

      this.alphatwoCodeDetails = items
    } catch (error) {

    }
  }
  setupForm() {
    this.phoneNumberValidationForm = this.fb.group({
      number: [null, [Validators.required]],
      country_code: null
    })
  }

  // openDialog(result) {
  //   const dialogConfig = new MatDialogConfig();
  //   this.matDialog.open(DialogBodyComponent, {
  //     data: result,
  //     height: '400px',
  //     width: '600px',
  //   });

  // }

  getRequiredMessage() {
    if (this.phoneNumberValidationForm.controls.number.hasError('required'))
      return 'You must enter a phone number'
  }
}
