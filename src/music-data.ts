type TopArtisteProps = {
    cover_photo: string;
    artist_name: string;
    total_stream_count: string;
}
type TopChartProps = {
    cover_photo: string;
    track_title: string;
    artiste_name: string;
}
export interface MusicDataProps {
    top_artistes: TopArtisteProps[];
    genres: string[];
    top_charts: TopChartProps[]
}

export const music_data: Array<MusicDataProps> = [{
    top_artistes: [
        { cover_photo: '', artist_name: 'travis scott', total_stream_count: '44M' },
        { cover_photo: '', artist_name: 'billie eillish', total_stream_count: '203M' },
        { cover_photo: '', artist_name: 'this kid', total_stream_count: '60M' },
        { cover_photo: '', artist_name: 'Kanye', total_stream_count: '15M' },
        { cover_photo: '', artist_name: 'Nicki Minaj', total_stream_count: '180M' },
        { cover_photo: '', artist_name: 'Starboy', total_stream_count: '100M' },
        { cover_photo: '', artist_name: 'Wizkid', total_stream_count: '150M' },
        { cover_photo: '', artist_name: 'Burna Boy', total_stream_count: '143M' },
        { cover_photo: '', artist_name: 'Davido', total_stream_count: '32M' },
    ],
    genres: ['Dance Beat', 'Electro Pop', 'Alternative Indie', 'Hip Hop', 'Classical period', 'Hip Hop Rap', 'Afrobeats', 'Pop'],
    top_charts: [
        { cover_photo: '', track_title: 'Jesus is king', artiste_name: 'kanye'},
        { cover_photo: '', track_title: 'Joro', artiste_name: 'wizkid'},
        { cover_photo: '', track_title: 'Havana', artiste_name: 'camila cabello'},
        { cover_photo: '', track_title: 'Closer', artiste_name: 'the chainsmokers'},
        { cover_photo: '', track_title: 'Lean On', artiste_name: 'major lazer ft dj snake'},
        { cover_photo: '', track_title: 'Last last', artiste_name: 'burna boy'},
        { cover_photo: '', track_title: 'Essence', artiste_name: 'wizkid'},
        { cover_photo: '', track_title: 'Ku lo sa', artiste_name: 'oxlade'},
        { cover_photo: '', track_title: 'adaugo', artiste_name: 'the cavemen'},
    ]
}]