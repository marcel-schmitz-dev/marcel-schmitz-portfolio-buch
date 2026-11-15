import { Component, computed, input, output } from '@angular/core';
import { IntroKind } from '../../content/portfolio.config';
import { CoverPage } from '../cover-page/cover-page';
import { HeroPage } from '../hero-page/hero-page';
import { PageIntro } from '../page-intro/page-intro';
import { AboutFacts } from '../about-facts/about-facts';
import { SkillsGrid } from '../skills-grid/skills-grid';
import { ProjectsSection } from '../projects-section/projects-section';
import { ContactForm } from '../contact-form/contact-form';
import { ThanksPage } from '../thanks-page/thanks-page';

const KINDS: IntroKind[] = ['about', 'skills', 'projects', 'contact'];

/** Rendert den Inhalt einer einzelnen Buchseite (Doppelseite `spread`, Seite `side`). */
@Component({
  selector: 'app-page-content',
  imports: [CoverPage, HeroPage, PageIntro, AboutFacts, SkillsGrid, ProjectsSection, ContactForm, ThanksPage],
  template: `
    @if (spread() === 0) {
      @if (side() === 'left') { <app-cover-page /> } @else { <app-hero-page (more)="navigate.emit(1)" /> }
    } @else if (spread() === 5) {
      <app-thanks-page [side]="side()" (restart)="navigate.emit(0)" />
    } @else if (side() === 'left') {
      <app-page-intro [kind]="kind()" />
    } @else {
      @switch (spread()) {
        @case (1) { <app-about-facts /> }
        @case (2) { <app-skills-grid /> }
        @case (3) { <app-projects-section /> }
        @default { <app-contact-form /> }
      }
    }
  `,
  styles: ':host { display: block; height: 100%; position: relative; z-index: 1; }',
})
export class PageContent {
  readonly spread = input.required<number>();
  readonly side = input.required<'left' | 'right'>();
  /** Eine Seite möchte zu einer anderen Doppelseite blättern. */
  readonly navigate = output<number>();
  protected readonly kind = computed(() => KINDS[this.spread() - 1]);
}
