export const config = {
  path: {
    AUTH: '/api/auth/login',
    LANGUAGE: '/api/language',
    NAVIGATION: '/api/navigation',
    SOCIAL: '/api/social'
  },
  'TOKEN-KEY': 'token',
  nav: [
    {
      customTitle: '',
      originTitle: 'About',
      icon: 'person_pin_circle',
      order: '4',
      url: '/'
    },
    {
      customTitle: '',
      originTitle: 'Education',
      icon: 'local_library',
      order: '2',
      url: '/education'
    },
    {
      customTitle: '',
      originTitle: 'Experience',
      icon: 'experience',
      order: '3',
      url: '/experience'
    },
    {
      customTitle: '',
      originTitle: 'Portfolio',
      icon: 'work',
      order: '1',
      url: '/portfolio'
    }
  ]
};
