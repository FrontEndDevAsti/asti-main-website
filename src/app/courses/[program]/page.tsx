import React from 'react';
import { notFound } from 'next/navigation';
import { programData } from '@/data/program_data'; // Adjust import as needed

import Wrapper from '@/layouts/Wrapper';
import HeaderOne from '@/layouts/headers/HeaderOne';
import FooterOne from '@/layouts/footers/FooterOne';
import SingleProgramPage from '@/components/SingleProgramPage/SingleProgramPage';

// Define a type for program keys
type ProgramKeys = keyof typeof programData;

export async function generateStaticParams() {
  return Object.keys(programData).map((program) => ({
    program,
  }));
}

const ProgramPage = ({ params }: { params: { program: ProgramKeys } }) => {
  const { program } = params;
  const programDetails = programData[program];

  if (!programDetails) {
    return notFound(); // Handle the case where the program is not found
  }

  return (
    <>
      <HeaderOne />
      <SingleProgramPage program={programDetails} />
      <FooterOne />
    </>
  );
};

export default ProgramPage;
