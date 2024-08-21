import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { translateRole } from '@/lib/utils';

interface FilterSelectProps {
  options: string[];
}

export const FilterSelect = ({ options }: FilterSelectProps) => {
  return (
    <Select onValueChange={() => {}}>
      <SelectTrigger className="w-48">
        <SelectValue placeholder="Выбрать должность" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {options.map(option => (
            <SelectItem value={option}>{translateRole(option)}</SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
