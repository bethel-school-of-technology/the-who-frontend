import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'events', loadChildren: './events/events.module#EventsPageModule' },
  { path: 'posts', loadChildren: './blog/posts/posts.module#PostsPageModule' },
  { path: 'create-post', loadChildren: './blog/create-post/create-post.module#CreatePostPageModule' },
  { path: '{post_id}/comments', loadChildren: './blog/specPost/comments/comments.module#CommentsPageModule' },
  // tslint:disable-next-line:max-line-length
  { path: '{post_id}/comments/create-comment', loadChildren: './blog/specPost/create-comment/create-comment.module#CreateCommentPageModule' }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
