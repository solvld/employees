import { EmployeesList } from '@/modules/employees';
import { FilterForm } from '@/modules/filter';
import { Link } from 'react-router-dom';

export const MainPage = () => {
  return (
    <div className="flex flex-col items-center">
      <FilterForm />
      <EmployeesList />
      {import.meta.env.VITE_DEV && (
        <Link
          className="px-4 absolute left-4 top-4 py-1 rounded-md border border-gray-900"
          to="/dev"
        >
          dev
        </Link>
      )}
    </div>
  );
};
