import { configureStore } from '@reduxjs/toolkit';
import { employeesSlice } from '@/modules/employees';
import { filterSlice } from '@/modules/filter';

export const store = configureStore({
  reducer: {
    employees: employeesSlice,
    filter: filterSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
