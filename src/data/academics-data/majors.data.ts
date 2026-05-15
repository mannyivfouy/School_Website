
import { misAssociateSubjects } from './mis/subjects/associate.subjects';
import { SemesterSubjects } from './mis/subjects/bachelor.subjects';
import { misBachelorSubjects } from './mis/subjects/bachelor.subjects';
import { misBridgingSubjects } from './mis/subjects/bridging.subjects';
import { misMasterSubjects } from './mis/subjects/master.subjects';

export interface DegreeProgram {
  type: string;
  description: string;
  subjects: SemesterSubjects[];
}

export interface Major {
  id: string;
  name: string;
  description: string;
  degrees: DegreeProgram[];
}

export const majorsData: Major[] = [
  {
    id: 'mis',
    name: 'Management Information System',
    description: '',
    degrees: [
      {
        type : 'Associate Degrees',
        description: '',
        subjects : misAssociateSubjects
      },
      {
        type: 'Bachelor Degrees',
        description: '',
        subjects: misBachelorSubjects,
      },
      {
        type: 'Master Degrees',
        description: '',
        subjects: misMasterSubjects,
      },
      {
        type : 'Bridging Course',
        description : '',
        subjects: misBridgingSubjects
      }
    ],
  },
  {
    id: 'bit',
    name: 'Business Information Technology',
    description: '',
    degrees: [],
  },
  {
    id: 'design',
    name: 'Design',
    description: '',
    degrees: [],
  },
];
