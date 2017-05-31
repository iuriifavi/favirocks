import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router'
import { Http } from '@angular/http'
import { Observable } from 'rxjs/Observable';

import { RestClientService } from '../services'
import { Article, ArticleInterface } from './article.model'

@Injectable()
export class ArticlesService {
  restClientService: RestClientService

  constructor(protected http: Http) {
    this.restClientService = new RestClientService("http://favi.rocks:3000/articles", http)
  }

  getAllArticles(skip?: Number, limit?: Number): Observable<ArticleInterface[]> {
    let params = {skip: skip || 0, limit: limit || 0};
    return this.restClientService.get(null, params);
  }

  getArticle(id): Observable<ArticleInterface> {
    return this.restClientService.get(id);
  }

  updateArticle(article: ArticleInterface): Observable<ArticleInterface>{
    return this.restClientService.put(article.updated, article._id);
  }
}

@Injectable()
export class ArticlesResolver implements Resolve<ArticleInterface[]> {
  constructor(private articlesService: ArticlesService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<ArticleInterface[]> {
    return this.articlesService.getAllArticles();
  }
}

@Injectable()
export class ArticleResolver implements Resolve<ArticleInterface> {
  constructor(private articlesService: ArticlesService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<ArticleInterface> {
    return this.articlesService.getArticle(route.params.id);
  }
}

