import { useAppDispatch } from '@/app/hooks';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { sortOptions } from '@/lib/placeholder-data';
import { setSortOrder } from './model/filterSlice';
import { SortOrder } from '@/lib/definitions';

export const SortSelect = () => {
  const dispatch = useAppDispatch();
  return (
    <Select
      onValueChange={value => {
        dispatch(setSortOrder(SortOrder[value as keyof typeof SortOrder]));
      }}
    >
      <SelectTrigger className="w-48">
        <SelectValue placeholder="Отсортровать" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {sortOptions.map(option => (
            <SelectItem value={option.value}>{option.name}</SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
