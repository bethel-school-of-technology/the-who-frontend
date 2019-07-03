
import { Component, OnInit, Input } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { RestApiService } from 'src/app/rest-api.service';




@Component({
  selector: 'app-comments',
  templateUrl: './comments.page.html',
  styleUrls: ['./comments.page.scss'],
})
export class CommentsPage implements OnInit {

  post: any = {};
  comments: any = {};

  constructor(
    public route: ActivatedRoute,
    public loadingController: LoadingController,
    public api: RestApiService,
    public router: Router) { }


  ngOnInit() {
    this.getPost();
  }

  async getPost() {
    const loading = await this.loadingController.create({
      message: 'Loading'
    });
    await loading.present();
    await this.api.getPostById(this.route.snapshot.paramMap.get('id'))
    .subscribe(res => {
      console.log(res);
      this.post = res;
      loading.dismiss();
    }, err => {
      console.log(err);
      loading.dismiss();
    });
  }
// do we want to delete a post?

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


