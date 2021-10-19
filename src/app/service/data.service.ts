import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { lastValueFrom } from 'rxjs'
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private readonly _url: string = 'http://apilayer.net/api/validate?access_key=eb588dbf70cb81df1c8d374269db9d18'
  private readonly url: string = 'http://apilayer.net/api/countries?access_key=eb588dbf70cb81df1c8d374269db9d18';



  constructor(private http: HttpClient) { }

  verifyNumber(param: any) {
    const req = this.http.get(`http://apilayer.net/api/validate?access_key=eb588dbf70cb81df1c8d374269db9d18&number=${param.number}&country_code=${param.country_code}`);
    console.log(req);
    return lastValueFrom(req);
  }





  fetchCountries() {
    const req = this.http.get(this.url);
    return lastValueFrom(req)
  }
}
