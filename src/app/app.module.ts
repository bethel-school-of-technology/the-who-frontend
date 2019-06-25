
import { FormsModule } from '@angular/forms';

import { CreateCommentPage } from './create-comment/create-comment.page';
import { EventsPage } from './events/events.page';
import { PostsPage } from './posts/posts.page';
import { CommentsPage } from './comments/comments.page';
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

// import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HomePage,
    PostsPage,
    CreatePostPage,
    CommentsPage,
    CreateCommentPage,
    EventsPage
     ],
  entryComponents: [
    AppComponent,
    HomePage,
    PostsPage,
    CreatePostPage,
    CommentsPage,
    CreateCommentPage,
    EventsPage
     ],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, FormsModule],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    // { provide: ErrorHandler, useClass: IonicErrorHandler},
     ],
  bootstrap: [AppComponent]
})
export class AppModule {}
