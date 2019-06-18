import { NavController } from '@ionic/angular';


import { CommentsPage } from './../comments/comments.page';
import { Component, OnInit } from '@angular/core';




export class Post {
  postId: number;
  userId: number;
  userName: string;
  title: string;
  body: string;
  createDate: string;
}

const POSTS: Post [] = [
  {
    postId: 1,
    userId: 1234,
    userName: 'Adib',
    title: 'How to Make a Blog',
    // tslint:disable-next-line:max-line-length
    body: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    createDate: 'June 7, 2019'
  },
  {
    postId: 2,
    userId: 2445,
    userName: 'Bartimaeus',
    title: 'where is God when it hurts',
   // tslint:disable-next-line:max-line-length
   body: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    createDate: 'June 7, 2020'
  },
  {
    postId: 3,
    userId: 1212,
    userName: 'Sam',
    title: 'Dangers of Haircuts',
    // tslint:disable-next-line:max-line-length
    body: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    createDate: 'June 7, 2020'
  }
];

@Component({
  selector: 'app-posts',
  templateUrl: './posts.page.html',
  styleUrls: ['./posts.page.scss'],
})
export class PostsPage implements OnInit {

  constructor(public navCtrl: NavController) { }

posts = POSTS;
  ngOnInit() {
    }
   }


