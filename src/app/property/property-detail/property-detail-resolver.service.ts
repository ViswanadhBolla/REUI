import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';
import { Property } from 'src/app/models/Property';
import { HousingService } from 'src/app/services/housing.service';

@Injectable({
  providedIn: 'root'
})
export class PropertyDetailResolverService implements Resolve<any>{

constructor(private housingService: HousingService, private router:Router) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Property | Observable<any> | Promise<any> {
    const propId = route.params['id']

    return this.housingService.getProperty(+propId).pipe(
      catchError(error=>{
        console.log(error)
        return of(null)
      })
    )
  }

}
