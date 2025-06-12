import {Component} from '@angular/core';
import {FormBuilder, Validators} from "@angular/forms";
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";
import {MessageService} from "primeng/api";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });

  constructor(private fb: FormBuilder, private auth: AuthService, private router: Router,
              private messageService: MessageService) {
  }

  login() {
    const credentials = {
      username: this.form.get('username')?.value || '',
      password: this.form.get('password')?.value || '',
    };

    this.auth.login(credentials).subscribe({
      next: (res:any) => {
        localStorage.setItem('token', res.access_token);
        this.router.navigate(['/home']);
      },
      error: () => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Credenciales inválidas',
        });
      }
    });

  }
}
