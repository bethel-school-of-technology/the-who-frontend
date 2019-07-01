import { NavController } from '@ionic/angular';


import { CommentsPage } from '../comments/comments.page';
import { Component, OnInit } from '@angular/core';




export class Comment {
commentId: number;
 body: string;
//  create_date;
 postId: number;
 userId: number;
 userName: string;
}

const COMMENTS: Comment [] = [
  {
      postId: 1,
      commentId: 1,
      userId: 54,
      userName: 'Capt',
      body: 'Haha! Tony you\'re crazy!'


  },
  {
    postId: 1,
    commentId: 2,
    userId: 27,
    userName: 'Tony',
    body: 'Iron Man is definitely a better man'

  },
  {
    postId: 1,
    commentId: 3,
    userId: 25,
    userName: 'Peter',
    body: 'I appreciate you guys so much'

  }
];

@Component({
    selector: 'app-create-comment',
    templateUrl: './create-comment.page.html',
    styleUrls: ['./create-comment.page.scss'],
  })
export class CreateCommentPage  implements OnInit {

  constructor(public navCtrl: NavController) { }

comments = COMMENTS;
  ngOnInit() {
    }
   }


