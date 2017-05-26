import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { ArticlesModule } from './articles/articles.module';
import { TinyEditorModule } from './tiny-editor/tiny-editor.module';
import { FocusDerectiveModule } from './focus-derective/focus-derective.module';

import { routes } from './app.routes';

import { AppComponent } from './app.component';

import { TopBarComponent } from './top-bar/top-bar.component';
import { YoutubeWrapperComponent } from './youtube-wrapper/youtube-wrapper.component';
import { AboutComponent } from './about/about.component';
import { GapiService } from './services/gapi.service';
import { RestClientService } from './services/rest-client.service';

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
    FocusDerectiveModule,
  ],
  providers: [GapiService, RestClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
