export interface Subject {
  code: string;
  name: string;
  credit?: number;
  hours?: number;
}

export interface SemesterSubjects {
  // year: number,
  semester: number;
  price?: number;
  subjects: Subject[];
}

export const designBachelorSubjects: SemesterSubjects[] = [
  {
    // year: 1,
    semester: 1,
    price: 390,
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
    // year: 1,
    semester: 2,
    price: 390,
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
        code: 'DS II',
        name: 'Data Structure II',
      },
      {
        code: 'CC',
        name: 'Culture & Civilization',
      },
      {
        code: 'PR',
        name: 'Public Relations',
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
  {
    // year: 1,
    semester: 3,
    price: 390,
    subjects: [
      {
        code: 'NET I',
        name: 'Networking I',
      },
      {
        code: 'C# II',
        name: 'C# Programming II',
      },
      {
        code: 'WD II',
        name: 'Web Development II',
      },
      {
        code: 'DATA',
        name: 'Data Modeling & Relational Database Design',
      },
      {
        code: 'DSA I',
        name: 'Database Server Applications I',
      },
      {
        code: 'SP I',
        name: 'Studio Photography I',
      },
      {
        code: 'C/AC',
        name: 'Computer Accounting',
      },
      {
        code: 'GD III',
        name: 'Graphic Design III',
      },
      {
        code: 'UX/UI',
        name: 'UX/UI (User Experience/User Interface)',
      },
    ],
  },
  {
    // year: 1,
    semester: 4,
    price: 390,
    subjects: [
      {
        code: 'NET II',
        name: 'Networking II',
      },
      {
        code: 'C# III',
        name: 'C# Programming III',
      },
      {
        code: 'WD III',
        name: 'Web Development III',
      },
      {
        code: 'DSM',
        name: 'Drawing Skills For Multimedia',
      },
      {
        code: 'DSA II',
        name: 'Database Server Applications II',
      },
      {
        code: 'SP II',
        name: 'Studio Photography II',
      },
      {
        code: 'SM I',
        name: 'Studio Multimedia I',
      },
      {
        code: '3GD',
        name: '3D Graphic Design',
      },
      {
        code: 'ACD',
        name: 'Applied Computer Design',
      },
    ],
  },
  {
    // year: 1,
    semester: 5,
    price: 390,
    subjects: [
      {
        code: 'NET III',
        name: 'Networking III',
      },
      {
        code: 'J I',
        name: 'Java Programming I',
      },
      {
        code: 'WBD I',
        name: 'Web Based Development I',
      },
      {
        code: 'O I',
        name: 'Introduction To Oracle I',
      },
      {
        code: 'MIS',
        name: 'Management Information System',
      },
      {
        code: 'A-2D',
        name: 'Animation 2D',
      },
      {
        code: 'SM II',
        name: 'Studio Multimedia II',
      },
      {
        code: 'SA I',
        name: 'System Analysis I',
      },
      {
        code: 'IS',
        name: 'Interviewing Skills',
      },
    ],
  },
  {
    // year: 1,
    semester: 6,
    price: 390,
    subjects: [
      {
        code: 'CND I',
        name: 'Configuring Network Devices I',
      },
      {
        code: 'J II',
        name: 'Java Programming II',
      },
      {
        code: 'WBD II',
        name: 'Web Based Development II',
      },
      {
        code: 'O II',
        name: 'Introduction To Oracle II',
      },
      {
        code: 'PP',
        name: 'Python Programming',
      },
      {
        code: 'CA I',
        name: 'Computer Animation I',
      },
      {
        code: 'MA I',
        name: 'Mobile Application I',
      },
      {
        code: 'SA II',
        name: 'System Analysis II',
      },
      {
        code: 'LIN I',
        name: 'Linux System Administration I',
      },
    ],
  },
  {
    // year: 1,
    semester: 7,
    price: 390,
    subjects: [
      {
        code: 'CND II',
        name: 'Configuring Network Devices II',
      },
      {
        code: 'J III',
        name: 'Java Programming III',
      },
      {
        code: 'WP',
        name: 'Web Projects',
      },
      {
        code: 'EL',
        name: 'Ethics & Law of IT',
      },
      {
        code: 'ADV PP',
        name: 'Advance Python Programming',
      },
      {
        code: 'CA II',
        name: 'Computer Animation II',
      },
      {
        code: 'MA II',
        name: 'Mobile Application II',
      },
      {
        code: 'E-COM',
        name: 'E-Commerce',
      },
      {
        code: 'LIN II',
        name: 'Linux System Administration II',
      },
    ],
  },
  {
    // year: 1,
    semester: 8,
    price: 390,
    subjects: [
      {
        code: '',
        name: 'Student Internship Program or Research (Thesis)'
      },
      {
        code: '',
        name: 'Career Placement Program'
      },
    ],
  },
];
