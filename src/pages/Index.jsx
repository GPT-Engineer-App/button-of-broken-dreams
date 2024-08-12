import { Button } from "@/components/ui/button"

const Index = () => {
  const handleClick = () => {
    // This will cause an unhandled promise rejection
    new Promise((_, reject) => {
      reject(new Error("This is an unhandled promise rejection!"));
    });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <Button onClick={handleClick} variant="destructive">
        Cause Unhandled Rejection
      </Button>
    </div>
  );
};

export default Index;
