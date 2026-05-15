export interface Subject {
  code: string;
  name: string;
  credit?: number;
  hours?: number;
}

export interface SemesterSubjects {
  semester: number;
  subjects: Subject[];
}

export const misAssociateSubjects: SemesterSubjects[] = [
  {
    semester: 1,
    subjects: [
      {
        code: 'A+ I',
        name: 'A+ (Computer Maintenance & Repair) I',
      },
      {
        code: 'C++',
        name: 'C++ Programming',
      },
      {
        code: 'OA',
        name: 'Office Application',
      },
      {
        code: 'DS I',
        name: 'Data Structure I',
      },
      {
        code: 'HIST',
        name: 'History',
      },
      {
        code: 'MGT',
        name: 'Principle of Management',
      },
      {
        code: 'CM',
        name: 'Computer Mathematics',
      },
      {
        code: 'GD I',
        name: 'Graphic Design I',
      },
      {
        code: 'ENG I',
        name: 'English I',
      },
    ],
  },
  {
    semester: 2,
    subjects: [],
  },
];
