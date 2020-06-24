import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabsComponent } from './components/tabs/tabs.component';
import { ListPageComponent } from './components/list-page/list-page.component';
import { SearchPageComponent } from './components/search-page/search-page.component';
import { DetailItemComponent } from './components/detail-item/detail-item.component';


const routes: Routes = [
  { path: 'tabs', component: TabsComponent, children: [
    { path: 'home', children: [
      { path: '', component: ListPageComponent },
      { path: ':id', component: DetailItemComponent },
    ]},
    { path: 'search', component: SearchPageComponent },
    { path: '', redirectTo: 'search', pathMatch: 'full' }
  ]},
  {
    path: '',
    redirectTo: 'tabs/home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
