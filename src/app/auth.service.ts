import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly jwtTokenName = 'jwt_token';

  private authUser = new ReplaySubject<any>(1);
  public authUserObservable = this.authUser.asObservable();
  hasAccess(): Promise<boolean> {
    const jwt = localStorage.getItem(this.jwtTokenName);

    if (jwt && !this.jwtHelper.isTokenExpired(jwt)) {

      return new Promise((resolve, _) => {

        this.httpClient.get(`${environment.serverURL}/authenticate`)
          .subscribe(() => {
              this.authUser.next(jwt);
              resolve(true);
            },
            err => {
              this.logout();
              resolve(false);
            });
      });

      // OR
      // this.authUser.next(jwt);
      // Promise.resolve(true);
    } else {
      this.logout();
      return Promise.resolve(false);
    }
  }
  logout() {
    localStorage.removeItem(this.jwtTokenName);
    this.authUser.next(null);
    this.navCtrl.navigateRoot('login', {replaceUrl: true});
  }
  login(values: any): Observable<string> {
    return this.httpClient.post(`${environment.serverURL}/login`, values, {responseType: 'text'})
      .pipe(tap(jwt => this.handleJwtResponse(jwt)));
  }

  private handleJwtResponse(jwt: string): string {
    localStorage.setItem(this.jwtTokenName, jwt);
    this.authUser.next(jwt);

    return jwt;
  }

  signup(values: any): Observable<string> {
    return this.httpClient.post(`${environment.serverURL}/signup`, values, {responseType: 'text'})
      .pipe(tap(jwt => {
        if (jwt !== 'EXISTS') {
          return this.handleJwtResponse(jwt);
        }
        return jwt;
      }));
  }
  constructor() { }
}
