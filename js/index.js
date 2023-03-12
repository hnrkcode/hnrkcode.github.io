(()=>{var e=function(e,i){var n=document.querySelector("#"+e+" > .particles-js-canvas-el");this.pJS={canvas:{el:n,w:n.offsetWidth,h:n.offsetHeight},particles:{number:{value:400,density:{enable:!0,value_area:800}},color:{value:"#fff"},shape:{type:"circle",stroke:{width:0,color:"#ff0000"},polygon:{nb_sides:5},image:{src:"",width:100,height:100}},opacity:{value:1,random:!1,anim:{enable:!1,speed:2,opacity_min:0,sync:!1}},size:{value:20,random:!1,anim:{enable:!1,speed:20,size_min:0,sync:!1}},line_linked:{enable:!0,distance:100,color:"#fff",opacity:1,width:1},move:{enable:!0,speed:2,direction:"none",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:3e3,rotateY:3e3}},array:[]},interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:"grab"},onclick:{enable:!0,mode:"push"},resize:!0},modes:{grab:{distance:100,line_linked:{opacity:1}},bubble:{distance:200,size:80,duration:.4},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}},mouse:{}},retina_detect:!1,fn:{interact:{},modes:{},vendors:{}},tmp:{}};var s=this.pJS;i&&Object.deepExtend(s,i),s.tmp.obj={size_value:s.particles.size.value,size_anim_speed:s.particles.size.anim.speed,move_speed:s.particles.move.speed,line_linked_distance:s.particles.line_linked.distance,line_linked_width:s.particles.line_linked.width,mode_grab_distance:s.interactivity.modes.grab.distance,mode_bubble_distance:s.interactivity.modes.bubble.distance,mode_bubble_size:s.interactivity.modes.bubble.size,mode_repulse_distance:s.interactivity.modes.repulse.distance},s.fn.retinaInit=function(){s.retina_detect&&window.devicePixelRatio>1?(s.canvas.pxratio=window.devicePixelRatio,s.tmp.retina=!0):(s.canvas.pxratio=1,s.tmp.retina=!1),s.canvas.w=s.canvas.el.offsetWidth*s.canvas.pxratio,s.canvas.h=s.canvas.el.offsetHeight*s.canvas.pxratio,s.particles.size.value=s.tmp.obj.size_value*s.canvas.pxratio,s.particles.size.anim.speed=s.tmp.obj.size_anim_speed*s.canvas.pxratio,s.particles.move.speed=s.tmp.obj.move_speed*s.canvas.pxratio,s.particles.line_linked.distance=s.tmp.obj.line_linked_distance*s.canvas.pxratio,s.interactivity.modes.grab.distance=s.tmp.obj.mode_grab_distance*s.canvas.pxratio,s.interactivity.modes.bubble.distance=s.tmp.obj.mode_bubble_distance*s.canvas.pxratio,s.particles.line_linked.width=s.tmp.obj.line_linked_width*s.canvas.pxratio,s.interactivity.modes.bubble.size=s.tmp.obj.mode_bubble_size*s.canvas.pxratio,s.interactivity.modes.repulse.distance=s.tmp.obj.mode_repulse_distance*s.canvas.pxratio},s.fn.canvasInit=function(){s.canvas.ctx=s.canvas.el.getContext("2d")},s.fn.canvasSize=function(){s.canvas.el.width=s.canvas.w,s.canvas.el.height=s.canvas.h,s&&s.interactivity.events.resize&&window.addEventListener("resize",(function(){s.canvas.w=s.canvas.el.offsetWidth,s.canvas.h=s.canvas.el.offsetHeight,s.tmp.retina&&(s.canvas.w*=s.canvas.pxratio,s.canvas.h*=s.canvas.pxratio),s.canvas.el.width=s.canvas.w,s.canvas.el.height=s.canvas.h,s.particles.move.enable||(s.fn.particlesEmpty(),s.fn.particlesCreate(),s.fn.particlesDraw(),s.fn.vendors.densityAutoParticles()),s.fn.vendors.densityAutoParticles()}))},s.fn.canvasPaint=function(){s.canvas.ctx.fillRect(0,0,s.canvas.w,s.canvas.h)},s.fn.canvasClear=function(){s.canvas.ctx.clearRect(0,0,s.canvas.w,s.canvas.h)},s.fn.particle=function(e,a,i){if(this.radius=(s.particles.size.random?Math.random():1)*s.particles.size.value,s.particles.size.anim.enable&&(this.size_status=!1,this.vs=s.particles.size.anim.speed/100,s.particles.size.anim.sync||(this.vs=this.vs*Math.random())),this.x=i?i.x:Math.random()*s.canvas.w,this.y=i?i.y:Math.random()*s.canvas.h,this.x>s.canvas.w-2*this.radius?this.x=this.x-this.radius:this.x<2*this.radius&&(this.x=this.x+this.radius),this.y>s.canvas.h-2*this.radius?this.y=this.y-this.radius:this.y<2*this.radius&&(this.y=this.y+this.radius),s.particles.move.bounce&&s.fn.vendors.checkOverlap(this,i),this.color={},"object"==typeof e.value)if(e.value instanceof Array){var n=e.value[Math.floor(Math.random()*s.particles.color.value.length)];this.color.rgb=t(n)}else null!=e.value.r&&null!=e.value.g&&null!=e.value.b&&(this.color.rgb={r:e.value.r,g:e.value.g,b:e.value.b}),null!=e.value.h&&null!=e.value.s&&null!=e.value.l&&(this.color.hsl={h:e.value.h,s:e.value.s,l:e.value.l});else"random"==e.value?this.color.rgb={r:Math.floor(256*Math.random())+0,g:Math.floor(256*Math.random())+0,b:Math.floor(256*Math.random())+0}:"string"==typeof e.value&&(this.color=e,this.color.rgb=t(this.color.value));this.opacity=(s.particles.opacity.random?Math.random():1)*s.particles.opacity.value,s.particles.opacity.anim.enable&&(this.opacity_status=!1,this.vo=s.particles.opacity.anim.speed/100,s.particles.opacity.anim.sync||(this.vo=this.vo*Math.random()));var r={};switch(s.particles.move.direction){case"top":r={x:0,y:-1};break;case"top-right":r={x:.5,y:-.5};break;case"right":r={x:1,y:-0};break;case"bottom-right":r={x:.5,y:.5};break;case"bottom":r={x:0,y:1};break;case"bottom-left":r={x:-.5,y:1};break;case"left":r={x:-1,y:0};break;case"top-left":r={x:-.5,y:-.5};break;default:r={x:0,y:0}}s.particles.move.straight?(this.vx=r.x,this.vy=r.y,s.particles.move.random&&(this.vx=this.vx*Math.random(),this.vy=this.vy*Math.random())):(this.vx=r.x+Math.random()-.5,this.vy=r.y+Math.random()-.5),this.vx_i=this.vx,this.vy_i=this.vy;var c=s.particles.shape.type;if("object"==typeof c){if(c instanceof Array){var o=c[Math.floor(Math.random()*c.length)];this.shape=o}}else this.shape=c;if("image"==this.shape){var l=s.particles.shape;this.img={src:l.image.src,ratio:l.image.width/l.image.height},this.img.ratio||(this.img.ratio=1),"svg"==s.tmp.img_type&&null!=s.tmp.source_svg&&(s.fn.vendors.createSvgImg(this),s.tmp.pushing&&(this.img.loaded=!1))}},s.fn.particle.prototype.draw=function(){var e=this;if(null!=e.radius_bubble)var t=e.radius_bubble;else t=e.radius;if(null!=e.opacity_bubble)var a=e.opacity_bubble;else a=e.opacity;if(e.color.rgb)var i="rgba("+e.color.rgb.r+","+e.color.rgb.g+","+e.color.rgb.b+","+a+")";else i="hsla("+e.color.hsl.h+","+e.color.hsl.s+"%,"+e.color.hsl.l+"%,"+a+")";switch(s.canvas.ctx.fillStyle=i,s.canvas.ctx.beginPath(),e.shape){case"circle":s.canvas.ctx.arc(e.x,e.y,t,0,2*Math.PI,!1);break;case"edge":s.canvas.ctx.rect(e.x-t,e.y-t,2*t,2*t);break;case"triangle":s.fn.vendors.drawShape(s.canvas.ctx,e.x-t,e.y+t/1.66,2*t,3,2);break;case"polygon":s.fn.vendors.drawShape(s.canvas.ctx,e.x-t/(s.particles.shape.polygon.nb_sides/3.5),e.y-t/.76,2.66*t/(s.particles.shape.polygon.nb_sides/3),s.particles.shape.polygon.nb_sides,1);break;case"star":s.fn.vendors.drawShape(s.canvas.ctx,e.x-2*t/(s.particles.shape.polygon.nb_sides/4),e.y-t/1.52,5.32*t/(s.particles.shape.polygon.nb_sides/3),s.particles.shape.polygon.nb_sides,2);break;case"image":if("svg"==s.tmp.img_type)var n=e.img.obj;else n=s.tmp.img_obj;n&&s.canvas.ctx.drawImage(n,e.x-t,e.y-t,2*t,2*t/e.img.ratio)}s.canvas.ctx.closePath(),s.particles.shape.stroke.width>0&&(s.canvas.ctx.strokeStyle=s.particles.shape.stroke.color,s.canvas.ctx.lineWidth=s.particles.shape.stroke.width,s.canvas.ctx.stroke()),s.canvas.ctx.fill()},s.fn.particlesCreate=function(){for(var e=0;e<s.particles.number.value;e++)s.particles.array.push(new s.fn.particle(s.particles.color,s.particles.opacity.value))},s.fn.particlesUpdate=function(){for(var e=0;e<s.particles.array.length;e++){var t=s.particles.array[e];if(s.particles.move.enable){var i=s.particles.move.speed/2;t.x+=t.vx*i,t.y+=t.vy*i}if(s.particles.opacity.anim.enable&&(1==t.opacity_status?(t.opacity>=s.particles.opacity.value&&(t.opacity_status=!1),t.opacity+=t.vo):(t.opacity<=s.particles.opacity.anim.opacity_min&&(t.opacity_status=!0),t.opacity-=t.vo),t.opacity<0&&(t.opacity=0)),s.particles.size.anim.enable&&(1==t.size_status?(t.radius>=s.particles.size.value&&(t.size_status=!1),t.radius+=t.vs):(t.radius<=s.particles.size.anim.size_min&&(t.size_status=!0),t.radius-=t.vs),t.radius<0&&(t.radius=0)),"bounce"==s.particles.move.out_mode)var n={x_left:t.radius,x_right:s.canvas.w,y_top:t.radius,y_bottom:s.canvas.h};else n={x_left:-t.radius,x_right:s.canvas.w+t.radius,y_top:-t.radius,y_bottom:s.canvas.h+t.radius};if(t.x-t.radius>s.canvas.w?(t.x=n.x_left,t.y=Math.random()*s.canvas.h):t.x+t.radius<0&&(t.x=n.x_right,t.y=Math.random()*s.canvas.h),t.y-t.radius>s.canvas.h?(t.y=n.y_top,t.x=Math.random()*s.canvas.w):t.y+t.radius<0&&(t.y=n.y_bottom,t.x=Math.random()*s.canvas.w),"bounce"===s.particles.move.out_mode)(t.x+t.radius>s.canvas.w||t.x-t.radius<0)&&(t.vx=-t.vx),(t.y+t.radius>s.canvas.h||t.y-t.radius<0)&&(t.vy=-t.vy);if(a("grab",s.interactivity.events.onhover.mode)&&s.fn.modes.grabParticle(t),(a("bubble",s.interactivity.events.onhover.mode)||a("bubble",s.interactivity.events.onclick.mode))&&s.fn.modes.bubbleParticle(t),(a("repulse",s.interactivity.events.onhover.mode)||a("repulse",s.interactivity.events.onclick.mode))&&s.fn.modes.repulseParticle(t),s.particles.line_linked.enable||s.particles.move.attract.enable)for(var r=e+1;r<s.particles.array.length;r++){var c=s.particles.array[r];s.particles.line_linked.enable&&s.fn.interact.linkParticles(t,c),s.particles.move.attract.enable&&s.fn.interact.attractParticles(t,c),s.particles.move.bounce&&s.fn.interact.bounceParticles(t,c)}}},s.fn.particlesDraw=function(){s.canvas.ctx.clearRect(0,0,s.canvas.w,s.canvas.h),s.fn.particlesUpdate();for(var e=0;e<s.particles.array.length;e++){s.particles.array[e].draw()}},s.fn.particlesEmpty=function(){s.particles.array=[]},s.fn.particlesRefresh=function(){cancelRequestAnimFrame(s.fn.checkAnimFrame),cancelRequestAnimFrame(s.fn.drawAnimFrame),s.tmp.source_svg=void 0,s.tmp.img_obj=void 0,s.tmp.count_svg=0,s.fn.particlesEmpty(),s.fn.canvasClear(),s.fn.vendors.start()},s.fn.interact.linkParticles=function(e,t){var a=e.x-t.x,i=e.y-t.y,n=Math.sqrt(a*a+i*i);if(n<=s.particles.line_linked.distance){var r=s.particles.line_linked.opacity-n/(1/s.particles.line_linked.opacity)/s.particles.line_linked.distance;if(r>0){var c=s.particles.line_linked.color_rgb_line;s.canvas.ctx.strokeStyle="rgba("+c.r+","+c.g+","+c.b+","+r+")",s.canvas.ctx.lineWidth=s.particles.line_linked.width,s.canvas.ctx.beginPath(),s.canvas.ctx.moveTo(e.x,e.y),s.canvas.ctx.lineTo(t.x,t.y),s.canvas.ctx.stroke(),s.canvas.ctx.closePath()}}},s.fn.interact.attractParticles=function(e,t){var a=e.x-t.x,i=e.y-t.y;if(Math.sqrt(a*a+i*i)<=s.particles.line_linked.distance){var n=a/(1e3*s.particles.move.attract.rotateX),r=i/(1e3*s.particles.move.attract.rotateY);e.vx-=n,e.vy-=r,t.vx+=n,t.vy+=r}},s.fn.interact.bounceParticles=function(e,t){var a=e.x-t.x,i=e.y-t.y;Math.sqrt(a*a+i*i)<=e.radius+t.radius&&(e.vx=-e.vx,e.vy=-e.vy,t.vx=-t.vx,t.vy=-t.vy)},s.fn.modes.pushParticles=function(e,t){s.tmp.pushing=!0;for(var a=0;a<e;a++)s.particles.array.push(new s.fn.particle(s.particles.color,s.particles.opacity.value,{x:t?t.pos_x:Math.random()*s.canvas.w,y:t?t.pos_y:Math.random()*s.canvas.h})),a==e-1&&(s.particles.move.enable||s.fn.particlesDraw(),s.tmp.pushing=!1)},s.fn.modes.removeParticles=function(e){s.particles.array.splice(0,e),s.particles.move.enable||s.fn.particlesDraw()},s.fn.modes.bubbleParticle=function(e){if(s.interactivity.events.onhover.enable&&a("bubble",s.interactivity.events.onhover.mode)){var t=e.x-s.interactivity.mouse.pos_x,i=e.y-s.interactivity.mouse.pos_y,n=1-(v=Math.sqrt(t*t+i*i))/s.interactivity.modes.bubble.distance;function r(){e.opacity_bubble=e.opacity,e.radius_bubble=e.radius}if(v<=s.interactivity.modes.bubble.distance){if(n>=0&&"mousemove"==s.interactivity.status){if(s.interactivity.modes.bubble.size!=s.particles.size.value)if(s.interactivity.modes.bubble.size>s.particles.size.value){(o=e.radius+s.interactivity.modes.bubble.size*n)>=0&&(e.radius_bubble=o)}else{var c=e.radius-s.interactivity.modes.bubble.size,o=e.radius-c*n;e.radius_bubble=o>0?o:0}var l;if(s.interactivity.modes.bubble.opacity!=s.particles.opacity.value)if(s.interactivity.modes.bubble.opacity>s.particles.opacity.value)(l=s.interactivity.modes.bubble.opacity*n)>e.opacity&&l<=s.interactivity.modes.bubble.opacity&&(e.opacity_bubble=l);else(l=e.opacity-(s.particles.opacity.value-s.interactivity.modes.bubble.opacity)*n)<e.opacity&&l>=s.interactivity.modes.bubble.opacity&&(e.opacity_bubble=l)}}else r();"mouseleave"==s.interactivity.status&&r()}else if(s.interactivity.events.onclick.enable&&a("bubble",s.interactivity.events.onclick.mode)){if(s.tmp.bubble_clicking){t=e.x-s.interactivity.mouse.click_pos_x,i=e.y-s.interactivity.mouse.click_pos_y;var v=Math.sqrt(t*t+i*i),p=((new Date).getTime()-s.interactivity.mouse.click_time)/1e3;p>s.interactivity.modes.bubble.duration&&(s.tmp.bubble_duration_end=!0),p>2*s.interactivity.modes.bubble.duration&&(s.tmp.bubble_clicking=!1,s.tmp.bubble_duration_end=!1)}function d(t,a,i,n,r){if(t!=a)if(s.tmp.bubble_duration_end){if(null!=i){o=t+(t-(n-p*(n-t)/s.interactivity.modes.bubble.duration)),"size"==r&&(e.radius_bubble=o),"opacity"==r&&(e.opacity_bubble=o)}}else if(v<=s.interactivity.modes.bubble.distance){if(null!=i)var c=i;else c=n;if(c!=t){var o=n-p*(n-t)/s.interactivity.modes.bubble.duration;"size"==r&&(e.radius_bubble=o),"opacity"==r&&(e.opacity_bubble=o)}}else"size"==r&&(e.radius_bubble=void 0),"opacity"==r&&(e.opacity_bubble=void 0)}s.tmp.bubble_clicking&&(d(s.interactivity.modes.bubble.size,s.particles.size.value,e.radius_bubble,e.radius,"size"),d(s.interactivity.modes.bubble.opacity,s.particles.opacity.value,e.opacity_bubble,e.opacity,"opacity"))}},s.fn.modes.repulseParticle=function(e){if(s.interactivity.events.onhover.enable&&a("repulse",s.interactivity.events.onhover.mode)&&"mousemove"==s.interactivity.status){var t=e.x-s.interactivity.mouse.pos_x,i=e.y-s.interactivity.mouse.pos_y,n=Math.sqrt(t*t+i*i),r={x:t/n,y:i/n},c=s.interactivity.modes.repulse.distance,o=(u=1/c*(-1*Math.pow(n/c,2)+1)*c*100,b=0,y=50,Math.min(Math.max(u,b),y)),l={x:e.x+r.x*o,y:e.y+r.y*o};"bounce"==s.particles.move.out_mode?(l.x-e.radius>0&&l.x+e.radius<s.canvas.w&&(e.x=l.x),l.y-e.radius>0&&l.y+e.radius<s.canvas.h&&(e.y=l.y)):(e.x=l.x,e.y=l.y)}else if(s.interactivity.events.onclick.enable&&a("repulse",s.interactivity.events.onclick.mode))if(s.tmp.repulse_finish||(s.tmp.repulse_count++,s.tmp.repulse_count==s.particles.array.length&&(s.tmp.repulse_finish=!0)),s.tmp.repulse_clicking){c=Math.pow(s.interactivity.modes.repulse.distance/6,3);var v=s.interactivity.mouse.click_pos_x-e.x,p=s.interactivity.mouse.click_pos_y-e.y,d=v*v+p*p,m=-c/d*1;d<=c&&function(){var t=Math.atan2(p,v);if(e.vx=m*Math.cos(t),e.vy=m*Math.sin(t),"bounce"==s.particles.move.out_mode){var a={x:e.x+e.vx,y:e.y+e.vy};(a.x+e.radius>s.canvas.w||a.x-e.radius<0)&&(e.vx=-e.vx),(a.y+e.radius>s.canvas.h||a.y-e.radius<0)&&(e.vy=-e.vy)}}()}else 0==s.tmp.repulse_clicking&&(e.vx=e.vx_i,e.vy=e.vy_i);var u,b,y},s.fn.modes.grabParticle=function(e){if(s.interactivity.events.onhover.enable&&"mousemove"==s.interactivity.status){var t=e.x-s.interactivity.mouse.pos_x,a=e.y-s.interactivity.mouse.pos_y,i=Math.sqrt(t*t+a*a);if(i<=s.interactivity.modes.grab.distance){var n=s.interactivity.modes.grab.line_linked.opacity-i/(1/s.interactivity.modes.grab.line_linked.opacity)/s.interactivity.modes.grab.distance;if(n>0){var r=s.particles.line_linked.color_rgb_line;s.canvas.ctx.strokeStyle="rgba("+r.r+","+r.g+","+r.b+","+n+")",s.canvas.ctx.lineWidth=s.particles.line_linked.width,s.canvas.ctx.beginPath(),s.canvas.ctx.moveTo(e.x,e.y),s.canvas.ctx.lineTo(s.interactivity.mouse.pos_x,s.interactivity.mouse.pos_y),s.canvas.ctx.stroke(),s.canvas.ctx.closePath()}}}},s.fn.vendors.eventsListeners=function(){"window"==s.interactivity.detect_on?s.interactivity.el=window:s.interactivity.el=s.canvas.el,(s.interactivity.events.onhover.enable||s.interactivity.events.onclick.enable)&&(s.interactivity.el.addEventListener("mousemove",(function(e){if(s.interactivity.el==window)var t=e.clientX,a=e.clientY;else t=e.offsetX||e.clientX,a=e.offsetY||e.clientY;s.interactivity.mouse.pos_x=t,s.interactivity.mouse.pos_y=a,s.tmp.retina&&(s.interactivity.mouse.pos_x*=s.canvas.pxratio,s.interactivity.mouse.pos_y*=s.canvas.pxratio),s.interactivity.status="mousemove"})),s.interactivity.el.addEventListener("mouseleave",(function(e){s.interactivity.mouse.pos_x=null,s.interactivity.mouse.pos_y=null,s.interactivity.status="mouseleave"}))),s.interactivity.events.onclick.enable&&s.interactivity.el.addEventListener("click",(function(){if(s.interactivity.mouse.click_pos_x=s.interactivity.mouse.pos_x,s.interactivity.mouse.click_pos_y=s.interactivity.mouse.pos_y,s.interactivity.mouse.click_time=(new Date).getTime(),s.interactivity.events.onclick.enable)switch(s.interactivity.events.onclick.mode){case"push":s.particles.move.enable||1==s.interactivity.modes.push.particles_nb?s.fn.modes.pushParticles(s.interactivity.modes.push.particles_nb,s.interactivity.mouse):s.interactivity.modes.push.particles_nb>1&&s.fn.modes.pushParticles(s.interactivity.modes.push.particles_nb);break;case"remove":s.fn.modes.removeParticles(s.interactivity.modes.remove.particles_nb);break;case"bubble":s.tmp.bubble_clicking=!0;break;case"repulse":s.tmp.repulse_clicking=!0,s.tmp.repulse_count=0,s.tmp.repulse_finish=!1,setTimeout((function(){s.tmp.repulse_clicking=!1}),1e3*s.interactivity.modes.repulse.duration)}}))},s.fn.vendors.densityAutoParticles=function(){if(s.particles.number.density.enable){var e=s.canvas.el.width*s.canvas.el.height/1e3;s.tmp.retina&&(e/=2*s.canvas.pxratio);var t=e*s.particles.number.value/s.particles.number.density.value_area,a=s.particles.array.length-t;a<0?s.fn.modes.pushParticles(Math.abs(a)):s.fn.modes.removeParticles(a)}},s.fn.vendors.checkOverlap=function(e,t){for(var a=0;a<s.particles.array.length;a++){var i=s.particles.array[a],n=e.x-i.x,r=e.y-i.y;Math.sqrt(n*n+r*r)<=e.radius+i.radius&&(e.x=t?t.x:Math.random()*s.canvas.w,e.y=t?t.y:Math.random()*s.canvas.h,s.fn.vendors.checkOverlap(e))}},s.fn.vendors.createSvgImg=function(e){var t=s.tmp.source_svg.replace(/#([0-9A-F]{3,6})/gi,(function(t,a,i,n){if(e.color.rgb)var s="rgba("+e.color.rgb.r+","+e.color.rgb.g+","+e.color.rgb.b+","+e.opacity+")";else s="hsla("+e.color.hsl.h+","+e.color.hsl.s+"%,"+e.color.hsl.l+"%,"+e.opacity+")";return s})),a=new Blob([t],{type:"image/svg+xml;charset=utf-8"}),i=window.URL||window.webkitURL||window,n=i.createObjectURL(a),r=new Image;r.addEventListener("load",(function(){e.img.obj=r,e.img.loaded=!0,i.revokeObjectURL(n),s.tmp.count_svg++})),r.src=n},s.fn.vendors.destroypJS=function(){cancelAnimationFrame(s.fn.drawAnimFrame),n.remove(),pJSDom=null},s.fn.vendors.drawShape=function(e,t,a,i,n,s){var r=n*s,c=n/s,o=180*(c-2)/c,l=Math.PI-Math.PI*o/180;e.save(),e.beginPath(),e.translate(t,a),e.moveTo(0,0);for(var v=0;v<r;v++)e.lineTo(i,0),e.translate(i,0),e.rotate(l);e.fill(),e.restore()},s.fn.vendors.exportImg=function(){window.open(s.canvas.el.toDataURL("image/png"),"_blank")},s.fn.vendors.loadImg=function(e){if(s.tmp.img_error=void 0,""!=s.particles.shape.image.src)if("svg"==e){var t=new XMLHttpRequest;t.open("GET",s.particles.shape.image.src),t.onreadystatechange=function(e){4==t.readyState&&(200==t.status?(s.tmp.source_svg=e.currentTarget.response,s.fn.vendors.checkBeforeDraw()):(console.log("Error pJS - Image not found"),s.tmp.img_error=!0))},t.send()}else{var a=new Image;a.addEventListener("load",(function(){s.tmp.img_obj=a,s.fn.vendors.checkBeforeDraw()})),a.src=s.particles.shape.image.src}else console.log("Error pJS - No image.src"),s.tmp.img_error=!0},s.fn.vendors.draw=function(){"image"==s.particles.shape.type?"svg"==s.tmp.img_type?s.tmp.count_svg>=s.particles.number.value?(s.fn.particlesDraw(),s.particles.move.enable?s.fn.drawAnimFrame=requestAnimFrame(s.fn.vendors.draw):cancelRequestAnimFrame(s.fn.drawAnimFrame)):s.tmp.img_error||(s.fn.drawAnimFrame=requestAnimFrame(s.fn.vendors.draw)):null!=s.tmp.img_obj?(s.fn.particlesDraw(),s.particles.move.enable?s.fn.drawAnimFrame=requestAnimFrame(s.fn.vendors.draw):cancelRequestAnimFrame(s.fn.drawAnimFrame)):s.tmp.img_error||(s.fn.drawAnimFrame=requestAnimFrame(s.fn.vendors.draw)):(s.fn.particlesDraw(),s.particles.move.enable?s.fn.drawAnimFrame=requestAnimFrame(s.fn.vendors.draw):cancelRequestAnimFrame(s.fn.drawAnimFrame))},s.fn.vendors.checkBeforeDraw=function(){"image"==s.particles.shape.type?"svg"==s.tmp.img_type&&null==s.tmp.source_svg?s.tmp.checkAnimFrame=requestAnimFrame(check):(cancelRequestAnimFrame(s.tmp.checkAnimFrame),s.tmp.img_error||(s.fn.vendors.init(),s.fn.vendors.draw())):(s.fn.vendors.init(),s.fn.vendors.draw())},s.fn.vendors.init=function(){s.fn.retinaInit(),s.fn.canvasInit(),s.fn.canvasSize(),s.fn.canvasPaint(),s.fn.particlesCreate(),s.fn.vendors.densityAutoParticles(),s.particles.line_linked.color_rgb_line=t(s.particles.line_linked.color)},s.fn.vendors.start=function(){a("image",s.particles.shape.type)?(s.tmp.img_type=s.particles.shape.image.src.substr(s.particles.shape.image.src.length-3),s.fn.vendors.loadImg(s.tmp.img_type)):s.fn.vendors.checkBeforeDraw()},s.fn.vendors.eventsListeners(),s.fn.vendors.start()};function t(e){e=e.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,(function(e,t,a,i){return t+t+a+a+i+i}));var t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t?{r:parseInt(t[1],16),g:parseInt(t[2],16),b:parseInt(t[3],16)}:null}function a(e,t){return t.indexOf(e)>-1}Object.deepExtend=function(e,t){for(var a in t)t[a]&&t[a].constructor&&t[a].constructor===Object?(e[a]=e[a]||{},arguments.callee(e[a],t[a])):e[a]=t[a];return e},window.requestAnimFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)},window.cancelRequestAnimFrame=window.cancelAnimationFrame||window.webkitCancelRequestAnimationFrame||window.mozCancelRequestAnimationFrame||window.oCancelRequestAnimationFrame||window.msCancelRequestAnimationFrame||clearTimeout,window.pJSDom=[],window.particlesJS=function(t,a){"string"!=typeof t&&(a=t,t="particles-js"),t||(t="particles-js");var i=document.getElementById(t),n="particles-js-canvas-el",s=i.getElementsByClassName(n);if(s.length)for(;s.length>0;)i.removeChild(s[0]);var r=document.createElement("canvas");r.className=n,r.style.width="100%",r.style.height="100%",null!=document.getElementById(t).appendChild(r)&&pJSDom.push(new e(t,a))},window.particlesJS.load=function(e,t,a){var i=new XMLHttpRequest;i.open("GET",t),i.onreadystatechange=function(t){if(4==i.readyState)if(200==i.status){var n=JSON.parse(t.currentTarget.response);window.particlesJS(e,n),a&&a()}else console.log("Error pJS - XMLHttpRequest status: "+i.status),console.log("Error pJS - File config not found")},i.send()};const i={particles:{number:{value:100,density:{enable:!0,value_area:1e3}},color:{value:"#8d99ae"},opacity:{value:.5,random:!1,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:0,random:!0,anim:{enable:!1,speed:40,size_min:.1,sync:!1}},line_linked:{enable:!0,distance:150,color:"#8d99ae",opacity:.7,width:1.5},move:{enable:!0,speed:5,direction:"none",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!1,mode:"repulse"},onclick:{enable:!0,mode:"repulse"},resize:!0}},retina_detect:!0};document.addEventListener("DOMContentLoaded",(function(){window.particlesJS("particles",i);const e=document.getElementById("intro");e.style.marginTop=-e.offsetHeight/2+"px"}),!1)})();