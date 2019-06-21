
import { Component, OnInit, Output } from '@angular/core';
import {NgForm } from '@angular/forms';
import { Post } from '../post.model';
// import { PostsService } from '../posts.service';
import { EventEmitter } from 'protractor';
import { ValueAccessor } from '@ionic/angular/dist/directives/control-value-accessors/value-accessor';



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


  constructor() {}



  ngOnInit() {
  }

}
