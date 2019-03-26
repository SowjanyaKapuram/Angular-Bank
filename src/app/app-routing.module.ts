import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FundtransferComponent } from './fundtransfer/fundtransfer.component';
import { DepositComponent } from './deposit/deposit.component';
import { WithdrawalComponent } from './withdrawal/withdrawal.component';
import { SubmitComponent } from './submit/submit.component';
import { ExitComponent } from './exit/exit.component';

const routes: Routes = [
  {path:"navbar",component:NavbarComponent},
  {path:"login",component:LoginComponent},
  {path:"submit",component:SubmitComponent},
  {path:"register",component:RegisterComponent},
  {path:"fundtransfer",component:FundtransferComponent},
  {path:"deposit",component:DepositComponent},
  {path:"withdrawal",component:WithdrawalComponent},
  {path:"exit",component:ExitComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
