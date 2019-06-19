// import { Injectable } from '@angular/core';
// import { Subject } from 'rxjs';

// import { Post } from './post.model';

// @Injectable({providedIn: 'root'})
// export class PostsService {
//   private posts: Post[] = [];
//   private postsUpdated = new Subject<Post[]>();

//   getPosts() {
//     return [...this.posts];
//   }

//   getPostUpdateListener() {
//     return this.postsUpdated.asObservable();
//   }

//   addPost(title: string, body: string, postId: number, userId: number) {
//     const post: Post = {title, body}  ;
//     this.posts.push(post);
//     this.postsUpdated.next([...this.posts]);
//   }
// }
