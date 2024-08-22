import { Employee } from '@/lib/definitions';
import { createSlice } from '@reduxjs/toolkit';
import employees from '@/lib/employees.json';
import { PayloadAction } from '@reduxjs/toolkit';

interface EmployeeState {
  employees: Employee[];
}

const initialState: EmployeeState = {
  employees: employees,
};

const employeesSlice = createSlice({
  name: 'employees',
  initialState: initialState,
  reducers: {
    addEmployee: (state, action: PayloadAction<Omit<Employee, 'id'>>) => {
      state.employees.unshift({
        ...action.payload,
        id: state.employees.length + 1,
      });
    },
  },
});

export const { addEmployee } = employeesSlice.actions;

export default employeesSlice.reducer;
