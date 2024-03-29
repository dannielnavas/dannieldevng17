import { NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLinkWithHref } from '@angular/router';
import { IPost } from '@domain/shared/models/post.interface';
import { GoogleAnalyticsService } from '@domain/shared/services/google-analytics.service';

@Component({
  selector: 'app-posts',
  standalone: true,
  imports: [RouterLinkWithHref, NgOptimizedImage],
  templateUrl: './posts.component.html',
  styleUrl: './posts.component.scss',
})
export class PostsComponent {
  @Input() article!: IPost;

  constructor(private googleAnalyticsService: GoogleAnalyticsService) {}

  goToArticle(nameTitle: string, url: string): void {
    this.googleAnalyticsService.logEvent(
      'click',
      'articles',
      'go to article',
      nameTitle
    );
    // window.open(url, '_blank');
  }
}
