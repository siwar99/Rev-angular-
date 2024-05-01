import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TaskComponent } from './component/task/task.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProjectComponent } from './component/project/project.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    NavbarComponent,
    ProjectComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
