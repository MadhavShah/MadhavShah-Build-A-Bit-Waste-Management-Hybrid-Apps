import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import { Auth, Logger } from 'aws-amplify';

import { TabsPage } from '../tabs/tabs';
import { LoginPage } from '../login/login';

const logger = new Logger('ConfirmSignIn');

@Component({
  selector: 'page-confirm-signin',
  templateUrl: 'confirmSignIn.html'
})
export class ConfirmSignInPage {
  
  public code: string;
  public user: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.user = navParams.get('user');
  }

  confirm() {
    Auth.confirmSignIn(this.user, this.code, "SMS_MFA")
      .then(() => {this.navCtrl.push(TabsPage);
      console.log("Success")})
      .catch(err => {logger.debug('confirm error', err)
    console.log(err)});
  }

  login() {
    this.navCtrl.push(LoginPage);
  }

}
