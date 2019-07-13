import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
const apiUrl = 'http://localhost:1337/api/posts';

@Injectable({
  providedIn: 'root'
})
export class RestApiService {

  constructor(private http: HttpClient) { }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }

  private extractData(res: Response) {
    const body = res;
    return body || { };
  }

//   Don't all my comments have to be `${apiUrl}/${postId}/${comments}/${commentId}??
// ??
//   getComment(): Observable<any> {
//     return this.http.get(apiUrl, httpOptions).pipe(
//       map(this.extractData),
//       catchError(this.handleError)
//     );
//   }

  getCommentById(postId: string, comments: string, commentId: string, data): Observable<any> {
    const url = `${apiUrl}/${postId}/${comments}/${commentId}`;
    return this.http.get(url, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }

  postComments(postId: string, comments: string, data): Observable<any> { // data: holding the comment text. id: post_id
    const url = `${apiUrl}/${postId}/${comments}`;
    return this.http.post(url, data, httpOptions).pipe(
      catchError(this.handleError)
    );
  }
// ???
  updateComment(postId: string, comments: string, commentId: string, data): Observable<any> {
    const url = `${apiUrl}/${postId}/${comments}/${commentId}`;
    return this.http.put(url, data, httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  deleteComment(postId: string, comments: string, commentId: string, data): Observable<{}> {
    const url = `${apiUrl}/${postId}/${comments}/${commentId}`;
    return this.http.delete(url, httpOptions).pipe(
      catchError(this.handleError)
    );
  }

  getPostById(id: string): Observable<any> {
    const url = `${apiUrl}/${id}`;
    return this.http.get(url, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError)
    );
  }
  updatePost(id: string, data): Observable<any> {
    const url = `${apiUrl}/${id}`;
    return this.http.put(url, data, httpOptions).pipe(
      catchError(this.handleError)
    );
  }
}
