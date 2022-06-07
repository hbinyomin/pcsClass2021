import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { BlogInfo, BlogInfoServerResponse } from './Blog';
import Post from './Post';

@Injectable({
  providedIn: 'root'
})
export class BlogService {

  constructor(private httpClient: HttpClient) { }

  getBlogs(): Observable<BlogInfo[]> {
    return this.httpClient.get<BlogInfoServerResponse[]>('https://jsonplaceholder.typicode.com/users').pipe(map(blogs => {
      return blogs.map(blog => {
        return {
          id: blog.id,
          name: blog.name,
          website: blog.website,
          companyName: blog.company.name,
          companyCatchPhrase: blog.company.catchPhrase,
          companyBs: blog.company.bs
        };
      });
    }));
  }

  getPosts(id: string): Observable<Post[]> {
    return this.httpClient.get<Post[]>(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);
  }
}
