import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavPanelComponent } from './nav-panel/nav-panel.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { TreeViewHorizontalComponent } from './tree-view-horizontal/tree-view-horizontal.component';
import { TreeViewVerticalComponent } from './tree-view-vertical/tree-view-vertical.component';

@NgModule({
  declarations: [
    AppComponent,
    NavPanelComponent,
    TreeViewHorizontalComponent,
    TreeViewVerticalComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
