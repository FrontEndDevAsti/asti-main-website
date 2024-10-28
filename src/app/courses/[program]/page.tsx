// src/app/courses/[program]/page.tsx
import React from 'react';
import { notFound } from 'next/navigation';
import { programData } from '@/data/program_data'; // Adjust import as needed

export async function generateStaticParams() {
  return Object.keys(programData).map((program) => ({
    program,
  }));
}

const ProgramPage = ({ params }: { params: { program: string } }) => {
  const { program } = params;
  const programDetails = programData[program];

  if (!programDetails) {
    return notFound(); // Handle the case where the program is not found
  }

  return (
    <div>
      <h1>{programDetails.name}</h1>
      <p>{programDetails.description}</p>
      <p>Duration: {programDetails.duration}</p>
      <h2>Subjects:</h2>
      <ul>
        {programDetails.subjects.map((subject:any, index:any) => (
          <li key={index}>{subject}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProgramPage;
