import { TimelineMax } from 'gsap';

var tl = new TimelineMax;

tl 
 
  .fromTo('.header__top', 1, {y:-100}, {y:0})
  .fromTo('.jobs', 1, {x:500}, {x:0}, 1)
  .staggerFromTo('.nav__item', 0.5, {y:-100}, {y:0}, 0.25)
  .staggerFromTo('.main__col-wrapp', 1, {x:2000,scale:0.1}, {x:0,scale:1}, 0.5);
