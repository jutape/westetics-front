import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { FilesSelectComponent } from './pages/files-select/files-select.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormComponent } from './pages/form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FilesSelectComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
