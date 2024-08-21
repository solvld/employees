import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Checkbox } from '@/components/ui/checkbox';
import { rolesArray } from '@/lib/placeholder-data';
import { FormEvent } from 'react';
import { FilterSelect } from './filterSelect';
import { SortSelect } from './sortSelect';

export const FilterForm = () => {
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
  };
  return (
    <Card className="w-full max-w-xs md:w-fit md:max-w-none px-4 py-2 md:sticky md:top-0">
      <form onSubmit={handleSubmit}>
        <CardContent className="flex flex-col gap-y-2 gap-x-4 md:flex-row py-4 justify-center">
          <SortSelect />
          <FilterSelect options={rolesArray} />

          <div className="flex items-center space-x-2">
            <Checkbox id="isArchive" />
            <label
              htmlFor="isArchive"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              В архиве
            </label>
          </div>

          <Button className="max-w-48">Применить</Button>
        </CardContent>
      </form>
    </Card>
  );
};
