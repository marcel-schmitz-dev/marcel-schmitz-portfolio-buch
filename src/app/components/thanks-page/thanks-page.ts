import { Component, input, output } from '@angular/core';
import { PORTFOLIO } from '../../content/portfolio.config';

/** Abschluss-Doppelseite („Danke fürs Besuchen“). Links Gruß, rechts Links und Rückweg. */
@Component({
  selector: 'app-thanks-page',
  templateUrl: './thanks-page.html',
  styleUrl: './thanks-page.scss',
})
export class ThanksPage {
  readonly side = input.required<'left' | 'right'>();
  readonly restart = output<void>();

  protected readonly t = PORTFOLIO.thanks;
  protected readonly c = PORTFOLIO.contact;
}
