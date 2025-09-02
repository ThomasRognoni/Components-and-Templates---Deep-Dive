import { Component } from '@angular/core';

@Component({
  selector: 'button[appButton], a[appButton]', // Attribute selector, must be a <button> with appButton attribute
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {}

