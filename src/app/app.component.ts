import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NewCompComponent } from './new-comp/new-comp.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NewCompComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  // template: `<input type="text" />
  //   <h2>Marvellous Infosystem</h2>`,
  //   styles: `h2{
  //     color: blue;
  // }`,
})
export class AppComponent {
  title = 'assign6';
}
