import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';
import { FormControl } from '@angular/forms';
/*import { Validators } from '@angular/forms';*/

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
contactForm;

  constructor(
    private formBuilder: FormBuilder,) { 
    this.contactForm = this.formBuilder.group({

      nameandsurname: '',
      Cname: '',
      Tnumber: '',
      Cnumber: '',
      Eaddress: '',
     Info: ''


    });}

  ngOnInit() {
  }

onSubmit(customerData) {
    // Process checkout data here
    this.advertForm.reset();

    console.warn('Information submitted', customerData);
  }
  

}
