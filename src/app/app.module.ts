import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IonicModule } from '@ionic/angular';
import { TabsComponent } from './components/tabs/tabs.component';
import { SearchPageComponent } from './components/search-page/search-page.component';
import { ListPageComponent } from './components/list-page/list-page.component';
import { DetailItemComponent } from './components/detail-item/detail-item.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { LevelPipe } from './pipes/level/level.pipe';
import { ColorPipe } from './pipes/color/color.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    SearchPageComponent,
    ListPageComponent,
    DetailItemComponent,
    LevelPipe,
    ColorPipe,
  ],
  imports: [
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    IonicModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
