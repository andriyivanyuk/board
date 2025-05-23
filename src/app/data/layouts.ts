import { Layout } from '../models/layout';

export const defaultLayout: Layout = {
  name: 'Test Ticket List Layout',
  width: '100%',
  height: '100vh',
  theme: 'dark',

  components: [
    {
      id: 'ticket-list-1',
      name: 'Main Ticket List',
      type: 'ticket-list',
      listOrientation: 'vertical',
      rows: 3,
      columns: 1,
      gap: '12',
      style: {
        width: '300px',
        height: '600px',
        display: 'grid',
        gridTemplateColumns: '1fr',
        gridTemplateRows: 'repeat(3, 1fr)',
      },
      itemTemplate: {
        templateId: 'default',
      },
      items: [
        { value: 'A101', status: 'Ready' },
        { value: 'B205', status: 'Waiting' },
        { value: 'C333', status: 'Get ready' },
      ],
    },
  ],
};
