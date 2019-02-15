import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { UserService } from './user.service';


const appRoutes: Routes = [
  {
      path: 'signup',
      
      component: RegisterComponent
  },  
  {
    path: 'login',
    component: LoginComponent
  },
  {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  {
    path: '**', redirectTo:'signup', pathMatch: 'full'
  }
  ];

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [UserService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
