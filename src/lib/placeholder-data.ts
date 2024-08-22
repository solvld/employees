import employees from '@/lib/employees.json';
import { SortOrder } from './definitions';

export const rolesArray = (function (): string[] {
  const rolesSet = new Set<string>();

  employees.forEach(employee => {
    rolesSet.add(employee.role);
  });

  return [...rolesSet];
})();

export const sortOptions = [
  {
    name: 'Дата по убывнию',
    value: SortOrder.ByDateDescending,
  },
  {
    name: 'Дата по возрастанию',
    value: SortOrder.ByDateAscending,
  },
  {
    name: 'Имя А-Я',
    value: SortOrder.ByNameAscending,
  },
  {
    name: 'Имя Я-А',
    value: SortOrder.ByNameDescending,
  },
];
