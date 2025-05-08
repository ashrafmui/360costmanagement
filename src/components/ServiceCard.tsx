import {
  LightbulbIcon,
  BarChart3Icon,
  FileTextIcon,
  PaletteIcon,
  FileIcon,
  TrendingUpIcon,
} from "lucide-react";
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
        return <LightbulbIcon className="h-10 w-10 mb-4 text-gray-700 dark:text-gray-300" />;
      case "bar-chart":
        return <BarChart3Icon className="h-10 w-10 mb-4 text-gray-700 dark:text-gray-300" />;
      case "file-text":
        return <FileTextIcon className="h-10 w-10 mb-4 text-gray-700 dark:text-gray-300" />;
      case "palette":
        return <PaletteIcon className="h-10 w-10 mb-4 text-gray-700 dark:text-gray-300" />;
      case "file":
        return <FileIcon className="h-10 w-10 mb-4 text-gray-700 dark:text-gray-300" />;
      case "trending-up":
        return <TrendingUpIcon className="h-10 w-10 mb-4 text-gray-700 dark:text-gray-300" />;
    }
  };

  return (
    <Card className="flex flex-col items-center text-center p-6 hover:shadow-lg transition-shadow">
      <CardHeader className="flex flex-col items-center pb-2 text-[#a9b856]">
        {getIcon()}
          <h3 className="text-xl font-bold text-center whitespace-nowrap px-[5px] sm:px-0">{title}</h3>
      </CardHeader>
      <CardContent>
        <p className="text-gray-500 dark:text-gray-400">{description}</p>
      </CardContent>
    </Card>
  );
}
