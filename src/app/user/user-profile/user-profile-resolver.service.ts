import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';
import { User } from 'src/app/models/user';
import { UserService } from 'src/app/services/user.service';

@Injectable({
  providedIn: 'root'
})
export class UserProfileResolverService implements Resolve<any>{

constructor(private userService:UserService, private router: Router) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): User | Observable<any> | Promise<any> {
    const id: number = +route.params['id']
    return this.userService.GetUserByID(id)
    .pipe(
      catchError(error=>{
        console.log(error)
        return of(null)
      })
    )

    return null

  }



}
