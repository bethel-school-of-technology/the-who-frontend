import { CreatePostPage } from './create-post/create-post.page';
import { HomePage } from './home/home.page';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy, Data } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { EventsPage } from './events/events.page';



@NgModule({
  declarations: [
    AppComponent,
     ],
  entryComponents: [
    AppComponent,
     ],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    // { provide: ErrorHandler, useClass: IonicErrorHandler},
     ],
  bootstrap: [AppComponent]
})
export class AppModule {}
