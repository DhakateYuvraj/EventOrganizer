import { Injectable } from '@angular/core';


@Injectable()
export class CommonProvider {

  constructor() {
    console.log('Hello CommonProvider Provider');
  }
    
  test(){
    alert(1);
  }

}
