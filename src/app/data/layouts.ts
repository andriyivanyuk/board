import { Layout } from '../models/layout';

export const defaultLayout: Layout = {
  name: 'Single Column Layout',
  width: '100%',
  height: '100vh',
  theme: 'dark',
  components: [
    {
      id: 'ticket-list-column',
      name: 'Column List',
      type: 'ticket-list',
      listOrientation: 'vertical',
      columns: 1,
      rows: 3,
      gap: '16',
      style: {
        width: '300',
        height: '600',
        padding: '16px',
      },
      itemTemplate: {
        templateId: 'default',
      },
      items: [
        { value: 'A101', status: 'Ready', styleId: 'green' },
        { value: 'B202', status: 'Waiting', styleId: 'gray' },
        { value: 'C303', status: 'Called', styleId: 'yellow' },
      ],
      ticketItemStyles: {
        green: {
          backgroundColor: '#d4edda',
          textColor: '#155724',
          fontSize: '18px',
        },
        gray: {
          backgroundColor: '#e2e3e5',
          textColor: '#383d41',
        },
        yellow: {
          backgroundColor: '#fff3cd',
          textColor: '#856404',
        },
      },
    },
  ],
};
