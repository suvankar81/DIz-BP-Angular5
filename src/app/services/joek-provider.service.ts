// import { Injectable } from '@angular/core';

// @Injectable()
// export class JoekProviderService {

//   constructor() { }

// }
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class JoekProviderService {

  constructor(public http:Http) { 
    console.log('Data service connected...');
  }

  getPosts(){
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
      .map(res => res.json());
  }

}
