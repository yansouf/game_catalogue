import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InsertionComponent } from './insertion/insertion.component';
import { RouterModule } from '@angular/router';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    InsertionComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'insert', component: InsertionComponent},
      {path: 'list', component: ListComponent}
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
