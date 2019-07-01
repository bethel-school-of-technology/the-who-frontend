import { RestApiService } from '../../../rest-api.service';
import { LoadingController } from '@ionic/angular';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';






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
    public router: Router
    ) { }


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

  edit(id) {
    this.router.navigate(['/create-comment', JSON.stringify(id)]);
  }

}
