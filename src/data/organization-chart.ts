export interface OrganizationNode {
  title: string;
  color: string;
  siblings?: string[]; // rendered beside this node on the same row, connected by horizontal line
  children?: string[]; // single horizontal row of children below
  childGroups?: string[][]; // multiple horizontal rows of children stacked vertically
}

export const organizationData: OrganizationNode[] = [
  // LEVEL 1
  {
    title: 'ក្រុមប្រឹក្សាភិបាល',
    color: 'bg-cyan-400',
    children: ['នាយក'],
  },

  // LEVEL 2: នាយក with ក្រុមប្រឹក្សាវិន័យ and មហាវិទ្យាល័យ as siblings on the same row
  {
    title: 'នាយក',
    color: 'bg-orange-400',
    siblings: ['ក្រុមប្រឹក្សាវិន័យ', 'មហាវិទ្យាល័យ'],
    children: ['នាយករង'],
  },
  {
    title: 'ក្រុមប្រឹក្សាវិន័យ',
    color: 'bg-blue-400',
  },
  {
    title: 'មហាវិទ្យាល័យ',
    color: 'bg-blue-400',
  },

  // LEVEL 3: នាយករង with rose offices as side-siblings and blue offices as children
  {
    title: 'នាយករង',
    color: 'bg-sky-300',
    siblings: ['ការិយាល័យបរិញ្ញាបត្រជាន់ខ្ពស់', 'ការិយាល័យធានាគុណភាពផ្ទៃក្នុង'],
    children: [
      'ការិយាល័យរដ្ឋបាល និងបុគ្គលិក',
      'ការិយាល័យគណនេយ្យ និងហិរញ្ញវត្ថុ',
      'ការិយាល័យ សិក្សា និងកិច្ចការនិស្សិត',
      'ការិយាល័យ IT',
      'ដេប៉ាតឺម៉ង់ថ្នាក់ឆ្នាំសិក្សាមូលដ្ឋាន',
    ],
  },
  {
    title: 'ការិយាល័យបរិញ្ញាបត្រជាន់ខ្ពស់',
    color: 'bg-rose-300',
  },
  {
    title: 'ការិយាល័យធានាគុណភាពផ្ទៃក្នុង',
    color: 'bg-rose-300',
  },

  // LEVEL 4: Blue operational offices
  {
    title: 'ការិយាល័យរដ្ឋបាល និងបុគ្គលិក',
    color: 'bg-blue-400',
    children: [
      'ផ្នែកបុគ្គលិក លិខិតរដ្ឋបាល និងបញ្ជាក់ការសិក្សា',
      'ពិគ្រោះយោបល់ និងចុះឈ្មោះ',
      'ផ្នែកសុខភាព',
      'អនាម័យនិងសន្តិសុខ',
    ],
  },
  {
    title: 'ការិយាល័យគណនេយ្យ និងហិរញ្ញវត្ថុ',
    color: 'bg-blue-400',
    children: ['គណនេយ្យ', 'បេឡា', 'កសុភារ', 'ឃ្លាំង'],
  },
  {
    title: 'ការិយាល័យ សិក្សា និងកិច្ចការនិស្សិត',
    color: 'bg-blue-400',
    children: [
      'ផ្នែករៀបចំ និងអភិវឌ្ឍកម្មវិធីសិក្សា',
      'គ្រប់គ្រងការប្រឡង',
      'សេវានិស្សិត និងកម្មសិក្សា',
      'គ្រប់គ្រងជំនាន់',
      'បណ្ណាល័យ',
    ],
  },
  {
    title: 'ការិយាល័យ IT',
    color: 'bg-blue-400',
    children: ['គ្រប់គ្រងប្រព័ន្ធ Database & Network', 'ថែទាំ Computer'],
  },
  {
    title: 'ដេប៉ាតឺម៉ង់ថ្នាក់ឆ្នាំសិក្សាមូលដ្ឋាន',
    color: 'bg-blue-400',
    children: [
      'ផ្នែកអភិវឌ្ឍកម្មវិធីសិក្សា ថ្នាក់ឆ្នាំសិក្សាមូលដ្ឋាន',
      'ផ្នែកទំនាក់ទំនង និងសេវានិស្សិត ថ្នាក់ឆ្នាំសិក្សាមូលដ្ឋាន',
    ],
  },

  // LEVEL 5: Leaf sub-sections
  { title: 'ផ្នែកបុគ្គលិក លិខិតរដ្ឋបាល និងបញ្ជាក់ការសិក្សា', color: 'bg-purple-300' },
  { title: 'ពិគ្រោះយោបល់ និងចុះឈ្មោះ', color: 'bg-purple-300' },
  { title: 'ផ្នែកសុខភាព', color: 'bg-purple-300' },
  { title: 'អនាម័យនិងសន្តិសុខ', color: 'bg-purple-300' },

  { title: 'គណនេយ្យ', color: 'bg-orange-300' },
  { title: 'បេឡា', color: 'bg-orange-300' },
  { title: 'កសុភារ', color: 'bg-orange-300' },
  { title: 'ឃ្លាំង', color: 'bg-orange-300' },

  { title: 'ផ្នែករៀបចំ និងអភិវឌ្ឍកម្មវិធីសិក្សា', color: 'bg-green-300' },
  { title: 'គ្រប់គ្រងការប្រឡង', color: 'bg-green-300' },
  { title: 'សេវានិស្សិត និងកម្មសិក្សា', color: 'bg-green-300' },
  { title: 'គ្រប់គ្រងជំនាន់', color: 'bg-green-300' },
  { title: 'បណ្ណាល័យ', color: 'bg-green-300' },

  { title: 'គ្រប់គ្រងប្រព័ន្ធ Database & Network', color: 'bg-pink-300' },
  { title: 'ថែទាំ Computer', color: 'bg-pink-300' },

  { title: 'ផ្នែកអភិវឌ្ឍកម្មវិធីសិក្សា ថ្នាក់ឆ្នាំសិក្សាមូលដ្ឋាន', color: 'bg-teal-300' },
  { title: 'ផ្នែកទំនាក់ទំនង និងសេវានិស្សិត ថ្នាក់ឆ្នាំសិក្សាមូលដ្ឋាន', color: 'bg-teal-300' },
];
