import Image from 'next/image'
import {ThumbUpIcon} from '@heroicons/react/outline'

const Thumbnail = ({data}) => {        
    const IMG_URL = "https://image.tmdb.org/t/p/original";
    const myLoader=({src})=>{
        return `${IMG_URL}${data.backdrop_path || data.poster_path}`|| `${IMG_URL}${data.backdrop_path}`;
    }
    return (
        <div className="group">                 
            <Image loader={myLoader} src={
                `${IMG_URL}${data.backdrop_path || data.poster_path}`|| `${IMG_URL}${data.backdrop_path}`
            } alt="gambar" width={1920} height={1080} layout="responsive" className="p-2 transition-all duration-200 ease-in transform cursor-pointer sm:group-hover:scale-105 hover:z-50"/>
            <div className="p-2">
                <p className="max-w-md truncate">{data.overview}</p>
                <h2 className="mt-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold">{data.title || data.original_name}</h2>
                <p className="flex items-center opacity-0 group-hover:opacity-100">
                    {data.release_date || `${data.first_air_date} `}{" "}
                    <ThumbUpIcon className="h-5 mx-2"/>                        
                    {data.vote_count}
                </p>
            </div>
        </div>
    )
}

export default Thumbnail