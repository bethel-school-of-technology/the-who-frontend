import { ActivatedRoute, Router } from '@angular/router';
import { RestApiService } from '../../rest-api.service';
import { LoadingController} from '@ionic/angular';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators, FormArray } from '@angular/forms';
import { Component, OnInit, Output } from '@angular/core';



@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.page.html',
  styleUrls: ['./create-post.page.scss'],
})
export class CreatePostPage implements OnInit {


postForm: FormGroup;
comments: FormArray;

  constructor(public api: RestApiService,
              public loadingController: LoadingController,
              private route: ActivatedRoute,
              public router: Router,
              private formBuilder: FormBuilder) {
                this.postForm = this.formBuilder.group({
                  post_title : '',
                  post_body : [null, Validators.required],
                  comments : this.formBuilder.array([])
                });
              }



  ngOnInit() {
  }

  // get commentData() {
  //   return this.postForm.get('comments') as FormArray;
  // }

  // createComment(): FormGroup {
  //   return this.formBuilder.group({
  //     comment_body: ''
  //   });
  // }

  // addBlankComment(): void {
  //   this.comments = this.postForm.get('comments') as FormArray;
  //   this.comments.push(this.createComment());
  // }

  // deleteComment(control, index) {
  //   control.removeAt(index);
  // }

  async savePost() {
    await this.api.postPost(this.postForm.value)
    .subscribe(res => {
      const id = res.id;
      this.router.navigate(['/list']);
    }, (err) => {
      console.log(err);
    });
  }

}
