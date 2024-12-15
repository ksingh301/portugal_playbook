import { Pencil, Save } from 'lucide-react';
import { useEditStore } from '../store/editStore';

export default function EditToggle() {
  const { isEditMode, toggleEditMode } = useEditStore();

  return (
    <button
      onClick={toggleEditMode}
      className="fixed bottom-4 right-4 z-50 bg-white shadow-lg rounded-full p-4 hover:bg-gray-50 transition-colors"
    >
      {isEditMode ? (
        <Save className="w-6 h-6 text-green-600" />
      ) : (
        <Pencil className="w-6 h-6 text-gray-600" />
      )}
    </button>
  );
}