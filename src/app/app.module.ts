import { BrowserModule } from '@angular/platform-browser';
import { NgModule ,CUSTOM_ELEMENTS_SCHEMA ,NO_ERRORS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { routing } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentDetailsComponent } from './studends/student-details/student-details.component';
import { HeaderComponent } from './header/header.component';
import { StudentService} from './services/student.service';


@NgModule({
  declarations: [
    AppComponent,
    StudentDetailsComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule
  ],
  schemas: [  CUSTOM_ELEMENTS_SCHEMA,NO_ERRORS_SCHEMA ],
  providers: [StudentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
