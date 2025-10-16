import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-page2',
  imports: [
    RouterModule
  ],
  template: `
    <div class="flex h-screen w-screen flex-col items-center justify-center bg-blue-500 gap-8">
      <h2 class="text-5xl font-bold text-white">This is Page 2</h2>
      <a
        routerLink="/layout"
        class="transform rounded-xl bg-blue-600 px-8 py-4 text-xl font-semibold text-white transition hover:scale-110 hover:bg-red-500">
        Back to Layout
      </a>
    </div>
  `,
  styles: ``
})
export class Page2 {

}
