import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-subsc',
  templateUrl: './subsc.component.html',
  styleUrls: ['./subsc.component.css']
})
export class SubscComponent implements OnInit {
subscForm;
insights = new FormControl('');
  constructor(private cartService: CartService,
    private formBuilder: FormBuilder) { 
    this.subscForm = this.formBuilder.group({
      insights: '',
      copiesperissue: ['',Validators.required],
      nameandsurname: ['',Validators.required],
      Cname: '',
      address: '',
      Tnumber: '',
      Cnumber: ['',Validators.required],
      Eaddress: '',
       Eaddress: '',
        DOB: '',
         Paddress: ''

    });}

  ngOnInit() {
  }

onSubmit(subscribeData) {
    // Process checkout data here
 
    this.subscForm.reset();

    console.warn('Your subscribtion has been submitted', subscribeData);
  }
  

}
