import { ActivatedRoute, Router } from '@angular/router';
import { RestApiService } from '../../rest-api.service';
import { LoadingController} from '@ionic/angular';
import { Component, OnInit, Output } from '@angular/core';
import {FormControl,
  FormGroupDirective,
  FormBuilder,
  FormGroup,
  NgForm,
  Validators,
  FormArray
 } from '@angular/forms';


import { EventEmitter } from 'protractor';
import { ValueAccessor } from '@ionic/angular/dist/directives/control-value-accessors/value-accessor';



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
              public route: ActivatedRoute,
              public router: Router,
              private formbuilder: FormBuilder) {
                this.postForm = this.formbuilder.group({
                  post_title : [null, Validators.required],
                  user: [null, Validators.required],
                  post_id: [null, Validators.required],
                  post_body : [null, Validators.required],
                });
              }



  ngOnInit() {
  }

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
