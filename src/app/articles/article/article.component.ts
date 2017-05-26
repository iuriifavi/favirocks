import { Component, OnInit, Input } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Article } from '../article.model'

import { ArticlesService } from '../articles.service';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html'
})
export class ArticleComponent implements OnInit {

  article;

  constructor(protected route: ActivatedRoute) {
  }

  ngOnInit() {
    this.article = this.route.snapshot.data['article'];
  }

  get creationDate() {
      return new Date(this.article.created_at).toDateString();
  }
}
