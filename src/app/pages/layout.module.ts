import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { PagesRoutingModule } from './pages-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { LayoutModule as MatLayoutModule } from '@angular/cdk/layout';
import {MatMenuModule} from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { HeaderComponent } from './layout/components/header/header.component';
import { NotificationComponent } from './layout/components/header/components/notification/notification.component';
import { SearchComponent } from './layout/components/header/components/search/search.component';


@NgModule({
  declarations: [
    HeaderComponent,
    LayoutComponent,
    NotificationComponent,
    SearchComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatListModule,
    MatIconModule,
    MatLayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    PagesRoutingModule,
    MatMenuModule,
    MatSelectModule
  ],
})
export class LayoutModule { }
