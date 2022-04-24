import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForgetPasswordComponent } from './Components/forget-password/forget-password/forget-password.component';
import { LoginComponent } from './Components/login/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { DashboardComponent } from './Components/dashboard/dashboard/dashboard.component';
import { ResetPasswordComponent } from './Components/reset-password/reset-password/reset-password.component';
// import { TakenoteComponent } from './Components/dashboard/Takenote/takenote/takenote.component';
import { DisplaynotesComponent } from './Components/displaynotes/displaynotes/displaynotes.component';
import { GetallnotesComponent } from './Components/getallnotes/getallnotes/getallnotes.component';
import { UpdatenotesComponent } from './Components/Updatenotes/updatenotes/updatenotes.component';
import { ArchivenotesComponent } from './Components/Archivenotes/archivenotes/archivenotes.component';
import { TrashnotesComponent } from './Components/trashnote/trashnotes/trashnotes.component';
import { TakeanoteComponent } from './Components/takeanote/takeanote/takeanote.component';
import { AuthenticationGuard } from './services/Authguard/authentication.guard';





const routes: Routes = [
  { path: '', redirectTo: "/login", pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {path:'register',component:RegisterComponent},
  {path:'forget-password',component:ForgetPasswordComponent},
  {path:'resetpassword/:token',component:ResetPasswordComponent},
  {path:'dashboard',component:DashboardComponent,canActivate:[AuthenticationGuard]},

  
  
  {path:'displaynotes',component:DisplaynotesComponent},
  {path:'Takenote',component:TakeanoteComponent},
  
  {path:'dashboard',component:DashboardComponent,
children:[{ path: '', redirectTo: "notes", pathMatch: "full" },
  {path:'notes',component:GetallnotesComponent},
{path:'archive',component:ArchivenotesComponent},
{path:'trash',component:TrashnotesComponent}]

},
  // {path:'delete',component:TrashnotesComponent},
  
  {path:'updatenotes',component:UpdatenotesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
