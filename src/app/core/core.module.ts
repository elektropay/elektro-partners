import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// Pages
import { HomeComponent } from './routes/home/home.component';
import { AboutComponent } from './routes/about/about.component';

// Components
import { ExampleComponent } from './components/example/example.component';

@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ExampleComponent
  ],
  imports: [CommonModule, RouterModule],
  exports: [RouterModule]
})
export class CoreModule { }
