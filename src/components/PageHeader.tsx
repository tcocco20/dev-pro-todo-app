import { Button } from "@nextui-org/react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface PageHeaderProps {
  title: string;
}

const PageHeader = ({ title }: PageHeaderProps) => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center">
      <Button
        isIconOnly
        radius="full"
        className="bg-white"
        onPress={() => navigate("..")}
      >
        <ArrowLeft />
      </Button>
      <h1 className="text-2xl flex-1 text-center">{title}</h1>
    </div>
  );
};

export default PageHeader;
