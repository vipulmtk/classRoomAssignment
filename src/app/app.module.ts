import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ControlButtonsComponent } from './control-buttons/control-buttons.component';
import { ProductComponent } from './product/product.component';
import {appFetchDataService} from './Services/appFetch-data.service';
import { ModifyoptionsComponent } from './modifyoptions/modifyoptions.component';

@NgModule({
  declarations: [
    AppComponent,
    ControlButtonsComponent,
    ProductComponent,
    ModifyoptionsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [appFetchDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
