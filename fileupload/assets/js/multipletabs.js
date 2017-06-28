$(function() {
  'use strict';
  var $fbPages = $(document.getElementById('form-builder-pages')),
    addPageTab = document.getElementById('add-page-tab');

  $fbPages.tabs({
    beforeActivate: function(event, ui) {
      if (ui.newPanel.selector === '#new-page') {
        return false;
      }
    }
  });

  addPageTab.onclick = function() {
    var tabCount = document.getElementById('tabs').children.length,
      tabId = 'page-' + tabCount.toString(),
      $newPageTemplate = $(document.getElementById('new-page')),
      $newPage = $newPageTemplate.clone().attr('id', tabId).addClass('fb-editor'),
      $newTab = $(this).clone().removeAttr('id'),
      $tabLink = $('a', $newTab).attr('href', '#' + tabId).text('Form ' + tabCount);

    $newPage.insertBefore($newPageTemplate);
    $newTab.insertBefore(this);
    $fbPages.tabs('refresh');
    $fbPages.tabs("option", "active", tabCount - 1);
    $newPage.formBuilder();
  };

  $('.fb-editor').formBuilder();

  $(document.getElementById('save_div')).click(function() {
    var allEditorValues = $('.fb-editor').map(function() {
      return $(this).data('formBuilder').formData
    });
    console.log(allEditorValues);
  });
});