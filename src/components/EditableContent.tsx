import { useRef, useEffect } from 'react';
import ContentEditable from 'react-contenteditable';
import sanitizeHtml from 'sanitize-html';
import { useEditStore } from '../store/editStore';

interface EditableContentProps {
  html: string;
  onChange?: (value: string) => void;
  className?: string;
  tagName?: string;
}

export default function EditableContent({
  html,
  onChange,
  className = '',
  tagName = 'div'
}: EditableContentProps) {
  const contentEditableRef = useRef<any>(null);
  const { isEditMode } = useEditStore();

  const handleChange = (evt: any) => {
    const sanitizedContent = sanitizeHtml(evt.target.value, {
      allowedTags: ['b', 'i', 'em', 'strong', 'br', 'p', 'span'],
      allowedAttributes: {}
    });
    onChange?.(sanitizedContent);
  };

  useEffect(() => {
    if (contentEditableRef.current) {
      contentEditableRef.current.el.current.contentEditable = isEditMode;
    }
  }, [isEditMode]);

  return (
    <ContentEditable
      ref={contentEditableRef}
      html={html}
      disabled={!isEditMode}
      onChange={handleChange}
      tagName={tagName}
      className={`${className} ${isEditMode ? 'hover:outline hover:outline-blue-500 hover:outline-2' : ''}`}
    />
  );
}