import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '@app/shared/services/auth.service';
import { DialogService } from '@app/modules/dialog/services/dialog.service';
import { SpinnerComponent } from '@app/shared/components/spinner/spinner.component';

@Component({
  selector: 'msp-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  loginForm: FormGroup;
  isAnswer: boolean;

  constructor(
    private authService: AuthService,
    private router: Router,
    public dialog: DialogService) { }

  ngOnInit() {
    this.isAnswer = false;
    this.initLoginForm();
  }
  initLoginForm() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    });
  }

  submit() {
    this.dialog.open(SpinnerComponent);
    this.authService.login(this.loginForm.value).subscribe(
      res => {
        this.authService.auth(res.token);
        this.dialog.close();
        this.router.navigate(['/admin']);
      },
      err => {
        this.dialog.close();
      });
  }
}
