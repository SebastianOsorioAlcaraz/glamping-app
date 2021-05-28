import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { CalendarioComponent } from './calendario/calendario.component';
import {MatNativeDateModule} from '@angular/material/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import { DesplegableComponent } from './desplegable/desplegable.component';
import { PostalComponent } from './postal/postal.component';


@NgModule({
  declarations: [
    AppComponent,
    CalendarioComponent,
    DesplegableComponent,
    PostalComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
