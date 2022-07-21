import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rbac',
  templateUrl: './rbac.component.html',
  styleUrls: ['./rbac.component.scss'],
})
export class RbacComponent implements OnInit {
  snippet = {
    rbac: `export class Permissions {
  isUser: Observable<boolean>;
  isAdmin: Observable<boolean>

  constructor(private auth: Authentication, private db: DbService){
      this.isUser = auth.authState.map(state => !!state);
      this.isAdmin = auth.authState.switchMap(state => {
          return db.get(\`/admins/\${state.uid}\`).map(data => !!data)
      })
  }
}`,
  };

  constructor() {}

  ngOnInit(): void {}
}
