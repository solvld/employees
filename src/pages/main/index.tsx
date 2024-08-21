import { EmployeesList } from '@/modules/employees';

export const MainPage = () => {
  return (
    <div className="flex flex-col items-center">
      <EmployeesList />
    </div>
  );
};
