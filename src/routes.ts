import { FavouritesComponent } from "./app/library/favourites/favourites.component";
import { LibraryAlbumsComponent } from "./app/library/library-albums/library-albums.component";
import { LocalComponent } from "./app/library/local/local.component";
import { RecentComponent } from "./app/library/recent/recent.component";
import { MusicAlbumsComponent } from "./app/music-albums/music-albums.component";
import { MusicArtistsComponent } from "./app/music-artists/music-artists.component";
import { MusicContentComponent } from "./app/music-content/music-content.component";
import { MusicGenresComponent } from "./app/music-genres/music-genres.component";
import { CreateNewComponent } from "./app/playlist/create-new/create-new.component";
import { DesignFlowComponent } from "./app/playlist/design-flow/design-flow.component";


type NavItems = {
    label: string,
    icon: string,
    path: string,
    linkActive: 'active',
    exact?: boolean
}
type SidebarProps = {
    label: string,
    navData: NavItems[]
}

export const sidebar: Array<SidebarProps> = [{
    label: 'Menu',
    navData: [
        { label: 'Explore', icon: 'bi bi-compass-fill', path: '', linkActive: 'active' , exact: true },
        { label: 'Genres', icon: 'bi bi-volume-down-fill', path: '/genres', linkActive: 'active' },
        { label: 'Albums', icon: 'bi bi-disc-fill', path: '/albums', linkActive: 'active'  },
        { label: 'Artists', icon: 'bi bi-mic', path: '/artists', linkActive: 'active'  },
    ]
},
{ 
    label: 'Library',
    navData: [
        { label: 'Recent', icon: 'bi bi-arrow-counterclockwise', path: '/recent', linkActive: 'active'},
        { label: 'Albums', icon: 'bi bi-disc-fill', path: '/library-album', linkActive: 'active' },
        { label: 'Favourites', icon: 'bi bi-heart-fill', path: '/favourites', linkActive: 'active' },
        { label: 'Local', icon: 'bi bi-folder-fill', path: '/local', linkActive: 'active' },
    ]
},
{
    label: 'Playlist',
    navData: [ 
        { label: 'Create New', icon: 'bi bi-file-plus-fill', path: '/create-new', linkActive: 'active' },
        { label: 'Design Flow', icon: 'bi bi-node-plus-fill', path: '/design-flow', linkActive: 'active' },
        { label: '9ja jams', icon: 'bi bi-music-note-beamed', path: '/9ja-jams', linkActive: 'active' },
    ]
}]




type TopbarProps = {
    label: string;
    path: string;
}

export const topbarlinks: Array<TopbarProps> = [{ label: "music", path: "/music" }, { label:"podcast", path: "/podcast" }, { label: "live", path: "/live" }];


export const appRoutes = [
    {
        path: '',
        component: MusicContentComponent
    },
    {
        path: 'genres',
        // loadChildren: () => import('./app/music-genres/music-genres.component').then(m => m.MusicGenresComponent)
        component: MusicGenresComponent
    },
    {
        path: 'albums',
        // loadChildren: () => import('./app/music-albums/music-albums.component').then(m => m.MusicAlbumsComponent)
        component: MusicAlbumsComponent
    },
    {
        path: 'artists',
        // loadChildren: () => import('./app/music-artists/music-artists.component').then(m => m.MusicArtistsComponent)
        component: MusicArtistsComponent
    },
    {
        path: 'recent',
        // loadChildren: () => import('./app/library/recent/recent.component').then(m => m.RecentComponent)
        component: RecentComponent
    },
    {
        path: 'favourites',
        // loadChildren: () => import('./app/library/favourites/favourites.component').then(m => m.FavouritesComponent)
        component: FavouritesComponent
    },
    {
        path: 'library-album',
        // loadChildren: () => import('./app/music-albums/music-albums.component').then(m => m.MusicAlbumsComponent)
        component: LibraryAlbumsComponent
    },
    {
        path: 'local',
        // loadChildren: () => import('./app/library/local/local.component').then(m => m.LocalComponent)
        component: LocalComponent
    },
    {
        path: 'create-new',
        // loadChildren: () => import('./app/playlist/create-new/create-new.component').then(m => m.CreateNewComponent)
        component: CreateNewComponent
    },
    {
        path: 'design-flow',
        // loadChildren: () => import('./app/playlist/design-flow/design-flow.component').then(m => m.DesignFlowComponent)
        component: DesignFlowComponent
    }
]