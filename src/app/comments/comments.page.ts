
import { Component, OnInit, Input } from '@angular/core';
// import { selectedPost } from '../posts/posts.page';
import { Post } from '../posts/posts.page';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-comments',
  templateUrl: './comments.page.html',
  styleUrls: ['./comments.page.scss'],
})
export class CommentsPage implements OnInit {
@Input() post: Post;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
  }

}
