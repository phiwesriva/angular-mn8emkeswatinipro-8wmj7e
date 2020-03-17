import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
contactForm;

  constructor(private cartService: CartService,
    private formBuilder: FormBuilder) { 
    this.contactForm = this.formBuilder.group({
       nameandsurname: ['',Validators.required],
      Cname: '',
      Tnumber: '',
      Cnumber: ['',Validators.required],
      Eaddress: '',
     Info: ''


    });}

  ngOnInit() {
  }

onSubmit(contactData) {
    // Process checkout data here
    this.advertForm.reset();

    console.warn('Information submitted', contactData);
  }
  

}
