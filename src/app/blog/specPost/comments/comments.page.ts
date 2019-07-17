
import { Component, OnInit, Input } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { CommentsService } from 'src/app/services/comments.service';

export class Comment {
  commentId: number;
   body: string;
   createDate: string;
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
        body: 'Haha! Tony you\'re crazy!',
        createDate: 'July 20, 2019'


    },
    {
      postId: 1,
      commentId: 2,
      userId: 27,
      userName: 'Tony',
      body: 'Iron Man is definitely a better man', 
      createDate: 'July 20, 2019'

    },
    {
      postId: 1,
      commentId: 3,
      userId: 25,
      userName: 'Peter',
      body: 'I appreciate you guys so much',
      createDate: 'July 20, 2019'

    }
  ];


@Component({
  selector: 'app-comments',
  templateUrl: './comments.page.html',
  styleUrls: ['./comments.page.scss'],
})
export class CommentsPage implements OnInit {

  // post: any = {};
  // comments: any = {};

  constructor(
    public route: ActivatedRoute,
    public loadingController: LoadingController,
    public api: CommentsService,
    public router: Router) { }

comments = COMMENTS;


  ngOnInit() {
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
    this.router.navigate([id + '/comments/create-comment', JSON.stringify(id)]);
  }

}


