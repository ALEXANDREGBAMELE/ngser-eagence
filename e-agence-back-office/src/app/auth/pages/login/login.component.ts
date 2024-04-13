import { Component, OnInit } from '@angular/core';
import { SpinnerLoadingComponent } from '../../../shared/components/spinner-loading/spinner-loading.component';
import { Route, Router } from '@angular/router';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [SpinnerLoadingComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  //declaration de variable globale
  loading!: boolean;

  // constructor
  constructor(private router: Router) {

  }

  // OnInit
  ngOnInit(): void {
    this.loading = true;

    setTimeout(() => {
      this.loading = false
    }, 3000);

    initFlowbite();
  }

  goToIndexPage() {
    this.router.navigate(['index'])
  }




}
