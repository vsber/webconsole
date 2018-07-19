
(function ($) {
  'use strict'

  $(function () {
    $('.collapse').each(function () {
      $(this).collapse('hide')
      $(this).on('hide.bs.collapse', function () {
        $(this).siblings('.nav-link').find('.item-icon .hds-triangle-icon').removeClass('hds-triangle-icon-open').addClass('hds-triangle-icon-close')
        $(this).siblings('.nav-link').removeClass('active').addClass('active')
      })
      $(this).on('show.bs.collapse', function () {
        $(this).siblings('.nav-link').removeClass('active')
        $(this).siblings('.nav-link').find('.item-icon .hds-triangle-icon').removeClass('hds-triangle-icon-close').addClass('hds-triangle-icon-open')
      })
      $(this).siblings('.nav-link').click(function () {
        $(this).siblings('.collapse').collapse('toggle')
      })
    })
  })
}(jQuery))
