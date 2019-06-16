
import { Component, OnInit } from '@angular/core';

import { Post } from '../post.model';



@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.page.html',
  styleUrls: ['./create-post.page.scss'],
})
export class CreatePostPage implements OnInit {
  post: any = {
    post_id: Number,
    user_id: Number,
    title: '',
    body: '',
    create_date: Date
  };

  constructor() { }

  ngOnInit() {
  }

}
