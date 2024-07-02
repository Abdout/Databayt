'use client';
import React, { createContext, useContext, useEffect, useState } from 'react';

interface UploadContextProps {
  selectedImage: File | null;
  setSelectedImage: React.Dispatch<React.SetStateAction<File | null>>;
  previewUrl: string | null;
  setPreviewUrl: React.Dispatch<React.SetStateAction<string | null>>;
  uploading: boolean;
  setUploading: React.Dispatch<React.SetStateAction<boolean>>;
  handleImageUpload: () => Promise<void>;
  image: string | null;
  setImage: React.Dispatch<React.SetStateAction<string | null>>;
}

const UploadContext = createContext<UploadContextProps | undefined>(undefined);

export const useUpload = () => {
  const context = useContext(UploadContext);
  if (!context) {
    throw new Error('useImageUpload must be used within a ImageUploadProvider');
  }
  return context;
};

export const UploadProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [uploading, setUploading] = useState(false);
  const [image, setImage] = useState<string | null>(null);

  useEffect(() => {
    console.log('Image URL stored in state:', image);
  }, [image]);

  const handleImageUpload = async () => {
    console.log('handleImageUpload called');
    if (!selectedImage) {
      console.log('No image selected');
      return;
    }

    setUploading(true);

    const formData = new FormData();
    formData.append('file', selectedImage);
    formData.append('upload_preset', process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET!);

    try {
      console.log('Uploading image...');
      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
        {
          method: 'POST',
          body: formData,
        }
      );

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();

      console.log('Uploaded Image URL:', data.secure_url);
      setImage(data.secure_url); // Correct line
    } catch (error) {
      console.error('Error uploading image:', error);
    } finally {
      setUploading(false);
    }
  };

  return (
    <UploadContext.Provider
      value={{ selectedImage, setSelectedImage, previewUrl, setPreviewUrl, uploading, setUploading, handleImageUpload, image, setImage }}
    >
      {children}
    </UploadContext.Provider>
  );
};
