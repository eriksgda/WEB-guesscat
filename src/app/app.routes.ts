import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { GameComponent } from './pages/game/game.component';
import { authguardGuard } from './services/guard/authguard.guard';
import { reverseAuthguardGuard } from './services/guard/reverse-authguard.guard';

export const routes: Routes = [
    {
        path:"login",
        component: LoginComponent,
        canActivate: [reverseAuthguardGuard]
    },
    {
        path:"signup",
        component: SignupComponent,
        canActivate: [reverseAuthguardGuard]
    },
    {
        path:"game",
        component: GameComponent,
        canActivate: [authguardGuard]
    },
    { path: "", redirectTo: "/login", pathMatch: "full" },
    { path: "**", redirectTo: "/login" }
];
