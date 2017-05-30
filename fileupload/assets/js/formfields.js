jQuery(document).ready(function($) {
  var fbEditor = document.getElementById('build-wrap'),


    options = {
     // fieldRemoveWarn: true,
      stickyControls: {
        enable: true,
        offset: {
            top: 20,
            right: 120,
            left: 'auto'
        }
  
      },
       roles: {
      admin: 'Admin',
      subscriber: 'Subscriber',
      editor: 'Editor'
    },
      dataType: 'json',
      inputSets: [
      {

        label: 'Financial Leverage',
        name: 'fi-le', // optional
        // showHeader: true, // optional
        fields: [
        {
          type: 'text',
          label: 'Financial Leverage',
          className: 'form-control'
        }, 
        ]
      }, 

      {
        label: 'Jobs Leverage',
        name: 'jo-le',
        // showHeader: true,
        fields: [
        {
          type: 'text',
          label: 'Jobs Leverage',
          className: 'form-control'
        },
        ]
      },

      {
        label: 'General Leverage',
        name: 'ge-le',
        // showHeader: true,
        fields: [
        {
          type: 'text',
          label: 'General Leverage',
          className: 'form-control'
        },
        ]
      },
      {
        label: 'Budget',
        name: 'budget',
        // showHeader: true,
        fields: [
        {
          type: 'text',
          label: 'Budget',
          className: 'form-control'
        },
        ]
      },
      {
        label: 'Budget Custom',
        name: 'bu-cu',
        // showHeader: true,
        fields: [
        {
          type: 'text',
          label: 'Budget Custom',
          className: 'form-control'
        },
        ]
      },
      {
        label: 'Dynamic Budget',
        name: 'dy-bu',
        // showHeader: true,
        fields: [
        {
          type: 'text',
          label: 'Dynamic Budget',
          className: 'form-control'
        },
        ]
      },
      {
        label: 'Dynamic Budget Custom',
        name: 'dy-bucu',
        // showHeader: true,
        fields: [
        {
          type: 'text',
          label: 'Dynamic Budget Custom',
          className: 'form-control'
        },
        ]
      }
      ]
    };
  $(fbEditor).formBuilder(options);
});