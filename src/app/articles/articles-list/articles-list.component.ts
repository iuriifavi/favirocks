import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../articles.service';
import { Article } from '../article.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html'
})
export class ArticlesListComponent implements OnInit {
  articles;

  nextPage() {
    ;
  }

  constructor(protected route: ActivatedRoute, protected articlesService: ArticlesService) {
    this.articles = this.route.snapshot.data['articles'];
  }

  ngOnInit() {
  }

}
