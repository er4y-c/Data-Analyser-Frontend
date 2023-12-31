export const mockOptions = [
    { label: 'Show 10', value: 10 },
    { label: 'Show 20', value: 20 },
    { label: 'Show 30', value: 30 },
    { label: 'Show 40', value: 40 },
    { label: 'Show 50', value: 50 },
];

export const panels = [
  {
    icon: '/icons/line-icon.png',
    title: 'Visualize',
    description: 'Visualize your filtred data using charts and graphs',
    href: '/dashboard/visualize',
  },
  {
    icon: '/icons/table-icon.png',
    title: 'Data Table',
    description: 'View your data in a table format and filter and sort it using multiple options',
    href: '/dashboard/datatable',
  },
  {
    icon: '/icons/ml-icon.png',
    title: 'Machine Learning Lab',
    description: 'Train your own machine learning models using your datasets',
    href: '/dashboard/boards',
  },
  {
    icon: '/icons/insight.png',
    title: 'Insights',
    description: 'Take outputs from your machine learning models and visualize them',
    href: '/dashboard/boards',
  },
]

export const boards = [
  {
    id: 1,
    title: 'Board 1',
    icon: '/assets/sagligim-cepte-logo.svg',
    description: 'Example board',
    isPinned: true,
  },
  {
    id: 2,
    title: 'Board 2',
    icon: '/assets/sagligim-cepte-logo.svg',
    description: 'Example board 2',
    isPinned: true,
  },
]
