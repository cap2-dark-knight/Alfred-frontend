import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    if (!this.hasCSRFCookie()) {
      const URL = '/common';
      const subscription = this.http.get(URL).subscribe(() => {
        console.log('Retreived CSRF token');
        subscription.unsubscribe();
      });
    }
  }

  hasCSRFCookie(): boolean {
    const name = 'csrftoken';
    if (document.cookie && document.cookie !== '') {
      const cookies = document.cookie.split(';');
      for (const c of cookies) {
        if (c.trim().substring(0, name.length + 1) === name + '=') {
          return true;
        }
      }
    }
    return false;
  }
}
