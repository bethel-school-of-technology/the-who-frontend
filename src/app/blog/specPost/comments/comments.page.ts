
import { Component, OnInit, Input } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { RestApiService } from 'src/app/rest-api.service';
import { Post } from '../../posts/posts.page';

// dummy data

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
// need this for backend
  // post: any = {};
  // comments: any = {};

  constructor(
    public route: ActivatedRoute,
    public loadingController: LoadingController,
    public api: RestApiService,
    public router: Router) { }

    // for dummy data
    comments = COMMENTS;
    posts = POSTS;

  ngOnInit() {
    // need this for backend
    // this.getPost();
  }

  // async getPost() {
  //   const loading = await this.loadingController.create({
  //     message: 'Loading'
  //   });
  //   await loading.present();
  //   await this.api.getPostById(this.route.snapshot.paramMap.get('id'))
  //   .subscribe(res => {
  //     console.log(res);
  //     this.post = res;
  //     loading.dismiss();
  //   }, err => {
  //     console.log(err);
  //     loading.dismiss();
  //   });
  // }
// // do we want to delete a post?

  async delete(id) {
    const loading = await this.loadingController.create({
      message: 'Deleting'
    });
    await loading.present();
    await this.api.deletePost(id)
    .subscribe(res => {
      loading.dismiss();
      this.router.navigate(['/posts']);
    }, err => {
      console.log(err);
      loading.dismiss();
    });
  }

// this is to create a comment
  edit(id) {
    this.router.navigate(['{{post_id}/comments/create-comment', JSON.stringify(id)]);
  }

}


