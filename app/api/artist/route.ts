import { NextResponse } from 'next/server'
import {searchAlbums,getSuggestions,Artist,listMusicsFromAlbum,getArtist,searchArtists,searchMusics} from 'node-youtube-music'
// const YTMusic = require("ytmusic-api").default
import YTMusic,{SongFull} from 'ytmusic-api'

export async function GET(){
    console.log("Something is happening")
    try{
        // const albums = await searchAlbums('Human after all');
        // const albumSongs = await listMusicsFromAlbum(albums[0].albumId as string);
        // const ytmsc = new YTMusic()
        // const song = await ytmsc.search("Lilac")
        const musics = await searchMusics('Never gonna give you up');
        return NextResponse.json({musics},{status:200})
    }catch(e){
        return NextResponse.json({error:e},{status:400})
    }
}