import list from '@/lib/employees.json';
import { EmployeeCard } from './employeeCard';
import { Employee } from '@/lib/definitions';

export const EmployeesList = () => {
  return (
    <div className="py-4 grid grid-cols-1 md:grid-cols-2 gap-4 md:max-w-3xl">
      {list.map((obj: Employee) => (
        <EmployeeCard key={obj.id} data={obj} />
      ))}
    </div>
  );
};
