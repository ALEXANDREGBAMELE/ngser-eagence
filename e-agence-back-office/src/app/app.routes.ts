import { Routes } from '@angular/router';
import { IndexComponent } from './core/pages/index/index.component';
import { UsersComponent } from './core/pages/users/users.component';
import { LoginComponent } from './auth/pages/login/login.component';
import { NotFoundComponent } from './shared/pages/not-found/not-found.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'index',
        component: IndexComponent,
        children: [
            {
                path: '',
                redirectTo: 'users',
                pathMatch: 'full'
            },
            {
                path: 'users',
                component: UsersComponent
            }
        ]
    },
    {
        path: '**', // wildcard route for any other path
        component: NotFoundComponent
    }
];
