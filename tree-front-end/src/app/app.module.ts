import { HttpModule, Http } from '@angular/http';
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
import { LoginComponent } from './login/login.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { RouterModule, Routes } from '@angular/router';
import { ResourceNotFoundComponent } from './resource-not-found/resource-not-found.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ServerHttpInterceptor } from './core/http.interceptor';
import { AppServices } from './core/services';

const appRoutes: Routes = [
  { path: '', component: MainPageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'tree', component: TreeViewVerticalComponent},
  { path: '**', component: ResourceNotFoundComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    NavPanelComponent,
    TreeViewHorizontalComponent,
    TreeViewVerticalComponent,
    LoginComponent,
    ResourceNotFoundComponent,
    MainPageComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes, { enableTracing: false }),
    BrowserModule,
    NgbModule.forRoot(),
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    HttpModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: ServerHttpInterceptor,
    multi: true
  }, AppServices],
  bootstrap: [AppComponent]
})
export class AppModule { }
