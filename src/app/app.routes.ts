import { Routes } from '@angular/router';

import { AboutComponent } from './about/about.component'
import { YoutubeWrapperComponent } from './youtube-wrapper/youtube-wrapper.component'
import { ArticlesComponent } from './articles/articles.component'

export const routes: Routes = [
  { path: '', component: AboutComponent },
  { path: 'articles', component: ArticlesComponent},
  { path: 'youtube', component: YoutubeWrapperComponent }
];