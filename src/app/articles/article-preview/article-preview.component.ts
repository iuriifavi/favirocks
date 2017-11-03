import { Component, OnInit, Input } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';

import { Article } from '../article.model'
import { ArticlesService } from '../articles.service';

@Component({
  selector: 'article-preview',
  templateUrl: './article-preview.component.html'
})

export class ArticlesPreviewComponent implements OnInit {
  @Input() article: Article

  constructor(protected router: Router, protected activatedRoute: ActivatedRoute, protected articlesService: ArticlesService) {
  }

  ngOnInit() {
  }

  get shortText() {
    if (this.article.text)
      return this.article.text.split('<hr>').slice(0,1).join('<br>') + "<br>...";
    else
      return ""
  }

}
