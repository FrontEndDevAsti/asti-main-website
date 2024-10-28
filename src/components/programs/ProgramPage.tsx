// src/app/courses/[program]/ProgramPageClient.tsx
import React from 'react';

const ProgramPage = ({ programDetails }: { programDetails: any }) => {
  return (
    <div>
      <h1>{programDetails.title}</h1>
      <p>{programDetails.description}</p>
      {/* Add more dynamic content here based on the program */}
    </div>
  );
};

export default ProgramPage;
