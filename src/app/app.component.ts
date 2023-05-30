import { Component } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-apps';
  form:any;
  emailRegex:any;
  constructor(){
    this.form=new FormGroup({
        fullName: new FormControl('',[
          Validators.required,
          Validators.minLength(5)
        ]),
        Email:new FormControl('',[
          Validators.required,
          //Validators.pattern(this.emailRegex)
          Validators.email
        ]),
        Address:new FormControl('',Validators.required)
    });
  }
  get fullName(){
    return this.form.get('fullname');
  }
  get Email(){
    return this.form.get('email')
  }

  get Address(){
    return this.form.get('address')
  }
  onSubmit() {
    if (this.form.valid) {
      // Form submission logic
      console.log("your form is submitted")
    }
  }
}
