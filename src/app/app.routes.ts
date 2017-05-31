import { Routes } from '@angular/router';

import { AboutComponent } from './about'
import { YoutubeWrapperComponent } from './youtube-wrapper/youtube-wrapper.component'
import { ArticlesComponent } from './articles'

export const routes: Routes = [
  { path: '', component: AboutComponent },
  { path: 'articles', component: ArticlesComponent},
  { path: 'youtube', component: YoutubeWrapperComponent }
];