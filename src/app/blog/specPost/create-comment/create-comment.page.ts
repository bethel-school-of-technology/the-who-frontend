import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestApiService} from 'src/app/services/comments.service';
import { NavController, LoadingController } from '@ionic/angular';
import {
  FormsModule,
  FormControl,
  FormGroupDirective,
  FormBuilder,
  FormGroup,
  NgForm,
  Validators,
  FormArray,
  ReactiveFormsModule
} from '@angular/forms';

@Component({
  selector: 'app-create-comment',
  templateUrl: './create-comment.page.html',
  styleUrls: ['./create-comment.page.scss']
})
export class CreateCommentPage implements OnInit {
  postForm: FormGroup;
  comments: FormArray;

  constructor(
    public navCtrl: NavController,
    public api: RestApiService,
    public loadingController: LoadingController,
    private route: ActivatedRoute,
    public router: Router,
    private formBuilder: FormBuilder
  ) {
    this.getPost(this.route.snapshot.paramMap.get('id'));
    this.postForm = this.formBuilder.group({
      post_body: [null, Validators.required],
      comments: this.formBuilder.array([])
    });
  }

  ngOnInit() {}
  get commentData() {
    return this.postForm.get('comments') as FormArray;
  }

  async getPost(id) {
    const loading = await this.loadingController.create({
      message: 'Loading'
    });
    await loading.present();
    await this.api.getPostById(id).subscribe(
      res => {
        this.postForm.controls.post_title.setValue(res.post_title);
        const controlArray = this.postForm.controls.comments as FormArray;
        res.comments.forEach(() => {
          controlArray.push(
            this.formBuilder.group({
              comment_body: ''
            })
          );
        });
        for (let i = 0; i < res.comments.length; i++) {
          controlArray.controls[i]
            .get('comment_body')
            .setValue(res.comments[i].comment_body);
        }
        console.log(this.postForm);
        loading.dismiss();
      },
      err => {
        console.log(err);
        loading.dismiss();
      });
  }

  createComment(): FormGroup {
    return this.formBuilder.group({
      comment_body: ''
    });
  }

  addBlankComment(): void {
    this.comments = this.postForm.get('comments') as FormArray;
    this.comments.push(this.createComment());
  }

  // didn't put the delete comment in html
  // deleteComment(control, index) {
  //   control.removeAt(index);
  // }

  async updatePost() {
    await this.api.updatePost(this.route.snapshot.paramMap.get('id'),
    this.postForm.value)
      .subscribe(res => {
        const id = res.id;
        this.router.navigate(['{post_id}/comments']);
      }, (err) => {
        console.log(err);
      });
  }
 }

