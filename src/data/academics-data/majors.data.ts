import { designAssociateSubjects } from './design/subjects/associate.subjects';
import { designBachelorSubjects } from './design/subjects/bachelor.subjects';
import { designBridgingSubjects } from './design/subjects/bridging.subjects';
import { designMasterSubjects } from './design/subjects/master.subjects';
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
  image?: string;
  degrees: DegreeProgram[];
}

export const majorsData: Major[] = [
  {
    id: 'mis',
    name: 'Management Information System',
    image: 'assets/images/majorImages/mis.jpg',
    degrees: [
      {
        type: 'Associate Degrees',
        description: '',
        subjects: misAssociateSubjects,
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
        type: 'Bridging Course',
        description: '',
        subjects: misBridgingSubjects,
      },
    ],
  },
  {
    id: 'bit',
    name: 'Business Information Technology',
    image: 'assets/images/majorImages/bit.jpg',
    degrees: [],
  },
  {
    id: 'design',
    name: 'Design',
    image: 'assets/images/majorImages/design.jpg',
    degrees: [
      {
        type: 'Associate Degrees',
        description: '',
        subjects: designAssociateSubjects,
      },
      {
        type: 'Bachelor Degrees',
        description: '',
        subjects: designBachelorSubjects,
      },
      {
        type: 'Master Degrees',
        description: '',
        subjects: designMasterSubjects,
      },
      {
        type: 'Bridging Course',
        description: '',
        subjects: designBridgingSubjects,
      },
    ],
  },
];
