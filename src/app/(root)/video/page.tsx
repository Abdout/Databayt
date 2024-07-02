'use client';
import { useSearchParams } from 'next/navigation'
import Image from 'next/image';
import { media } from '@/components/root/video/constant';
import More from '@/components/root/video/more';



const VideoPage = () => {
  const searchParams = useSearchParams()
  const videoId = searchParams.get('videoId')
  const index = searchParams.get('index')

  if (!videoId || index === null) {
    return <p>Video ID or index not found</p>
  }

  const item = media[parseInt(index)]

  return (
    <div className='flex flex-col pt-6 pr-20' dir='rtl'>
      <div className='flex gap-2 text-4xl pb-2'>
        <h1 className='text-2xl'>{item.lineone}</h1>
        <h1 className='text-2xl'>{item.linetwo}</h1>
      </div>
      <p>{item.description}</p>
      <div className='flex gap-4 items-center py-6'>
        <div className='rounded-full overflow-hidden border w-12 h-12'>
          <Image
            src ={item.authorImage}
            alt={item.lineone}
            width={45}
            height={45}
            objectFit="contain"
          />
        </div>
        <div className='flex flex-col'>
          <p>{item.author}</p>
          <p>{item.date}</p>
        </div>
      </div>
      <hr className="border-t border-gray-500 mb-5 w-[700px]" />
      {/* Display the video using the videoId */}
      <iframe
        width="700"
        height="355"
        src={`https://www.youtube.com/embed/${videoId}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <More />
    </div>
  )
}

export default VideoPage