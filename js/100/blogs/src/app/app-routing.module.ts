import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogListComponent } from './blog-list/blog-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PostsComponent } from './posts/posts.component';

const routes: Routes = [
  {
    path: 'blogs',
    component: BlogListComponent
  },
  {
    path: 'blog/:id',
    component: PostsComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/blogs',
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
