// Define a Program type
interface Program {
    name: string;
    description: string;
    duration: string;
    subjects: string[];
  }
  
  // Define a Record type with a string index signature
  type ProgramData = Record<string, Program>;
  
  // Dummy program data
  export const programData: ProgramData = {
    'civil-eng': {
      name: 'Civil Engineering',
      description: 'Study of infrastructure, roads, bridges, and public works. Learn how to design and construct civil systems for communities.',
      duration: '4 years',
      subjects: ['Structural Engineering', 'Environmental Engineering', 'Geotechnical Engineering'],
    },
    'mech-eng': {
      name: 'Mechanical Engineering',
      description: 'Focuses on the design, construction, and use of machines. Learn mechanical systems, manufacturing, and thermodynamics.',
      duration: '4 years',
      subjects: ['Thermodynamics', 'Fluid Mechanics', 'Machine Design'],
    },
    'cs': {
      name: 'Computer Science',
      description: 'Learn programming, algorithms, computer systems, and data structures. Prepare for a career in software development or systems engineering.',
      duration: '4 years',
      subjects: ['Data Structures', 'Algorithms', 'Operating Systems'],
    },
    'electrical-eng': {
      name: 'Electrical Engineering',
      description: 'Study electrical systems, electronics, and circuit design. Learn how to work with power systems, communication devices, and electronics.',
      duration: '4 years',
      subjects: ['Circuit Analysis', 'Electromagnetics', 'Control Systems'],
    },
    'bio-eng': {
      name: 'Biomedical Engineering',
      description: 'Combines engineering principles with medical sciences to develop technology and devices for healthcare.',
      duration: '4 years',
      subjects: ['Biomaterials', 'Medical Imaging', 'Tissue Engineering'],
    },
  };
  