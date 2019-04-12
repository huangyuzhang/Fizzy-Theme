const defaultOptions = {
  iconSets: [
    {
      name: 'simpleLine', // Name displayed on tab
      css: 'https://cdnjs.cloudflare.com/ajax/libs/simple-line-icons/2.4.1/css/simple-line-icons.css', // CSS url containing icons rules
      prefix: 'icon-', // CSS rules prefix to identify icons
      displayPrefix: ''
    },{
      name: 'fontAwesome', // Name displayed on tab
      css: 'https://use.fontawesome.com/releases/v5.0.13/css/all.css', // CSS url containing icons rules
      prefix: 'fa-', // CSS rules prefix to identify icons
      displayPrefix: 'fas fa-icon'
    }
  ]
};

export default defaultOptions;
