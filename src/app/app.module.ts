import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { MusicContentComponent } from './music-content/music-content.component';
import { HeadersInterceptor } from './_interceptors/headers.interceptor';
import { RecentComponent } from './library/recent/recent.component';
import { FavouritesComponent } from './library/favourites/favourites.component';
import { LocalComponent } from './library/local/local.component';
import { CreateNewComponent } from './playlist/create-new/create-new.component';
import { DesignFlowComponent } from './playlist/design-flow/design-flow.component';
import { LibraryAlbumsComponent } from './library/library-albums/library-albums.component';
// import { MusicGenresComponent } from './music-genres/music-genres.component';
// import { MusicAlbumsComponent } from './music-albums/music-albums.component';
// import { MusicArtistsComponent } from './music-artists/music-artists.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    TopBarComponent,
    MusicContentComponent,
    RecentComponent,
    FavouritesComponent,
    LocalComponent,
    CreateNewComponent,
    DesignFlowComponent,
    LibraryAlbumsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: HeadersInterceptor, multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
