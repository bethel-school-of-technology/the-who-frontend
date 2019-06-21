
import { Component, OnInit, Input } from '@angular/core';
// import { selectedPost } from '../posts/posts.page';
import { Post } from '../posts/posts.page';
import { ActivatedRoute } from '@angular/router';





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
  selector: 'app-comments',
  templateUrl: './comments.page.html',
  styleUrls: ['./comments.page.scss'],
})
export class CommentsPage implements OnInit {


  constructor(private route: ActivatedRoute) { }
comments = COMMENTS;
posts = POSTS;
  ngOnInit() {
  }

}
