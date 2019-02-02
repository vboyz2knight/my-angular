import { Component } from '@angular/core';
import { $ } from 'protractor';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-angular';
  firstName = '';
  lastName = '';
  businessName = '';
  emailAddress = '';
  streetAddress = '';
  city = '';
  zipCode = '';
  phone = '';
  isCoBorrower = '';
  piCity = '';
  piState = '';

  enableBorrowerTab = true;
  enableCoBorrowerTab = false;
  enablePropertyInfo = false;
  isBorrowerNextButtonEnable = false;

  public moveNextTab() {
    this.enableBorrowerTab = false;

    if (this.isCoBorrower === 'yes')
    {
      console.log('enableCoBorrowerTab yes')
      this.enableCoBorrowerTab = true;
      let tab = document.getElementById('co-borrower-tab');
      
      setTimeout(() => {
        tab.click(); 
      });
    }
    else{
      console.log('enablePropertyInfo yes')
      this.enablePropertyInfo = true;
      let propTab = document.getElementById('property-info-tab');
     
      setTimeout(() => {
        propTab.click(); 
      });
    }
  }

  public NextTabPropertyInfo() {
    console.log('enablePropertyInfo yes')
    this.enablePropertyInfo = true;
    let propTab = document.getElementById('property-info-tab');
   
    setTimeout(() => {
      propTab.click(); 
    });
  }

  public save()
  {
    console.log('Save()');
    alert(`Send data to api to validate and save.: First Name [${this.firstName}] | Last Name [${this.lastName}]`);
  }
}
