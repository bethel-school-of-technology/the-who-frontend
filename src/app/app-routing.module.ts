import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'events', loadChildren: './events/events.module#EventsPageModule' },
  { path: 'list', loadChildren: './posts/list/list.module#ListPageModule' },
  { path: 'create-post', loadChildren: './posts/create-post/create-post.module#CreatePostPageModule' },
  { path: 'post:id/comments', loadChildren: './posts/specPost/comments', },
  { path: 'post:id/comments/create-comment', loadChildren: './posts/specPost/create-comment/create-comment.module#CreateCommentPageModule' }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
