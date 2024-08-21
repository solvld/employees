import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Employee } from '@/lib/definitions';

interface EmployeeCardProps {
  data: Employee;
}

export const EmployeeCard = ({ data }: EmployeeCardProps) => {
  return (
    <Card className="w-full justify-self-center">
      <CardHeader className="">
        <CardTitle>{data.name}</CardTitle>
        <CardDescription>
          <a href={`tel:${data.phone}`}>{data.phone}</a>
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex gap-2 items-center">
          <Badge>{data.role}</Badge>
          {data.isArchive && (
            <Badge
              variant="outline"
              className="border-destructive text-destructive"
            >
              archive
            </Badge>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
