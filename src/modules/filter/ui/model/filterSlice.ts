import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { SortOrder } from '@/lib/definitions';

interface FilterState {
  role?: string;
  isArchive: boolean | null;
  sortOrder: SortOrder | null;
}

const initialState: FilterState = {
  role: '',
  isArchive: false,
  sortOrder: SortOrder.Default,
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setRole: (state, action: PayloadAction<string>) => {
      state.role = action.payload;
    },
    setIsArchive: (state, action: PayloadAction<boolean>) => {
      state.isArchive = action.payload;
    },
    setSortOrder: (state, action: PayloadAction<SortOrder>) => {
      state.sortOrder = action.payload;
    },
  },
});

export const { setRole, setIsArchive, setSortOrder } = filterSlice.actions;

export default filterSlice.reducer;
