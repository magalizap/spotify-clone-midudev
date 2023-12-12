import { allPlaylists, songs as allsongs} from "@/lib/data";

export async function GET({params, request}) {
    // get the id from the url search params
    const { url } = request
    const urlObject = new URL(url)
    const id = urlObject.searchParams.get('id')

    const playlist = allPlaylists.find((playlist) => playlist.id === id)
    const songs = allsongs.filter(song => song.albumId === playlist?.albumId)

    return new Response(JSON.stringify({playlist, songs}), {
        headers: {"content-type": "application/json"}
    })
}

// PROBAR DESDE ACÁ LLAMAR A LA API DE SPOTIFY

/**
 *  OTRA FORMA DE LLAMAR AL ID DESDE LA URL (método nativo - desestructuración de cód)
 *     const [, queryString] = url.split("?")
    const searchParams = new URLSearchParams(queryString)
 */