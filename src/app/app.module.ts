  import { AgmCoreModule } from '@agm/core';
  import { NgModule } from '@angular/core';
  import { BrowserModule } from '@angular/platform-browser';
  import { AppRoutingModule } from './app-routing.module';
  import { AppComponent } from './app.component';
  import { HttpClientModule } from '@angular/common/http';
  import { FormsModule } from '@angular/forms';

  @NgModule({
    declarations: [
      AppComponent
    ],
    imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      FormsModule,
      AgmCoreModule.forRoot({
        apiKey: 'AIzaSyASD69tm9IJUymQ6N7CfR6C30dnLgMroKA'
      })
    ],
    providers: [],
    bootstrap: [AppComponent]
  })
  export class AppModule { }
