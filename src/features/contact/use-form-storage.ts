import { useState } from 'react';
import { z } from 'zod';
import { contactSchema } from './contact-schema';

export type FormData = z.infer<typeof contactSchema>
type StoredFormData = Omit<FormData, 'message'>;

const STORAGE_KEY = 'contact_form_data';

export function useFormStorage() {
  const [formData, setFormData] = useState<FormData>(() => {
    if (typeof window === 'undefined') return {} as FormData;
    
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? { ...JSON.parse(saved), message: '' } : {} as FormData;
  });

  const updateFormData = (data: Partial<FormData>) => {
    setFormData(prev => {
      const newData = { ...prev, ...data };
      const storedData: StoredFormData = { ...newData };
      delete (storedData as any).message;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(storedData));
      return newData;
    });
  };

  const clearFormData = () => {
    localStorage.removeItem(STORAGE_KEY);
    setFormData({} as FormData);
  };

  return {
    formData,
    updateFormData,
    clearFormData
  };
}
