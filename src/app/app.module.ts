import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { PeopleCardsModule } from './people-cards/people-cards.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [BrowserModule, FormsModule, PeopleCardsModule, FontAwesomeModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}