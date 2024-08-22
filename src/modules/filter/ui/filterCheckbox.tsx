import { useAppDispatch, useAppSelector } from '@/app/hooks';
import { Checkbox } from '@/components/ui/checkbox';
import { setIsArchive } from './model/filterSlice';

export const FilterCheckbox = () => {
  const dispatch = useAppDispatch();
  const { isArchive } = useAppSelector(state => state.filter);
  return (
    <div className="flex items-center space-x-2">
      <Checkbox
        id="isArchive"
        onCheckedChange={checked => dispatch(setIsArchive(!!checked))}
        checked={!!isArchive}
      />
      <label
        htmlFor="isArchive"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        В архиве
      </label>
    </div>
  );
};
