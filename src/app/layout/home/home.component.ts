import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  phoneNumberForm: FormGroup;
  countries = []

  constructor(private fb: FormBuilder,
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.setupForm();
    this.getCountries();
  }

  async sendPhoneNumber(params) {
    try {
      const results = await this.dataService.verifyNumber(params)
      console.log(results)

    } catch (error) {

    }
  }

  async getCountries() {
    try {
      const results = await this.dataService.fetchCountries();
      let keys = Object.keys(results);
      let countries = [];
      keys.forEach(key => {
        countries.push({
          alphaTwoCode: key,
          name: results[key].country_name,
          diallingCode: results[key].dialling_code
        })
      })
      console.log(countries)
      this.countries = countries
    } catch (error) {

    }
  }
  setupForm() {
    this.phoneNumberForm = this.fb.group({
      number: null,
      country_code: null
    })
  }
}
