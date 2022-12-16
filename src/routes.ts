

type NavItems = {
    label: string,
    icon: string,
    path: string
}
type SidebarProps = {
    label: string,
    navData: NavItems[]
}

export const sidebar: Array<SidebarProps> = [{
    label: 'Menu',
    navData: [
        { label: 'Explore', icon: 'bi bi-compass-fill', path: '', },
        { label: 'Genres', icon: 'bi bi-volume-down-fill', path: '', },
        { label: 'Albums', icon: 'bi bi-disc-fill', path: '', },
        { label: 'Artists', icon: 'bi bi-mic', path: '', },
    ]
},
{ 
    label: 'Library',
    navData: [
        { label: 'Recent', icon: 'bi bi-arrow-counterclockwise', path: '' },
        { label: 'Albums', icon: 'bi bi-disc-fill', path: '', },
        { label: 'Favourites', icon: 'bi bi-heart-fill', path: '', },
        { label: 'Local', icon: 'bi bi-folder-fill', path: '', },
    ]
},
{
    label: 'Playlist',
    navData: [ 
        { label: 'Create New', icon: 'bi bi-file-plus-fill', path: '' },
        { label: 'Design Flow', icon: 'bi bi-node-plus-fill', path: '', },
        { label: 'Best of 2021', icon: 'bi bi-music-note-list', path: '', },
        { label: '9ja jams', icon: 'bi bi-music-note-beamed', path: '', },
    ]
}]




type TopbarProps = {
    label: string;
    path: string;
}

export const topbarlinks: Array<TopbarProps> = [{ label: "music", path: "" }, { label:"podcast", path: "" }, { label: "live", path: "" }]