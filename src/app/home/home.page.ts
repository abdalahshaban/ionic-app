import { Component, OnInit } from '@angular/core';
import { SMS } from '@ionic-native/sms/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import * as m from './data.js';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  data: any;
  percent = 0;
  collectedAmount = 0;
  targetAmount = 0;

  constructor(private sms: SMS, private socialSharing: SocialSharing) { }

  ngOnInit() {
    this.init()
  }


  
 recall=setInterval(() => {
    this.init()
  }, 30000);

  init(){
    // console.log(m.ikhair.country[0]['-causes'].cause[0]);
    this.data = m.ikhair.country[0]['-causes'].cause[0];
    this.collectedAmount = m.ikhair.country[0]['-causes'].cause[0]['-collectedAmount'];
    this.targetAmount = m.ikhair.country[0]['-causes'].cause[0]['-targetAmount'];
    this.percent = this.collectedAmount * 100 / this.targetAmount;
  }

  DonateWithSms() {
    // console.log('sms');
    // this.sms.send('5115', 'Thank You For Donate');
    this.socialSharing.shareViaSMS('Thank You For Donate', '5111');
  }

  shareViaFacebook() {
    // console.log('facebook');
    this.socialSharing.shareViaFacebook('share Via facebook').then(res => {
      console.log('share success',res);
    }).catch(err => {
      console.log('error in share ', err);
    });
  }
  shareViaTwitter() {
    // console.log('twitter');
    this.socialSharing.shareViaTwitter('share Via twitter').then(res => {
      console.log('share success',res);
    }).catch(err => {
      console.log('error in share ', err);
    });
  }

  defaultShare() {
    // console.log('default');
    this.socialSharing.share().then(res => {
      console.log('share success',res);
    }).catch(err => {
      console.log('error in share ', err);
    });
  }


}

