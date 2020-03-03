import * as $ from 'jquery';
import './styles/main.scss';

// одноременный scrollbar в блоке working
$(function() {
  $('.working__list-scrollbar').scroll(function() {
    $('.working__list').scrollLeft($('.working__list-scrollbar').scrollLeft());
  });
  $('.working__list').scroll(function() {
    $('.working__list-scrollbar').scrollLeft($('.working__list').scrollLeft());
  });
});
