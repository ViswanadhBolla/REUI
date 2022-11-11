import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ComplaintComponent } from './complaint/complaint.component';
import { Error404Component } from './error404/error404.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { GooglemapComponent } from './google-map/googlemap.component';
import { AddPropertyComponent } from './property/add-property/add-property.component';
import { PropertyDetailResolverService } from './property/property-detail/property-detail-resolver.service';
import { PropertyDetailComponent } from './property/property-detail/property-detail.component';
import { PropertyListComponent } from './property/property-list/property-list.component';
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserProfileResolverService } from './user/user-profile/user-profile-resolver.service';
import { UserProfileComponent } from './user/user-profile/user-profile.component';
import { UserRegisterComponent } from './user/user-register/user-register.component';
import { WishlistComponent } from './wishlist/wishlist.component';

const routes: Routes = [
  {path:'',component:PropertyListComponent},
  {path:'rent-property',component:PropertyListComponent},
  {path:'add-property',component:AddPropertyComponent},
  {path:'property-detail/:id',component:PropertyDetailComponent, resolve:{'prp':PropertyDetailResolverService}},
  {path:'user/login',component:UserLoginComponent},
  {path:'user/register',component:UserRegisterComponent},
  {path:"complaint",component:ComplaintComponent},
  {path:"about",component:AboutComponent},
  {path:"maps/:city",component:GooglemapComponent},
  {path:"maps",component:GooglemapComponent},
  {path:"wishlist",component:WishlistComponent},
  {path:"user/profile/:id",component:UserProfileComponent, resolve:{'usr':UserProfileResolverService}},
  {path:"forgotpassword",component:ForgotPasswordComponent},
  {path:'**',component:Error404Component},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
