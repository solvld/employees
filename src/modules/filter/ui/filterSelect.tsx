import { useAppDispatch, useAppSelector } from '@/app/hooks';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { translateRole } from '@/lib/utils';
import { setRole } from './model/filterSlice';

interface FilterSelectProps {
  options: string[];
}

export const FilterSelect = ({ options }: FilterSelectProps) => {
  const dispatch = useAppDispatch();
  const { role } = useAppSelector(state => state.filter);
  return (
    <Select
      onValueChange={value => {
        dispatch(setRole(value));
      }}
      value={role}
    >
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
