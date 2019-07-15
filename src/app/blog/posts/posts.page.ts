import { NavController, LoadingController } from '@ionic/angular';
import { PostsService } from '../../services/posts.service';
import { Router } from '@angular/router';
import { Post } from 'src/app/post.model';

import { Component, OnInit } from '@angular/core';

// export class Post {
//   postId: number;
//   userId: number;
//   userName: string;
//   title: string;
//   body: string;
//   createDate: string;
// }


@Component({
  selector: 'app-posts',
  templateUrl: './posts.page.html',
  styleUrls: ['./posts.page.scss'],
})
export class PostsPage implements OnInit {


  posts: any;
  constructor(public navCtrl: NavController,
              public api: PostsService,
              public loadingController: LoadingController,
              public router: Router) { }





  ngOnInit() {
    console.log('posts page');
    this.getPosts();
    }

    async getPosts() {
      const loading = await this.loadingController.create({
        message: 'Loading'
      });
      await loading.present();
      await this.api.getPost()
      .subscribe(res => {
        console.log(res);
        this.posts = res;
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });
    }

    showComments(id) {
      this.router.navigate([id + '/comments', JSON.stringify(id)]);
    }
   }



