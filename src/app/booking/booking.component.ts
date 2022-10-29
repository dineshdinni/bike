import {DOCUMENT} from '@angular/common';
import { Component, Inject, OnInit } from '@angular/core';


@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  name:undefined;
  adhar:undefined;
  drivinglicence:undefined;
  email:undefined;
  contact:undefined;
  dob:undefined;
  time:undefined;
  document:any;
  router: any;
  

  constructor(@Inject(DOCUMENT) document:Document) {
    this.document=document;
   }

  ngOnInit(): void {
  }

  Signup(){
    if(this.document.getElementById('name').value=="" && this.document.getElementById('adhar').value=="" && this.document.getElementById('drivinglicenece').value=="" && this.document.getElementById('email').value=="" && this.document.getElementById('contact').value=="" &&this.document.getElementById('dob').value=="" && this.document.getElementById('time').value==""){
      alert('booking sucess');
      this.router.navigate(['home']);

    }else{
      alert('booking failed');
    }
  }

}
