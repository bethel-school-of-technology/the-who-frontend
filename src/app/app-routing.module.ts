import { AppPage } from './../../e2e/src/app.po';
import { PostsPage } from './posts/posts.page';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'events', loadChildren: './events/events.module#EventsPageModule' },
  { path: 'create-post', loadChildren: './create-post/create-post.module#CreatePostPageModule' },
  { path: 'posts', loadChildren: './posts/posts.module#PostsPageModule' },
  { path: 'comments', loadChildren: './comments/comments.module#CommentsPageModule' },
  { path: 'comments/:id', loadChildren: './comments/comments.module#CommentsPageModule', },
  { path: 'create-comment/:id', loadChildren: './create-comment/create-comment.module#CreateCommentPageModule' }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
