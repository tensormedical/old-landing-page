// tensormedical.ai Landing Page TS Script

import $ from 'jquery';

init();

function init() : void {
  const cw : any = $('#title1').width();
  const aw : any = $('#subtitle').width();

  const ns : number = (60/cw)*aw;
  
  $('#title1').css("font-size", ns);
  $('.central').css("font-size", ns);

}
