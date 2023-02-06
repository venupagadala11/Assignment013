import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { InputBoxComponent } from './header/input-box/input-box.component';
import { BodyComponent } from './body/body.component';
import { InputsService } from './inputs.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InputBoxComponent,
    BodyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule
  ],
  providers: [InputsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
