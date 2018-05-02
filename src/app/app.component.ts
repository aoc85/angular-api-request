import { Component } from '@angular/core';
import { Http, Response } from '@angular/http';
import  'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  private apiURL = 'https://address-book-demo.herokuapp.com/api/contacts';
  data: any = {};

  constructor(private http: Http){
    console.log('Welcome');
    this.getAddress();
    this.getAddressData();
  }

  getAddress() {
    return this.http.get(this.apiURL)
      .map((res: Response) => res.json());
  }

  getAddressData() {
    this.getAddress().subscribe(data =>{
      console.log(data);
      this.data = data
    });
  }

}
