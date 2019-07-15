import { Component, OnInit } from '@angular/core';

export class User {
  userId: number;
  userName: string;
  email: string;
  posts: string;
}

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}



