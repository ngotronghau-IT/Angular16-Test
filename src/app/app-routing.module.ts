import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DangnhapComponent } from './dangnhap/dangnhap.component';
import { DangkyComponent } from './dangky/dangky.component';
import { DoipassComponent } from './doipass/doipass.component';
import { DownloadComponent } from './download/download.component';
import { baoveGuard } from './baove.guard';
const routes: Routes = [
  { path:'', component:HomeComponent},
  { path:'dangnhap', component:DangnhapComponent},
  { path:'dangky', component:DangkyComponent},
  { path:'doipass', 
    component:DoipassComponent, 
    canActivate:[baoveGuard], },  
  { path:'download', 
    component:DownloadComponent, 
    canActivate:[baoveGuard], }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
