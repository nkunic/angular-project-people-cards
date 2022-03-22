import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleCardContainerComponent } from './container/people-card-container.component';
import { PeopleCardComponent } from './components/people-card/people-card.component';

import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faSquare, faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import {
  faSquare as farSquare,
  faCheckSquare as farCheckSquare,
} from '@fortawesome/free-regular-svg-icons';
import {
  faStackOverflow,
  faGithub,
  faMedium,
} from '@fortawesome/free-brands-svg-icons';

@NgModule({
  imports: [CommonModule],
  declarations: [PeopleCardContainerComponent, PeopleCardComponent],
  exports: [PeopleCardContainerComponent],
})
export class PeopleCardsModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(
      faSquare,
      faCheckSquare,
      farSquare,
      farCheckSquare,
      faStackOverflow,
      faGithub,
      faMedium
    );
  }
}
