import { Layout } from '../models/layout';

export const defaultLayout: Layout = {
  name: 'Default Layout',
  width: '100%',
  height: '100vh',
  theme: 'dark',

  components: [
    {
      id: 'ticket-list-1',
      name: 'Main Ticket List',
      type: 'ticket-list',

      listOrientation: 'vertical',
      rows: 2,
      columns: 3,
      gap: '12',

      style: {
        width: '600',
        height: '300',
      },
      itemTemplate: {
        templateId: 'default',
      },
      items: [
        { value: 'A101', status: 'Ready' },
        { value: 'B205', status: 'Waiting' },
        { value: 'C333', status: 'Get ready' },
        { value: 'D404', status: 'Missed' },
        { value: 'E555', status: 'Done' },
        { value: 'F666', status: 'Called' },
      ],
    },
  ],
};
