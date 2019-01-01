// tensormedical.ai Landing Page TS Script
import $ from 'jquery';
import 'particles.js';

init();

function init() : void {
  const cw : any = $('#title1').width();
  const aw : any = $('#subtitle').width();

  const ns : number = (60/cw)*aw;
  
  $('#title1').css("font-size", ns);
  $('.central').css("font-size", ns);

  let bool : number = Math.random();

  if (bool < 0.5){
    //@ts-ignore
    particlesJS.load('background', 'js/assets/config.json', () => {
      console.log('callback - particles.js config loaded');
    });
    // @ts-ignore
    particlesJS.load('background2', 'js/assets/config2.json', () => {
      console.log('callback - particles.js config loaded');
    });
  } else {
    $('html').css('background', 'black');
    $('.container').css('color', 'white')
    $('.mail a').css('color', 'white');
    //@ts-ignore
    particlesJS.load('background', 'js/assets/config_b.json', () => {
      console.log('callback - particles.js config loaded');
    });
    // @ts-ignore
    particlesJS.load('background2', 'js/assets/config2_b.json', () => {
      console.log('callback - particles.js config loaded');
    });
  } 

}
