import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { Intro1Page } from '../pages/intro1/intro1';
import { ConfigProvider } from '../providers/config/config';

@Component({
  templateUrl: 'app.html',
  providers:[
    ConfigProvider
  ]
})
export class MyApp {
  rootPage:any; //=Intro1Page; 

  constructor(
    platform: Platform, 
    statusBar: StatusBar, 
    splashScreen: SplashScreen,
    ConfigProvider: ConfigProvider ) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      
      let config = ConfigProvider.getConfigData();

      if(config == null){
        this.rootPage =Intro1Page;
        ConfigProvider.setConfigData(false);
      }else{
        this.rootPage = TabsPage;
      }
    
      console.log(config);
      
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
