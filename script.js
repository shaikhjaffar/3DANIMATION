


(function(){
  function id(v){ return document.getElementById(v); }
  function loadbar() {
    var ovrl = id("overlay"),
        prog = id("progress"),
        stat = id("progstat"),
        img = document.images,
        c = 0,
        tot = img.length;
    if(tot == 0) return doneLoading();

    function imgLoaded(){
      c += 1;
      var perc = ((100/tot*c) << 0) +"%";
      prog.style.width = perc;
      stat.innerHTML = "Loading "+ perc;
      if(c===tot) return doneLoading();
    }
    function doneLoading(){
      setTimeout(function(){ 
        ovrl.style.opacity = 0;
        ovrl.style.display = "none";
      }, 1200);
    }
    for(var i=0; i<tot; i++) {
      var tImg     = new Image();
      tImg.onload  = imgLoaded;
      tImg.onerror = imgLoaded;
      tImg.src     = img[i].src;
    }    
  }
  document.addEventListener('DOMContentLoaded', loadbar, false);
}());
function locomotive() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true ,
  });
  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },

    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },

    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}
locomotive();


const canvas = document.querySelector("canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


window.addEventListener("resize", function () {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  render();
});

function files(index) {
  var data = `
  ./ezgif-frame-001.png
  ./ezgif-frame-002.png
  ./ezgif-frame-003.png
  ./ezgif-frame-004.png
  ./ezgif-frame-005.png
  ./ezgif-frame-006.png
  ./ezgif-frame-007.png
  ./ezgif-frame-008.png
  ./ezgif-frame-009.png
  ./ezgif-frame-010.png
  ./ezgif-frame-011.png
  ./ezgif-frame-012.png
  ./ezgif-frame-013.png
  ./ezgif-frame-014.png
  ./ezgif-frame-015.png
  ./ezgif-frame-016.png
  ./ezgif-frame-017.png
  ./ezgif-frame-018.png
  ./ezgif-frame-019.png
  ./ezgif-frame-020.png
  ./ezgif-frame-021.png
  ./ezgif-frame-022.png
  ./ezgif-frame-023.png
  ./ezgif-frame-024.png
  ./ezgif-frame-025.png
  ./ezgif-frame-026.png
  ./ezgif-frame-027.png
  ./ezgif-frame-028.png
  ./ezgif-frame-029.png
  ./ezgif-frame-030.png
  ./ezgif-frame-031.png
  ./ezgif-frame-032.png
  ./ezgif-frame-033.png
  ./ezgif-frame-034.png
  ./ezgif-frame-035.png
  ./ezgif-frame-036.png
  ./ezgif-frame-037.png
  ./ezgif-frame-038.png
  ./ezgif-frame-039.png
  ./ezgif-frame-040.png
  ./ezgif-frame-041.png
  ./ezgif-frame-042.png
  ./ezgif-frame-043.png
  ./ezgif-frame-044.png
  ./ezgif-frame-045.png
  ./ezgif-frame-046.png
  ./ezgif-frame-047.png
  ./ezgif-frame-048.png
  ./ezgif-frame-049.png
  ./ezgif-frame-050.png
  ./ezgif-frame-051.png
  ./ezgif-frame-052.png
  ./ezgif-frame-053.png
  ./ezgif-frame-054.png
  ./ezgif-frame-055.png
  ./ezgif-frame-056.png
  ./ezgif-frame-057.png
  ./ezgif-frame-058.png
  ./ezgif-frame-059.png
  ./ezgif-frame-060.png
  ./ezgif-frame-061.png
  ./ezgif-frame-062.png
  ./ezgif-frame-063.png
  ./ezgif-frame-064.png
  ./ezgif-frame-065.png
  ./ezgif-frame-066.png
  ./ezgif-frame-067.png
  ./ezgif-frame-068.png
  ./ezgif-frame-069.png
  ./ezgif-frame-070.png
  ./ezgif-frame-081.png
  ./ezgif-frame-082.png
  ./ezgif-frame-083.png
  ./ezgif-frame-084.png
  ./ezgif-frame-085.png
  ./ezgif-frame-086.png
  ./ezgif-frame-087.png
  ./ezgif-frame-088.png
  ./ezgif-frame-089.png
  ./ezgif-frame-080.png
  ./ezgif-frame-090.png
  ./ezgif-frame-091.png
  `;
  return data.split("\n")[index];
}

const frameCount = 91;

const images = [];
const imageSeq = {
  frame: 1,
};

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = files(i);
  images.push(img);
}

gsap.to(imageSeq, {
  frame: frameCount - 1,
  snap: "frame",
  ease: `none`,
  scrollTrigger: {
    scrub: 0.15,
    trigger: `#page>canvas`,
    start: `top top`,
    end: `600% top`,
    scroller: `#main`,
  },
  onUpdate: render,
});

images[1].onload = render;

function render() {
  scaleImage(images[imageSeq.frame], context);
}

function scaleImage(img, ctx) {
  var canvas = ctx.canvas;
  var hRatio = canvas.width / img.width;
  var vRatio = canvas.height / img.height;
  var ratio = Math.max(hRatio, vRatio);
  var centerShift_x = (canvas.width - img.width * ratio) / 2;
  var centerShift_y = (canvas.height - img.height * ratio) / 2;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.drawImage(
    img,
    0,
    0,
    img.width,
    img.height,
    centerShift_x,
    centerShift_y,
    img.width * ratio,
    img.height * ratio
  );
}
ScrollTrigger.create({
  trigger: "#page>canvas",
  pin: true,
  // markers:true,
  scroller: `#main`,
  start: `top top`,
  end: `600% top`,
});



gsap.to("#page1",{
  scrollTrigger:{
    trigger:`#page1`,
    start:`top top`,
    end:`bottom top`,
    pin:true,
    scroller:`#main`
  }
})
gsap.to("#page2",{
  scrollTrigger:{
    trigger:`#page2`,
    start:`top top`,
    end:`bottom top`,
    pin:true,
    scroller:`#main`
  }
})
gsap.to("#page3",{
  scrollTrigger:{
    trigger:`#page3`,
    start:`top top`,
    end:`bottom top`,
    pin:true,
    scroller:`#main`
  }
})
