var tl = gsap.timeline();

tl.from("#nav h3", {
  y:-50,
  opacity:0,
  delay:0.5,
  duration:0.9,
  stagger:0.3
})

tl.from("#mainHead h1",{
  x:-200,
  opacity:0,
  duration:1,
  stagger:0.3
})

tl.from("#sampleShots img",{
  x:100,
  rotate:45,
  opacity:0,
  duration:0.45,
  stagger:0.5
})