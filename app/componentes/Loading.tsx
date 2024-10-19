import { Loader2 } from 'lucide-react';
const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="text-center">
        <Loader2 className="h-20 w-20 animate-spin text-black mx-auto" />
        <p className="mt-4 text-lg font-semibold text-gray-700">Projects Loading ...</p>
      </div>
    </div>
  );
};

export default Loading;

