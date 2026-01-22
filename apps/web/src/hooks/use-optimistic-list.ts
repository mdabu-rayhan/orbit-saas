import { useState } from 'react';

export function useOptimisticList<T>(initialData: T[]) {
  const [data, setData] = useState(initialData);

  return { data, setData };
}
