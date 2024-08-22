import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Employee } from '@/lib/definitions';
import { translateRole } from '@/lib/utils';

interface EmployeeCardProps {
  data: Employee;
}

export const EmployeeCard = ({ data }: EmployeeCardProps) => {
  return (
    <Card className="w-full min-w-80 justify-self-center">
      <CardHeader className="">
        <CardTitle>{data.name}</CardTitle>
        <CardDescription>
          <a href={`tel:${data.phone}`}>{data.phone}</a>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex gap-2 items-center">
          <Badge>{translateRole(data.role)}</Badge>
          {data.isArchive && (
            <Badge
              variant="outline"
              className="border-destructive text-destructive"
            >
              В архиве
            </Badge>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
