$(function () {

  /* trigger */
  $('.trigger').click(() => {
    $('.trigger').toggleClass('active');
    $('nav').fadeToggle()
  });

  /* modal */
  const modal = $('.inquiry-modal');
  const callBtn =  $('.btn-group .btn-call')
  const closeBtn = $('.btn-close')

  callBtn.click(() => modal.fadeIn());
  closeBtn.click(() => modal.fadeOut());

  modal.click((e) => {
    if ($(e.target).is(modal)) modal.fadeOut();
  });
})

