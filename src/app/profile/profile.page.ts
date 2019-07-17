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
  }]



@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor() { }
posts = POSTS;

  ngOnInit() {
  }

}



