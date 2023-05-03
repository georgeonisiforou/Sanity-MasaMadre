export default {
  name: 'location',
  type: 'document',
  title: 'Current location',
  fields: [
    {
      name: 'address',
      type: 'string',
      title: 'Address',
    },
    {
      name: 'locationPhoto',
      type: 'image',
      title: 'Photo of location',
    },
    {
      title: 'Google Maps Link',
      name: 'googleMapsUrl',
      type: 'url',
    },
    {
      title: 'Content',
      name: 'content',
      type: 'array',
      of: [{type: 'block'}],
    },
    {
      title: 'Opening time',
      name: 'openTime',
      type: 'datetime',
      options: {
        dateFormat: 'DD-MM-YYYY',
        timeFormat: 'HH:mm',
        timeStep: 15,
        calendarTodayLabel: 'Today',
      },
    },
    {
      title: 'Closing time',
      name: 'closeTime',
      type: 'datetime',
      options: {
        dateFormat: 'DD-MM-YYYY',
        timeFormat: 'HH:mm',
        timeStep: 15,
        calendarTodayLabel: 'Today',
      },
    },
  ],
}
