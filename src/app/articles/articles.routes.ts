import { Routes } from '@angular/router';

import { ArticlesResolver, ArticleResolver } from './articles.service';

import { ArticlesComponent } from './articles.component';

import { ArticleComponent } from './article/article.component';
import { ArticleEditorComponent } from './article-editor/article-editor.component';
import { ArticlesListComponent } from './articles-list/articles-list.component';

export const articlesRoutes: Routes = [
    {
        path: 'articles',
        component: ArticlesComponent,
        children: [
            { path: '',
              component: ArticlesListComponent,
              resolve: {
                articles: ArticlesResolver
              }
            },
            { path: ':id',
              component: ArticleComponent,
              resolve: {
                article: ArticleResolver
              },
            },
            { path: ':id/edit',
              component: ArticleEditorComponent,
              resolve: {
                article: ArticleResolver
              },
            },
        ],
    },
];