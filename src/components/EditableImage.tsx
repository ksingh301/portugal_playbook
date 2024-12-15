import { useState } from 'react';
import { useEditStore } from '../store/editStore';

interface EditableImageProps {
  src: string;
  alt: string;
  className?: string;
  onChange?: (value: string) => void;
}

export default function EditableImage({
  src,
  alt,
  className = '',
  onChange
}: EditableImageProps) {
  const { isEditMode } = useEditStore();
  const [url, setUrl] = useState(src);
  const [isEditing, setIsEditing] = useState(false);

  const handleUrlChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onChange?.(url);
    setIsEditing(false);
  };

  if (isEditMode && isEditing) {
    return (
      <form onSubmit={handleSubmit} className="p-4 bg-white shadow rounded-lg">
        <input
          type="text"
          value={url}
          onChange={handleUrlChange}
          className="w-full p-2 border rounded mb-2"
          placeholder="Enter image URL"
        />
        <div className="flex gap-2">
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Save
          </button>
          <button
            type="button"
            onClick={() => setIsEditing(false)}
            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600"
          >
            Cancel
          </button>
        </div>
      </form>
    );
  }

  return (
    <div className="relative group">
      <img src={url} alt={alt} className={className} />
      {isEditMode && (
        <button
          onClick={() => setIsEditing(true)}
          className="absolute inset-0 w-full h-full bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white transition-opacity"
        >
          Edit Image
        </button>
      )}
    </div>
  );
}