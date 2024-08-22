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
  Default = 'Default',
}

export interface SortAndFilterParams {
  role?: string;
  isArchive: boolean | null;
  sortOrder: SortOrder | null;
}
