import { isValidPhoneNumber } from 'react-phone-number-input';
import { z } from 'zod';

const nameRegex = /^[А-ЯЁA-Z][а-яёa-z]+ [А-ЯЁA-Z][а-яёa-z]+$/;

export const FormSchema = z.object({
  phone: z
    .string({ message: 'Введите номер телефона.' })
    .refine(isValidPhoneNumber, { message: 'Неверный формат телефона.' })
    .or(z.literal('')),
  name: z
    .string()
    .min(2, {
      message: 'Имя должно быть длиннее 2 символов.',
    })
    .regex(nameRegex, { message: 'Введите имя и фамилию' }),
  role: z.string({ message: 'Выбирите должность.' }),
  birthday: z.date({
    required_error: 'Выбирите дату дня рождения.',
  }),
  isArchive: z.boolean().default(false),
});
