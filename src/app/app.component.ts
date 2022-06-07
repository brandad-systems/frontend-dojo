import {Component, HostBinding} from '@angular/core';
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  @HostBinding('class') className = '';
  toggleControl = new FormControl(false);

  ngOnInit(): void {
    this.toggleControl.valueChanges.subscribe((darkMode) => {
      const darkClassName = 'my-dark-theme';
      this.className = darkMode ? darkClassName : '';
    });
  }
}
