import { LoaderCircle } from "lucide-react";
import React from "react";

const Spinner = () => {
  return (
    <div className="flex-1 flex justify-center items-center self-center">
      <LoaderCircle className="h-16 w-16 animate-spin" />
    </div>
  );
};

export default Spinner;
