import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-advert',
  templateUrl: './advert.component.html',
  styleUrls: ['./advert.component.css']
})
export class AdvertComponent implements OnInit {
  advertForm;

 constructor(private formBuilder: FormBuilder,)

    {this.advertForm = this.formBuilder.group 
    ({
      nameandsurname1: '',
      Eaddress: '',
      artw: '',
      POP: ''
    });
    
    }

  ngOnInit() {
  }
  onSubmit(customerData) {
    // Process checkout data here
        this.advertForm.reset();

    console.warn('Advert submitted', customerData);
  }

}
