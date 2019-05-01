import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  baseAPIUrl: string  = "https://my-json-server.typicode.com/phani03/sample_json/"
  constructor(private httpClient: HttpClient) { }
  
  getDetails() {
    return this.httpClient
        .get(this.baseAPIUrl+'profile');
  }

  getEduDetails() {
    return this.httpClient
        .get(this.baseAPIUrl+'Education');
  }

  getAddressDetails() {
    return this.httpClient
        .get(this.baseAPIUrl+'Address');
  }

  setAge(data, type) {
    let body = {};
    if(type==="age"){
      body == JSON.stringify({ 'Age': data });
    } else {
      body == JSON.stringify({ 'Experience': data });
    }
    return this.httpClient
    .patch(this.baseAPIUrl+'profile/1', body);
  }
}
