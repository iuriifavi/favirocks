import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router'
import { Http } from '@angular/http'
import { Observable } from 'rxjs/Observable';

import { RestClientService } from '../services/rest-client.service'
import { Article } from './article.model'

@Injectable()
export class ArticlesService {
  restClientService: RestClientService

  constructor(protected http: Http) {
    this.restClientService = new RestClientService(http, "http://favi.rocks:3000/articles")
  }

  getAllArticles(skip?: Number, limit?: Number): Observable<Article[]> {
    let params = {skip: skip || 0, limit: limit || 0};
    return this.restClientService.get(null, params);
  }

  getArticle(id): Observable<Article> {
    return this.restClientService.get(id);
  }

  updateArticle(article: Article): Observable<Article>{
    return this.restClientService.put(article, article._id);
  }
}

@Injectable()
export class ArticlesResolver implements Resolve<Article[]> {
  constructor(private articlesService: ArticlesService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Article[]> {
    return this.articlesService.getAllArticles(route.params.skip, route.params.limit);
  }
}

@Injectable()
export class ArticleResolver implements Resolve<Article> {
  constructor(private articlesService: ArticlesService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Article> {
    return this.articlesService.getArticle(route.params.id);
  }
}

