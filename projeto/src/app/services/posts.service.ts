import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Post } from './../views/home/home.module';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  url = 'http://localhost:3000/posts'; 

  constructor(private httpClient: HttpClient) { }


  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  getPosts(): Observable<Post[]> {
    return this.httpClient.get<Post[]>(this.url)
      .pipe(
        retry(2),
        catchError(this.handleError))
  }

  getPostById(id: number): Observable<Post> {
    return this.httpClient.get<Post>(this.url + '/' + id)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  savePost(posts: Post): Observable<Post> {
    return this.httpClient.post<Post>(this.url, JSON.stringify(posts), this.httpOptions)
      .pipe(
        retry(2),
        catchError(this.handleError)
      )
  }

  updatePost(posts: Post): Observable<Post> {
    return this.httpClient.put<Post>(this.url + '/' + posts.id, JSON.stringify(posts), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  deletePost(posts: Post) {
    return this.httpClient.delete<Post>(this.url + '/' + posts.id, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      )
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  };

}