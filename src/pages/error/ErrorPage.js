import React from "react";
import { EORROR_404, PAGE_NOT_EXIST } from "../../constents";

function ErrorPage() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md text-center">
        <h2 className="text-3xl font-semibold mb-4">{EORROR_404}</h2>
        <p className="text-gray-600">{PAGE_NOT_EXIST}</p>
      </div>
    </div>
  );
}

export default ErrorPage;
