import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { TinyEditorModule } from '../tiny-editor';
import { EditableLabelModule } from '../editable-label';

import { ArticlesService, ArticlesResolver, ArticleResolver } from './articles.service';

import { articlesRoutes } from './articles.routes';

import { ArticlesComponent } from './articles.component';

import { ArticleComponent } from './article';
import { ArticlesListComponent } from './articles-list';
import { ArticlesPreviewComponent } from './article-preview';
import { ArticleEditorComponent } from './article-editor';

@NgModule({
  imports: [
    CommonModule,
    TinyEditorModule,
    EditableLabelModule,
    FormsModule,
    RouterModule.forChild(articlesRoutes)
  ],
  exports: [
    RouterModule
  ],
  providers: [ArticlesService, ArticlesResolver, ArticleResolver],
  declarations: [
    ArticlesComponent,
    ArticleComponent,
    ArticlesListComponent,
    ArticlesPreviewComponent,
    ArticleEditorComponent
  ],
  bootstrap: [ArticlesComponent]
})

export class ArticlesModule { }
