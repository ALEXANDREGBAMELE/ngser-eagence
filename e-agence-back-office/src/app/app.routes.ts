import { Routes } from '@angular/router';
import { IndexComponent } from './core/pages/index/index.component';
import { UsersComponent } from './core/pages/users/users.component';
import { LoginComponent } from './auth/pages/login/login.component';

export const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: "index",
        component: IndexComponent,
        children: [
            {
                path: '',
                component: UsersComponent,
            }
        ]
    },
];
