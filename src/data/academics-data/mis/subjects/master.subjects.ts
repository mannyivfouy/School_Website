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

export const misMasterSubjects: SemesterSubjects[] = [
  {
    semester: 'Common Course',
    subjects: [
      {
        code: 'MIT801',
        name: 'Human Resource Management',
        credit: 3,
      },
      {
        code: 'MIT802',
        name: 'Business Statistics',
        credit: 3,
      },
      {
        code: 'MIT803',
        name: 'Research Methodology',
        credit: 3,
      },
    ],
  },
  {
    semester: 'Major Course',
    subjects: [
      {
        code: 'MIT804',
        name: 'Relational Database Management System',
        credit: 3,
      },
      {
        code: 'MIT805',
        name: 'Advance Database Administration Workshop I',
        credit: 3,
      },
      {
        code: 'MIT806',
        name: 'Advance Database Administration Workshop II',
        credit: 3,
      },
      {
        code: 'MIT807',
        name: 'Software Project Management',
        credit: 3,
      },
      {
        code: 'MIT808',
        name: 'Web Application Development',
        credit: 3,
      },
      {
        code: 'MIT809',
        name: 'Java Programming With Oracle',
        credit: 3,
      },
      {
        code: 'MIT810',
        name: 'Project On DOTNET Framework',
        credit: 3,
      },
      {
        code: 'MIT811',
        name: 'Microsoft Network Administration',
        credit: 3,
      },
      {
        code: 'MIT812',
        name: 'Advance Microsoft Network Administration',
        credit: 3,
      },
      {
        code: 'MIT813',
        name: 'Network Security',
        credit: 3,
      },
      {
        code: 'MIT814',
        name: 'Advance Network Security',
        credit: 3,
      },
    ],
  },
  {
    semester: 'Elective Course',
    subjects: [
      {
        code: 'MIT815',
        name: 'Open Source Mobile Application',
        credit: 3,
      },
      {
        code: 'MIT816',
        name: 'IOS Mobile Application',
        credit: 3,
      },
      {
        code: 'MIT817',
        name: 'Linux Administration',
        credit: 3,
      },
      {
        code: 'MIT818',
        name: 'Advance Linux Administration',
        credit: 3,
      },
    ],
  },
  {
    semester: 'MOE Exams',
    subjects: [
      {
        code: 'MIT-EX1',
        name: 'Database Management And Administration',
        credit: 3,
      },
      {
        code: 'MIT-EX2',
        name: 'Information Security',
        credit: 3,
      },
      {
        code: 'MIT-EX3e',
        name: 'Network Administration',
        credit: 3,
      },
      {
        code: 'MIT-EX4',
        name: 'Project Management',
        credit: 3,
      },
    ],
  },
];
