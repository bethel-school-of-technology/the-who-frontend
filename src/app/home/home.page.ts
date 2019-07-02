import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

}

this.authService.authUserObservable.subscribe(jwt => {
  if (jwt) {
    const decoded = jwtHelper.decodeToken(jwt);
    this.user = decoded.sub;
  } else {
    this.user = null;
  }
});

ngOnInit() {
  this.httpClient.get(`${environment.serverURL}/secret`, {responseType: 'text'}).subscribe(
    text => this.message = text,
    err => console.log(err)
  );
}