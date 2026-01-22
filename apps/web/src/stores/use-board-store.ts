import { create } from 'zustand';

interface BoardStore {
  columns: any[];
  tasks: any[];
  isDragging: boolean;
}

export const useBoardStore = create<BoardStore>((set) => ({
  columns: [],
  tasks: [],
  isDragging: false,
}));
