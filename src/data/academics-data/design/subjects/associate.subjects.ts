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

export const designAssociateSubjects: SemesterSubjects[] = [
  {
    semester: 1,
    price: 340,
    subjects: [
      {
        code : '',
        name : 'Fundamental Drawing'
      },
      {
        code : '',
        name : 'Design Color'
      },
      {
        code : '',
        name : 'Principle of Management I'
      },
      {
        code : '',
        name : 'Business Mathematics'
      },
      {
        code : '',
        name : 'Fundamental Digital Imaging I'
      },
      {
        code : '',
        name : 'Office Applications I'
      }
    ]
  },
  {
    semester: 2,
    price: 340,
    subjects: [
      {
        code : '',
        name : 'Drawing I'
      },
      {
        code : '',
        name : 'Design Communication I'
      },
      {
        code : '',
        name : 'Principle of Management II'
      },
      {
        code : '',
        name : 'Culture & Civilization'
      },
      {
        code : '',
        name : 'Digital Imaging I'
      },
      {
        code : '',
        name : 'Office Applications II'
      }
    ]
  },
  {
    semester: 3,
    price: 340,
    subjects: [
      {
        code : '',
        name : 'Drawing II'
      },
      {
        code : '',
        name : 'Design Definition & Process'
      },
      {
        code : '',
        name : 'Model Making I'
      },
      {
        code : '',
        name : 'Public Relations'
      },
      {
        code : '',
        name : 'Fundamental Digital Imaging II'
      },
      {
        code : '',
        name : 'English I'
      }
    ]
  },
  {
    semester: 4,
    price: 340,
    subjects: [
      {
        code : '',
        name : 'Design Material I'
      },
      {
        code : '',
        name : 'Design Communication II'
      },
      {
        code : '',
        name : 'Model Making II'
      },
      {
        code : '',
        name : 'Business Accounting'
      },
      {
        code : '',
        name : 'Digital Imaging II'
      },
      {
        code : '',
        name : 'English II'
      }
    ]
  }
];
