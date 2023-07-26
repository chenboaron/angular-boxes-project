import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlueBoxComponent } from './components/blue-box/blue-box.component';
import { OrangeBoxComponent } from './components/orange-box/orange-box.component';
import { YellowBoxComponent } from './components/yellow-box/yellow-box.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BlueBoxComponent,
    OrangeBoxComponent,
    YellowBoxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
