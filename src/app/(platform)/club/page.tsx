import ClubCard from '@/components/platform/club/card'
import { club } from '@/components/platform/club/constant'
import Link from 'next/link'
import React from 'react'

const Club = () => {
  return (
    <div>
      <h2>الامانات</h2>
      <p className='font-light'>اختر مكان واحترق حيث انتهيت</p>
      <div className="grid grid-cols-5 gap-8 pt-8">
        {club.map((club, index) => (
          <div key={index}>
            <Link href={`/club/${club.id}`}>
              <ClubCard icon={club.icon} label={club.label} id={club.id} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Club