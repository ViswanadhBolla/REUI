import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { IProperty } from '../models/IProperty';

@Injectable({
  providedIn: 'root'
})
export class WishlistService {
  myMethod$: Observable<any>;
    private myMethodSubject = new BehaviorSubject<any>(" ");

    constructor() {
        this.myMethod$ = this.myMethodSubject.asObservable();
    }

    myMethod(data) {
        console.log( "service called",data); // I have data! Let's return it so subscribers can use it!
        // we can do stuff with data if we want
        this.myMethodSubject.next(data);
    }



}
