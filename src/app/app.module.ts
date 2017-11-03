import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { ArticlesModule } from './articles';
import { TinyEditorModule } from './tiny-editor';
import { FocusDirectiveModule } from './focus-directive';
import { OutsideClickDirectiveModule } from './outside-click-directive';

import { routes } from './app.routes';

import { AppComponent } from './app.component';

import { TopBarComponent } from './top-bar';
import { TiltPanSurfaceModule } from './tilt-pan-surface';
import { YoutubeWrapperComponent } from './youtube-wrapper/youtube-wrapper.component';
import { AboutComponent } from './about/about.component';
import { RestClientService, GapiService } from './services';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    YoutubeWrapperComponent,
    AboutComponent,
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    FormsModule,
    HttpModule,
    ArticlesModule,
    TinyEditorModule,
    TiltPanSurfaceModule,
    FocusDirectiveModule,
    OutsideClickDirectiveModule,
  ],
  providers: [GapiService, RestClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
