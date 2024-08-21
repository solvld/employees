export interface Employee {
  id: number;
  name: string;
  isArchive: boolean;
  role: string;
  phone: string;
  birthday: string;
}
export enum SortOrder {
  ByNameAscending = 'ByNameAscending',
  ByNameDescending = 'ByNameDescending',
  ByDateAscending = 'ByDateAscending',
  ByDateDescending = 'ByDateDescending',
}
