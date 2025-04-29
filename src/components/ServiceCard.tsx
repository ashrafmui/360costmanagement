import { BarChart, Code, FileText, Lightbulb, Megaphone, Palette, type LucideIcon } from 'lucide-react';
import { Card, CardContent, CardHeader } from "@/components/ui/card";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
}

export default function ServiceCard({ title, description, icon }: ServiceCardProps) {
  const getIcon = () => {
    switch (icon) {
      case "lightbulb":
        return <Lightbulb className="h-10 w-10 mb-4 text-gray-700 dark:text-gray-300" />;
      case "megaphone":
        return <Megaphone className="h-10 w-10 mb-4 text-gray-700 dark:text-gray-300" />;
      case "code":
        return <Code className="h-10 w-10 mb-4 text-gray-700 dark:text-gray-300" />;
      case "palette":
        return <Palette className="h-10 w-10 mb-4 text-gray-700 dark:text-gray-300" />;
      case "file-text":
        return <FileText className="h-10 w-10 mb-4 text-gray-700 dark:text-gray-300" />;
      case "bar-chart":
        return <BarChart className="h-10 w-10 mb-4 text-gray-700 dark:text-gray-300" />;
      default:
        return <Lightbulb className="h-10 w-10 mb-4 text-gray-700 dark:text-gray-300" />;
    }
  };

  return (
    <Card className="flex flex-col items-center text-center p-6 hover:shadow-lg transition-shadow">
      <CardHeader className="pb-2">
        {getIcon()}
        <h3 className="text-xl font-bold">{title}</h3>
      </CardHeader>
      <CardContent>
        <p className="text-gray-500 dark:text-gray-400">{description}</p>
      </CardContent>
    </Card>
  );
}
