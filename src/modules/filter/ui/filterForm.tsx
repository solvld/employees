import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { rolesArray } from '@/lib/placeholder-data';
import { FilterSelect } from './filterSelect';
import { SortSelect } from './sortSelect';
import { FilterCheckbox } from './filterCheckbox';
import { Link } from 'react-router-dom';

export const FilterForm = () => {
  return (
    <Card className="md:flex gap-4 items-center w-full max-w-xs md:w-fit md:max-w-none px-4 py-2 md:sticky md:top-0">
      <CardContent className="flex flex-col gap-y-2 gap-x-4 md:flex-row py-4 justify-center">
        <SortSelect />
        <FilterSelect options={rolesArray} />

        <FilterCheckbox />
      </CardContent>

      <Link to={'/create'}>
        <Button className="max-w-48">Добавить сотрудника</Button>
      </Link>
    </Card>
  );
};
