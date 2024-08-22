import { EmployeeCard } from './employeeCard';
import { Employee } from '@/lib/definitions';
import { useAppSelector } from '@/app/hooks';
import { filterAndSortEmployees } from '../lib/utils';

export const EmployeesList = () => {
  const { employees } = useAppSelector(state => state.employees);
  const filterParams = useAppSelector(state => state.filter);

  const epmployeesArray =
    filterAndSortEmployees(employees, filterParams).length < 0
      ? employees
      : filterAndSortEmployees(employees, filterParams);
  return (
    <div className="py-4 grid grid-cols-1 md:grid-cols-2 gap-4 md:max-w-3xl">
      {epmployeesArray.map((obj: Employee) => (
        <EmployeeCard key={obj.id} data={obj} />
      ))}
    </div>
  );
};
