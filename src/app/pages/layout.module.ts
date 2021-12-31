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
import { SideNavComponent } from './layout/components/side-nav/side-nav.component';
import { UserImagComponent } from './layout/components/user-imag/user-imag.component';
import { LogoutComponent } from './layout/components/logout/logout.component';
import { NavListComponent } from './layout/components/nav-list/nav-list.component';
import { SearchBarComponent } from './layout/components/header/components/search-bar/search-bar.component';
import { ConfirmationDialogModule } from '../shared/modules/confirmation-dialog/confirmation-dialog.module';
import { SideTabsComponent } from './layout/components/header/components/side-tabs/side-tabs.component';


@NgModule({
  declarations: [
    HeaderComponent,
    LayoutComponent,
    NotificationComponent,
    SearchComponent,
    SideNavComponent,
    UserImagComponent,
    LogoutComponent,
    NavListComponent,
    SearchBarComponent,
    SideTabsComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatListModule,
    MatIconModule,
    MatMenuModule,
    MatLayoutModule,
    MatSelectModule,
    MatSidenavModule,
    MatToolbarModule,
    PagesRoutingModule,
    ConfirmationDialogModule
  ],
})
export class LayoutModule { }
