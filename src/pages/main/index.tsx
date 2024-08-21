import { EmployeesList } from '@/modules/employees';
import { FilterForm } from '@/modules/filter';

export const MainPage = () => {
  return (
    <div className="flex flex-col items-center">
      <FilterForm />
      <EmployeesList />
    </div>
  );
};
