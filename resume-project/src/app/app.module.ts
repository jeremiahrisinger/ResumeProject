import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { MenuDropdownComponent } from './components/menu-dropdown/menu-dropdown.component';
import { SectionHeadingComponent } from './components/section-heading/section-heading.component';
import { SectionComponent } from './components/section/section.component';
import { SectionParagraphComponent } from './components/section-paragraph/section-paragraph.component';
import { SectionBulletListComponent } from './components/section-bullet-list/section-bullet-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuDropdownComponent,
    SectionHeadingComponent,
    SectionComponent,
    SectionParagraphComponent,
    SectionBulletListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatExpansionModule,
    MatButtonModule,
    MatIconModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
