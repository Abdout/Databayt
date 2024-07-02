// components/ImageUpload.tsx
import React, { ChangeEvent, useEffect } from 'react'; // Added useEffect
import { Input } from '../ui/input';
import { useUpload } from './context';

const ImageUpload = () => {
  const { selectedImage, setSelectedImage, previewUrl, setPreviewUrl, uploading, handleImageUpload } = useUpload();

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => { // Removed async
    const file = event.target.files?.[0];
    if (file) {
      setSelectedImage(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  // Added useEffect
  useEffect(() => {
    if (selectedImage) {
      console.log('Selected image changed, starting upload...');
      handleImageUpload()
        .then(() => console.log('Image upload successful'))
        .catch((error) => console.error('Image upload failed', error));
    }
  }, [selectedImage]);

  return (
    <div className="relative w-40 h-32">
      <input type="file" id="file-input" onChange={handleImageChange} className="absolute w-full h-full opacity-0 cursor-pointer" />
      <label htmlFor="file-input" className="w-full h-full border  border-gray-400 flex items-center justify-center">
        {previewUrl ? <img src={previewUrl} alt="Image Preview" className="w-full h-full object-cover" /> : 'أرفق صورة'}
      </label>
    </div>
  );
};

export default ImageUpload;
