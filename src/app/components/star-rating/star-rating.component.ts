import { Component, Input  } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.scss'],
})
export class StarRatingComponent {

  @Input() rating: number = 0;

  getStarFill(index: number): number {
    const fill = this.rating - index;
    if (fill >= 1) return 100;
    if (fill > 0) return fill * 100;
    return 0;
  }

}
