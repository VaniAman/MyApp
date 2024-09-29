import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './corefolder/header/header.component';
import { FooterComponent } from './corefolder/footer/footer.component';
import { SidebarComponent } from './corefolder/sidebar/sidebar.component';
import { DetailsComponent } from './corefolder/details/details.component';
import { AddComponent } from './corefolder/add/add.component';
import { EditComponent } from './corefolder/edit/edit.component';
import {MatIconModule} from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    DetailsComponent,
    AddComponent,
    EditComponent
  ],
  imports: [
    MatIconModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
