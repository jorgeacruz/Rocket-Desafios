import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="bg-yellow-700 flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-3xl font-bold">Welcome to My App</h1>
      <Button>Click me</Button>
    </div>
  );
}
