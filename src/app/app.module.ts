import {  NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatCardModule } from "@angular/material/card";
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';



import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './Components/register/register.component';
import { LoginComponent } from './Components/login/login/login.component';
import { ForgetPasswordComponent } from './Components/forget-password/forget-password/forget-password.component';
import { ResetPasswordComponent } from './Components/reset-password/reset-password/reset-password.component';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './Components/dashboard/dashboard/dashboard.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatListModule} from '@angular/material/list';
import { ArchivenotesComponent } from './Components/Archivenotes/archivenotes/archivenotes.component';
import { DisplaynotesComponent } from './Components/displaynotes/displaynotes/displaynotes.component';
import { GetallnotesComponent } from './Components/getallnotes/getallnotes/getallnotes.component';
import { UpdatenotesComponent } from './Components/Updatenotes/updatenotes/updatenotes.component';
import { NoteiconComponent } from './Components/Noteicon/noteicon/noteicon.component';
import {MatDialogModule} from '@angular/material/dialog';
import { TrashnotesComponent } from './Components/trashnote/trashnotes/trashnotes.component';
import { TakeanoteComponent } from './Components/takeanote/takeanote/takeanote.component';
import { AuthguardServiceService } from './services/authguard-service.service';
import { SearchPipePipe } from './Pipe/search-pipe.pipe';



@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    ForgetPasswordComponent,
    ResetPasswordComponent,
    DashboardComponent,
    ArchivenotesComponent,
    DisplaynotesComponent,
    GetallnotesComponent,
    UpdatenotesComponent,
    NoteiconComponent,
    TrashnotesComponent,
    TakeanoteComponent,
    TakeanoteComponent,
    SearchPipePipe,
    
  
  ],

  imports: [
    BrowserModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatIconModule,
    AppRoutingModule,
    MatCardModule,
    MatMenuModule,
    MatDialogModule,
    HttpClientModule,
    MatSidenavModule,
    MatToolbarModule,
    FlexLayoutModule,
    FormsModule,
    MatListModule,
    BrowserAnimationsModule,
  ],
  providers: [AuthguardServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class FormFieldPrefixSuffixExample {
  hide = true;
}
