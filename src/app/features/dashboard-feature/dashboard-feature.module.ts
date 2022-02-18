import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SalesComponent} from './components/sales/sales.component';
import {UsersComponent} from './components/users/users.component';
import {DashboardRoutingModule} from './dashboard-routing.module';


@NgModule({
            declarations: [
              SalesComponent,
              UsersComponent
            ],
            imports: [
              CommonModule,

              DashboardRoutingModule,
            ]
          })
export class DashboardFeatureModule {}
