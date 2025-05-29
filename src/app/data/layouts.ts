import { Layout } from '../models/layout';

export const defaultLayout: Layout = {
  name: 'Queue Layout - 3 Columns',
  width: '100%',
  height: 'auto',
  theme: 'default',
  components: [
    {
      id: 'lists-row',
      name: 'Ticket Lists Row',
      type: 'container',
      direction: 'row',
      style: {
        display: 'flex',
        flexDirection: 'row',
        gap: '24px',
        padding: '24px',
        alignItems: 'flex-start',
        width: '100%',
      },
      children: [
        {
          id: 'waiting-tickets',
          name: 'Waiting tickets',
          type: 'ticket-list',
          listOrientation: 'vertical',
          itemTemplate: { templateId: 'basic', colorScheme: 'green' },
          rows: 6,
          columns: 1,
          gap: '8px',
          items: [
            { value: 'AS56', status: 'Get ready', styleId: 'green' },
            { value: 'AS56', status: 'Get ready', styleId: 'green' },
            { value: 'AS56', status: 'Get ready', styleId: 'green' },
            { value: 'AS56', status: '', styleId: 'gray' },
            { value: 'AS56', status: '', styleId: 'gray' },
            { value: 'AS56', status: '', styleId: 'gray' },
          ],
          style: {
            width: '300px',
            height: '480px',
            padding: '12px',
            borderRadius: '8px',
            backgroundColor: '#f9f9f9',
          },
        },
      ],
    },
  ],
};
