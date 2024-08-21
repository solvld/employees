import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { sortOptions } from '@/lib/placeholder-data';

export const SortSelect = () => {
  return (
    <Select onValueChange={() => {}}>
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
