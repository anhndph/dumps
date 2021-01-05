import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasicComponent } from './basic/basic.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { ErrorComponent } from './error/error.component';
import { HelperClassesComponent } from './helper-classes/helper-classes.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NoHeaderComponent } from './no-header/no-header.component';
import { SidemenuComponent } from './sidemenu/sidemenu.component';


const routes: Routes = [
	{ path: 'login', component: LoginComponent },
	{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
	{
		path: '', component: DashboardComponent, children: [
			{ path: 'dashboard', component: HomeComponent },
			{
				path: 'employee-manage', children: [
					{ path: 'list', component: EmployeeListComponent }
				]
			}
		]
	},

	{ path: '404', component: ErrorComponent },
	{ path: '**', redirectTo: '/404', pathMatch: 'full' }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
