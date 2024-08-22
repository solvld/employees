import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Card } from '@/components/ui/card';
import { PhoneInput } from '@/components/ui/phoneInput';
import { formatPhoneNumber } from 'react-phone-number-input';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { CalendarIcon } from 'lucide-react';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { cn, translateRole } from '@/lib/utils';
import { format, formatDate, parse } from 'date-fns';
import { ru } from 'date-fns/locale';
import { Calendar } from '@/components/ui/calendar';
import { rolesArray } from '@/lib/placeholder-data';
import { Checkbox } from '@/components/ui/checkbox';
import { useDispatch } from 'react-redux';
import { editEmployee } from '../model/employeesSlice';
import { useNavigate, useParams } from 'react-router-dom';
import { FormSchema } from '../lib/validation';
import { useAppSelector } from '@/app/hooks';

export function EditForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { employees } = useAppSelector(state => state.employees);

  const { id } = useParams();

  const currentEmployee = employees.find(emp => emp.id === Number(id));

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: currentEmployee
      ? {
          name: currentEmployee.name,
          phone: currentEmployee.phone,
          isArchive: currentEmployee.isArchive,
          birthday: parse(currentEmployee.birthday, 'dd.MM.yyyy', new Date()),
          role: currentEmployee.role,
        }
      : {},
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    if (currentEmployee) {
      dispatch(
        editEmployee({
          ...data,
          birthday: formatDate(data.birthday, 'dd.MM.yyyy'),
          phone: formatPhoneNumber(data.phone),
          id: currentEmployee.id,
        }),
      );
    }
    navigate('/');
  }

  const options = rolesArray;

  if (!currentEmployee) {
    return (
      <Card className="py-4 px-8 w-fit md:max-w-md mx-auto text-center">
        <h1>Сотрудник не найден...</h1>
      </Card>
    );
  }

  return (
    <Card className="p-8 w-full md:max-w-md mx-auto">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-2/3 space-y-6"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Имя</FormLabel>
                <FormControl>
                  <Input placeholder="Иван Маслов" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="birthday"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Дата рождения</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={'outline'}
                        className={cn(
                          'w-[240px] pl-3 text-left font-normal',
                          !field.value && 'text-muted-foreground',
                        )}
                      >
                        {field.value ? (
                          format(field.value, 'PPP', { locale: ru })
                        ) : (
                          <span>Выбрать дату</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onSelect={field.onChange}
                      disabled={date =>
                        date > new Date() || date < new Date('1900-01-01')
                      }
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem className="flex flex-col items-start">
                <FormLabel className="text-left">Номер телефона</FormLabel>
                <FormControl className="w-full">
                  <PhoneInput
                    international={true}
                    defaultCountry="RU"
                    placeholder="Введите номер"
                    {...field}
                    value={field.value}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="role"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Должность</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger className="w-48">
                      <SelectValue placeholder="Выбрать должность" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectGroup>
                      {options.map(option => (
                        <SelectItem value={option}>
                          {translateRole(option)}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="isArchive"
            render={({ field }) => (
              <FormItem>
                <div className="flex gap-2 items-center">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>

                  <FormLabel
                    htmlFor="isArchive"
                    className="text-sm font-medium peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    В архиве
                  </FormLabel>
                </div>
              </FormItem>
            )}
          />
          <Button type="submit">Изменить</Button>
        </form>
      </Form>
    </Card>
  );
}
