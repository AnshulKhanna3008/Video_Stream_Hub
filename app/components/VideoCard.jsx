import Link from "next/link"
import Image from "next/image"


const VideoCard = ({ video }) => {
    return (
        <>
            <Link href={`/videos/${video.id}`} className="max-w-full sm:max-w-sm md:max-w-md lg:max-w-lg rounded overflow-hidden m-4 transition-transform transform hover:scale-105">
                <Image
                    width={192}
                    height={192}
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-48 object-cover" />
                <div className="p-4">
                    <h2 className="font-bold text-lg mb-4 truncate">{video.title}</h2>
                    <p className="text-gray-600 text-sm mb-2 truncate">{video.channel}</p>
                    <p className="text-gray-500 text-sm mb-2">{video.views} views * {video.uploadedAt}</p>
                    {/* <p>{video.description} </p> */}
                </div>
            </Link>
        </>
    )
}

export default VideoCard