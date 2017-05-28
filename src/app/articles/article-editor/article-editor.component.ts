import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ArticlesService } from '../articles.service';

import { Article } from '../article.model'

@Component({
  selector: 'article-editor',
  templateUrl: './article-editor.component.html'
})
export class ArticleEditorComponent implements OnInit {
  @Input() article: Article;
  
  constructor(protected route: ActivatedRoute, protected articlesService: ArticlesService) {
  }

  get creationDate() {
      return new Date(this.article.created_at).toDateString();
  }

  ngOnInit() {
    this.article = new Article(this.route.snapshot.data['article']);
  }

  nameChanged(event) {
    this.articlesService.updateArticle(this.article).subscribe(article => this.article = new Article (article));
  }

  authorChanged(event) {
    this.articlesService.updateArticle(this.article).subscribe(article => this.article = new Article (article));
  }

  textChanget(event) {
    this.articlesService.updateArticle(this.article).subscribe(article => this.article = new Article (article));
  }

}
