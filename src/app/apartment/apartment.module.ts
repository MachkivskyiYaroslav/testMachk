import {NgModule} from '@angular/core';
import {MainComponent} from './components/main/main.component';
import {RouterModule, Routes} from '@angular/router';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {GetAllService} from './services/get-all.service';
import {HttpClientModule} from '@angular/common/http';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';


const routes: Routes = [
  {path: '', component: MainComponent}
];

@NgModule({
  declarations: [
    MainComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [GetAllService],
  bootstrap: [MainComponent]
})
export class ApartmentModule {
}
