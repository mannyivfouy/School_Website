export interface Subject {
  code: string;
  name: string;
  credit?: number;
  hours?: number;
}

export interface SemesterSubjects {
  semester: number;
  price?: number;
  subjects: Subject[];
}

export const misAssociateSubjects: SemesterSubjects[] = [
  {
    semester: 1,
    price: 290,
    subjects: [
      {
        code: 'HIST',
        name: 'History',
      },
      {
        code: 'CM I',
        name: 'Computer Mathematics I',
      },
      {
        code: 'MGT I',
        name: 'Principle of Management I',
      },
      {
        code: 'DS I',
        name: 'Data Structure I',
      },
      {
        code: 'FGD I',
        name: 'Fundamental Graphic Design I',
      },
      {
        code: 'OA I',
        name: 'Office Applications I',
      },
    ],
  },
  {
    semester: 2,
    price: 290,
    subjects: [
      {
        code: 'CC',
        name: 'Culture & Civilization',
      },
      {
        code: 'CM II',
        name: 'Computer Mathematics II',
      },
      {
        code: 'MGT II',
        name: 'Principle of Management II',
      },
      {
        code: 'DS II',
        name: 'Data Structure II',
      },
      {
        code: 'GD I',
        name: 'Graphic Design I',
      },
      {
        code: 'OA II',
        name: 'Office Applications II',
      },
    ],
  },
  {
    semester: 3,
    price: 290,
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
        code: 'PR',
        name: 'Public Relations',
      },
      {
        code: 'BK',
        name: 'Book Keeping',
      },
      {
        code: 'FGD II',
        name: 'Fundamental Graphic Design II',
      },
      {
        code: 'ENG I',
        name: 'English I',
      },
    ],
  },
  {
    semester: 4,
    price: 290,
    subjects: [
      {
        code: 'A+ II',
        name: 'A+ (Computer Maintenance & Repair) II',
      },
      {
        code: 'C# I',
        name: 'C# Programming I',
      },
      {
        code: 'WD I',
        name: 'Web Development I',
      },
      {
        code: 'AC',
        name: 'Accounting',
      },
      {
        code: 'GD II',
        name: 'Graphic Design II',
      },
      {
        code: 'ENG II',
        name: 'English II',
      },
    ],
  },
];
