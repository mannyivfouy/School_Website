export interface Subject {
  code: string;
  name: string;
  credit?: number;
  hours?: number;
}

export interface SemesterSubjects {
  semester: any;
  subjects: Subject[];
}

export const misBridgingSubjects: SemesterSubjects[] = [
  {
    semester: 'Bridging Course',
    subjects: [
      {
        code: 'C++ & C# I',
        name: 'C++ & C# Programming I',
        hours: 21,
      },
      {
        code: 'DS I & II',
        name: 'Data Structure I & II',
        hours: 8,
      },
      {
        code: 'A+ I & II',
        name: 'A+ (Computer Maintenance & Repair) I & II',
        hours: 8,
      },
      {
        code: 'GD I & II',
        name: 'Graphic Design I & II',
        hours: 14,
      },
      {
        code: 'AC',
        name: 'Accounting',
        hours: 6,
      },
      {
        code: 'WD I',
        name: 'Web Development I',
        hours: 6,
      },
    ],
  },
];
