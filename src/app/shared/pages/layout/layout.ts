import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-layout',
  standalone: true, // ⚡️ si estás usando standalone components
  imports: [RouterModule],
  template: `
    <!-- Container que ocupa toda la pantalla -->
    <div
      class="animate-gradient flex h-screen w-screen flex-col items-center justify-center bg-gradient-to-r from-blue-900 via-blue-700 to-blue-500 bg-[length:200%_200%]">
      
      <!-- Texto -->
      <h1 class="mb-12 animate-bounce text-6xl font-bold text-white md:text-5xl">
        Hello, world this is the {{ title }} for Angular application!
      </h1>

      <!-- Botones -->
      <div class="flex gap-6">
        <a
          routerLink="/page1"
          class="transform rounded-xl bg-blue-600 px-8 py-4 text-xl font-semibold text-white transition hover:scale-110 hover:bg-blue-500">
          Ruta 1
        </a>
        <a
          routerLink="/page2"
          class="transform rounded-xl bg-blue-600 px-8 py-4 text-xl font-semibold text-white transition hover:scale-110 hover:bg-blue-500">
          Ruta 2
        </a>
      </div>
    </div>
  `,
  styles: ``,
})
export class Layout {
  readonly title = environment.title;
}
