import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Intro1Page } from '../pages/intro1/intro1';
import { FeedPage } from '../pages/feed/feed';
// import { HttpModule } from "@angular/http"
import { MovieProvider } from '../providers/movie/movie';
import { HttpClientModule } from '@angular/common/http';
import { ConfiguracoesPageModule } from '../pages/configuracoes/configuracoes.module';
import { PerfilPageModule } from '../pages/perfil/perfil.module';
import { SobrePageModule } from '../pages/sobre/sobre.module';
import { FilmeDetalhesPageModule } from '../pages/filme-detalhes/filme-detalhes.module';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    FeedPage,
    Intro1Page
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    ConfiguracoesPageModule,
    PerfilPageModule,
    SobrePageModule,
    FilmeDetalhesPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    FeedPage,
    Intro1Page
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    MovieProvider
  ]
})
export class AppModule { }
