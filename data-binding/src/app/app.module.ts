import { MeuFormModule } from './meu-form/meu-form.module';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { TooltipModule } from 'ngx-bootstrap/tooltip';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { InputPropertyComponent } from './input-property/input-property.component';
import { OutputPropertyComponent } from './output-property/output-property.component';
import { CicloComponent } from './ciclo/ciclo.component';

@NgModule({
  declarations: [AppComponent, DataBindingComponent, InputPropertyComponent, OutputPropertyComponent, CicloComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TooltipModule.forRoot(),
    FormsModule,
    MeuFormModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
