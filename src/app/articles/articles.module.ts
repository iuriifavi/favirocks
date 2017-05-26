import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { TinyEditorModule } from '../tiny-editor/tiny-editor.module';
import { EditableLabelModule } from '../editable-label/editable-label.module';

import { ArticlesService, ArticlesResolver, ArticleResolver } from './articles.service';

import { articlesRoutes } from './articles.routes';

import { ArticlesComponent } from './articles.component';

import { ArticleComponent } from './article/article.component';
import { ArticlesListComponent } from './articles-list/articles-list.component';
import { ArticlesPreviewComponent } from './articles-preview/articles-preview.component';
import { ArticleEditorComponent } from './article-editor/article-editor.component';

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
