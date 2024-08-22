import { Employee, SortAndFilterParams, SortOrder } from '@/lib/definitions';
import { formatDate } from '@/lib/utils';

export const filterAndSortEmployees = (
  employees: Employee[],
  { sortOrder, role, isArchive }: SortAndFilterParams,
): Employee[] => {
  let filteredEmployees = employees;

  if (role && role !== 'all') {
    filteredEmployees = filteredEmployees.filter(
      employee => employee.role === role,
    );
  }

  if (isArchive !== null) {
    filteredEmployees = filteredEmployees.filter(
      employee => employee.isArchive === isArchive,
    );
  }

  const sortedEmployees = [...filteredEmployees]
    .map(emp => ({ ...emp, birthday: formatDate(emp.birthday) }))
    .sort((a, b) => {
      switch (sortOrder) {
        case SortOrder.ByNameAscending:
          return a.name.localeCompare(b.name);
        case SortOrder.ByNameDescending:
          return b.name.localeCompare(a.name);
        case SortOrder.ByDateAscending:
          return (
            new Date(a.birthday).getTime() - new Date(b.birthday).getTime()
          );
        case SortOrder.ByDateDescending:
          return (
            new Date(b.birthday).getTime() - new Date(a.birthday).getTime()
          );
        default:
          return 0;
      }
    });

  return sortedEmployees;
};
