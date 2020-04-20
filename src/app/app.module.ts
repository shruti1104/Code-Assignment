import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatCardModule} from '@angular/material/card';
import { MatDividerModule} from '@angular/material/divider';
import { MatPaginatorModule} from '@angular/material/paginator';
import { MatChipsModule} from '@angular/material/chips';
import { NgxPaginationModule} from 'ngx-pagination';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { SortArrayPipe } from './sort-array.pipe';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent, //Home Component
    SortArrayPipe  //Custom Pipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatInputModule,
    MatToolbarModule,
    MatCardModule,
    MatDividerModule,
    HttpClientModule,
    MatPaginatorModule,
    NgxPaginationModule,
    FormsModule,
    MatChipsModule,
    MatButtonModule,
    MatIconModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
