import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DataService } from './shared/services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'dynamic-tabs';
  loading = false;


  Age: number;
  Experience: number;
  Education: any;
  Address: any;

  limit = {
    age:{
      min:21,
      max:62
    },
    experience:{
      min: 0,
      max: 35
    }
  }

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.loading = true;
    this.dataService.getDetails()
      .subscribe((res)=>{
        this.Age = res[0].Age;
        this.Experience = res[0].Experience;
        this.callEduDetails()
    },(err) =>{
      this.loading = false;
    });
  }

  callEduDetails() {
    this.dataService.getEduDetails()
      .subscribe((res)=>{
        this.Education = res;
        this.callAddressDetails()
    },(err) =>{
      this.loading = false;
    });
  }

  callAddressDetails() {
    this.dataService.getAddressDetails()
      .subscribe((res)=>{
        this.Address = res;
        this.loading = false;
    },(err) =>{
      this.loading = false;
    });
  }

  reloadData(data, type) {
    this.dataService.setAge(type, data)
      .subscribe();
  }

}
