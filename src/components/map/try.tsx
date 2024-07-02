// components/StaticMap.tsx
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface StaticMapProps {
  lat: number;
  lng: number;
  zoom?: number;
  width?: number;
  height?: number;
}

const StaticMap: React.FC<StaticMapProps> = ({ lat, lng, zoom = 15, width = 100, height = 300 }) => {
  const mapUrl = `https://static-maps.yandex.ru/1.x/?ll=${lng},${lat}&z=${zoom}&size=${width},${height}&l=map`;

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;

  // Log the mapUrl to the console for debugging
  console.log("Static Map URL:", mapUrl);

  return (
    <Link href={googleMapsUrl} target="_blank" rel="noopener noreferrer">
      <Image 
        src={mapUrl} 
        alt="Map" 
        width={width} 
        height={height} 
        onError={(e) => {
          e.currentTarget.src = '/path/to/fallback-image.jpg'; // Provide a fallback image path
        }} 
      />
    </Link>
  );
};

export default StaticMap;
