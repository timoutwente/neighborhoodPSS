(function(){var $gwt_version = "1.5.3";var $wnd = window;var $doc = $wnd.document;var $moduleName, $moduleBase;var $stats = $wnd.__gwtStatsEvent ? function(a) {return $wnd.__gwtStatsEvent(a);} : null;$stats && $stats({moduleName:'com.google.gwt.visualization.customvisualization.CustomVisualization',subSystem:'startup',evtGroup:'moduleStartup',millis:(new Date()).getTime(),type:'moduleEvalStart'});var z='',D=', Row size: ',kb=', Size: ',sb=':',qb='<\/b>',pb='<b>',eb='Cannot create a column with a negative index: ',fb='Cannot create a row with a negative index: ',xb='CustomVisualization',v='DOMMouseScroll',jb='Index: ',Cb='Integer;',Fb='JavaScriptObject$;',Db='Object;',C='Row index: ',Ab='Widget;',Eb='[Lcom.google.gwt.core.client.',zb='[Lcom.google.gwt.user.client.ui.',Bb='[Ljava.lang.',ib='__widgetID',mb='backgroundColor',l='blur',m='change',x='click',hb='col',gb='colgroup',wb='com.google.gwt.visualization.customvisualization.client.CustomVisualizationEntryPoint',w='contextmenu',cb='dblclick',t='error',nb='focus',yb='keydown',ac='keypress',bc='keyup',y='left',cc='load',dc='losecapture',ub='moduleStartup',n='mousedown',o='mousemove',p='mouseout',q='mouseover',r='mouseup',u='mousewheel',vb='onModuleLoadStart',B='position',s='scroll',lb='select',rb='selection changed',tb='startup',bb='table',E='tagName',db='tbody',F='td',A='top',ab='tr',ob='white';var _;function Am(a){return (this==null?null:this)===(a==null?null:a)}
function Bm(){return this.$H||(this.$H=++Ac)}
function ym(){}
_=ym.prototype={};_.eQ=Am;_.hC=Bm;_.tM=Ar;_.tI=1;function hc(b){var a,c;c=[];for(a=0;a<b.length;++a){c[a]=b[a]}c.constructor=$wnd.Array;return c}
function oc(b,a){return b.tM==Ar||b.tI==2?b.eQ(a):(b==null?null:b)===(a==null?null:a)}
function qc(a){return a.tM==Ar||a.tI==2?a.hC():a.$H||(a.$H=++Ac)}
var Ac=0;function Ec(b){var a=b.firstChild;while(a&&a.nodeType!=1)a=a.nextSibling;return a}
function Fc(a){var b=a.parentNode;if(b==null){return null}if(b.nodeType!=1)b=null;return b}
function ad(a,b){while(a.firstChild){a.removeChild(a.firstChild)}if(b!=null){a.appendChild($doc.createTextNode(b))}}
function wd(e,c){var d=[null,0,false,[0,0]];var f=d[e];var a=new Array(c);for(var b=0;b<c;++b){a[b]=f}return a}
function xd(a,f,c,b,e){var d;d=wd(e,b);yd(a,f,c,d);return d}
function yd(b,d,c,a){if(!zd){zd=new sd()}Cd(a,zd);a.tI=d;a.qI=c;return a}
function Ad(a,b,c){if(c!=null){if(a.qI>0&&!Fd(c.tI,a.qI)){throw new xl()}if(a.qI<0&&(c.tM==Ar||c.tI==2)){throw new xl()}}return a[b]=c}
function Cd(a,c){for(var b in c){var d=c[b];if(d){a[b]=d}}return a}
function sd(){}
_=sd.prototype=new ym();_.tI=0;_.length=0;_.qI=0;var zd=null;function ae(b,a){return b&&!!me[b][a]}
function Fd(b,a){return b&&me[b][a]}
function be(b,a){if(b!=null&&!Fd(b.tI,a)){throw new Bl()}return b}
function ee(b,a){return b!=null&&ae(b.tI,a)}
var me=[{},{},{1:1,17:1,18:1,19:1},{2:1,17:1},{2:1,17:1},{2:1,17:1},{2:1,17:1},{9:1},{4:1,5:1,9:1},{4:1,5:1,8:1,9:1},{4:1,5:1,8:1,9:1},{4:1,5:1,8:1,9:1},{4:1,5:1,9:1},{4:1,5:1,8:1,9:1},{4:1,5:1,8:1,9:1},{4:1,5:1,6:1,8:1,9:1},{3:1},{4:1,5:1,6:1,8:1,9:1},{13:1},{13:1,17:1},{13:1,17:1},{4:1,5:1,9:1},{4:1,5:1,9:1},{7:1},{2:1,17:1},{2:1,17:1},{2:1,17:1},{2:1,17:1},{2:1,17:1},{17:1,20:1},{2:1,17:1},{2:1,17:1},{11:1,17:1,19:1,20:1},{18:1},{18:1},{2:1,17:1},{15:1},{15:1},{12:1},{12:1},{12:1},{15:1},{14:1,17:1},{15:1,17:1},{12:1},{2:1,17:1},{10:1}];function df(b,a,c){var d;if(a==gf){if(fg(b)==8192){gf=null}}d=cf;cf=b;try{c.z(b)}finally{cf=d}}
function hf(a,b){hg();Ff(a,b)}
var cf=null,gf=null;function nf(a){uf();if(!pf){pf=oq(new nq())}pq(pf,a)}
function qf(){var a;if(pf){for(a=fp(new dp(),pf);a.a<a.b.ab();){be(ip(a),3);fj()}}}
function rf(){var a,b;b=null;if(pf){for(a=fp(new dp(),pf);a.a<a.b.ab();){be(ip(a),3);b=null}}return b}
function tf(){__gwt_initHandlers(function(){},function(){return rf()},function(){qf()})}
function uf(){if(!sf){tf();sf=true}}
var pf=null,sf=false;function fg(a){switch(a.type){case l:return 4096;case m:return 1024;case x:return 1;case cb:return 2;case nb:return 2048;case yb:return 128;case ac:return 256;case bc:return 512;case cc:return 32768;case dc:return 8192;case n:return 4;case o:return 64;case p:return 32;case q:return 16;case r:return 8;case s:return 16384;case t:return 65536;case u:return 131072;case v:return 131072;case w:return 262144;}}
function hg(){if(!jg){Df();jg=true}}
function kg(a){return a!=null&&ae(a.tI,4)&&!(a!=null&&(a.tM!=Ar&&a.tI!=2))}
var jg=false;function Cf(c,e){var b=0,a=c.firstChild;while(a){if(a===e){return b}if(a.nodeType==1){++b}a=a.nextSibling}return -1}
function Df(){cg=function(b){if(bg(b)){var a=ag;if(a&&a.__listener){if(kg(a.__listener)){df(b,a,a.__listener);b.stopPropagation()}}}};bg=function(a){return true};dg=function(b){var c,a=this;while(a&&!(c=a.__listener)){a=a.parentNode}if(a&&a.nodeType!=1){a=null}if(c){if(kg(c)){df(b,a,c)}}};$wnd.addEventListener(x,cg,true);$wnd.addEventListener(cb,cg,true);$wnd.addEventListener(n,cg,true);$wnd.addEventListener(r,cg,true);$wnd.addEventListener(o,cg,true);$wnd.addEventListener(q,cg,true);$wnd.addEventListener(p,cg,true);$wnd.addEventListener(u,cg,true);$wnd.addEventListener(yb,bg,true);$wnd.addEventListener(bc,bg,true);$wnd.addEventListener(ac,bg,true)}
function Ef(e,g,d){var c=0,b=e.firstChild,a=null;while(b){if(b.nodeType==1){if(c==d){a=b;break}++c}b=b.nextSibling}e.insertBefore(g,a)}
function Ff(c,a){var b=(c.__eventBits||0)^a;c.__eventBits=a;if(!b)return;if(b&1)c.onclick=a&1?dg:null;if(b&2)c.ondblclick=a&2?dg:null;if(b&4)c.onmousedown=a&4?dg:null;if(b&8)c.onmouseup=a&8?dg:null;if(b&16)c.onmouseover=a&16?dg:null;if(b&32)c.onmouseout=a&32?dg:null;if(b&64)c.onmousemove=a&64?dg:null;if(b&128)c.onkeydown=a&128?dg:null;if(b&256)c.onkeypress=a&256?dg:null;if(b&512)c.onkeyup=a&512?dg:null;if(b&1024)c.onchange=a&1024?dg:null;if(b&2048)c.onfocus=a&2048?dg:null;if(b&4096)c.onblur=a&4096?dg:null;if(b&8192)c.onlosecapture=a&8192?dg:null;if(b&16384)c.onscroll=a&16384?dg:null;if(b&32768)c.onload=a&32768?dg:null;if(b&65536)c.onerror=a&65536?dg:null;if(b&131072)c.onmousewheel=a&131072?dg:null;if(b&262144)c.oncontextmenu=a&262144?dg:null}
var ag=null,bg=null,cg=null,dg=null;function sj(b,a){b.i=a}
function qj(){}
_=qj.prototype=new ym();_.tI=7;_.i=null;function dk(a){if(a.v()){throw new gm()}a.g=true;a.i.__listener=a;a.m();a.B()}
function ek(a){if(!a.v()){throw new gm()}try{a.C()}finally{a.n();a.i.__listener=null;a.g=false}}
function fk(a){if(ee(a.h,8)){be(a.h,8).D(a)}else if(a.h){throw new gm()}}
function gk(c,b){var a;a=c.h;if(!b){if(!!a&&a.v()){c.A()}c.h=null}else{if(a){throw new gm()}c.h=b;if(b.v()){c.y()}}}
function hk(){}
function ik(){}
function jk(){return this.g}
function kk(){dk(this)}
function lk(a){}
function mk(){ek(this)}
function nk(){}
function ok(){}
function tj(){}
_=tj.prototype=new qj();_.m=hk;_.n=ik;_.v=jk;_.y=kk;_.z=lk;_.A=mk;_.B=nk;_.C=ok;_.tI=8;_.g=false;_.h=null;function zi(){var a,b;for(b=this.w();b.u();){a=be(b.x(),5);a.y()}}
function Ai(){var a,b;for(b=this.w();b.u();){a=be(b.x(),5);a.A()}}
function Bi(){}
function Ci(){}
function xi(){}
_=xi.prototype=new tj();_.m=zi;_.n=Ai;_.B=Bi;_.C=Ci;_.tI=9;function sg(c,a,b){fk(a);Cj(c.a,a);b.appendChild(a.i);gk(a,c)}
function ug(b,c){var a;if(c.h!=b){return false}gk(c,null);a=c.i;Fc(a).removeChild(a);bk(b.a,c);return true}
function vg(){return xj(new vj(),this.a)}
function wg(a){return ug(this,a)}
function qg(){}
_=qg.prototype=new xi();_.w=vg;_.D=wg;_.tI=10;function mg(a,b){sg(a,b,a.i)}
function og(a){a.style[y]=z;a.style[A]=z;a.style[B]=z}
function pg(b){var a;a=ug(this,b);if(a){og(b.i)}return a}
function lg(){}
_=lg.prototype=new qg();_.D=pg;_.tI=11;function zg(a,b){if(a.e){throw new gm()}fk(b);sj(a,b.i);a.e=b;gk(b,a)}
function Ag(){if(this.e){return this.e.g}return false}
function Bg(){dk(this.e);this.i.__listener=this}
function Cg(a){mi(this.e,a)}
function Dg(){ek(this.e)}
function xg(){}
_=xg.prototype=new tj();_.v=Ag;_.y=Bg;_.z=Cg;_.A=Dg;_.tI=12;_.e=null;function bi(b,a){if(!b.e){b.e=mj(new lj());hf(b.i,1|(b.i.__eventBits||0))}pq(b.e,a)}
function ci(c,a){var b;b=c.a.rows.length;if(a>=b||a<0){throw km(new jm(),C+a+D+b)}}
function ei(d){var a,b,c;for(c=0;c<d.a.rows.length;++c){for(b=0;b<(ci(d,c),d.a.rows[c].cells.length);++b){a=ji(d,c,b);if(a){ni(d,a)}}}}
function ii(d,b){var a,c,e;c=b.target;for(;c;c=Fc(c)){if(kn(c[E]==null?null:String(c[E]),F)){e=Fc(c);a=Fc(e);if(a==d.a){return c}}if(c==d.a){return null}}return null}
function ji(e,d,b){var a,c;c=e.b.a.a.rows[d].cells[b];a=Ec(c);if(!a){return null}else{return Bh(e.f,a)}}
function ki(b,a){var c;if(a!=b.a.rows.length){ci(b,a)}c=$doc.createElement(ab);Ef(b.a,c,a);return a}
function li(d,c,a){var b,e;b=Ec(c);e=null;if(b){e=Bh(d.f,b)}if(e){ni(d,e);return true}else{if(a){c.innerHTML=z}return false}}
function mi(f,c){var a,b,d,e,g;switch(fg(c)){case 1:{if(f.e){e=ii(f,c);if(!e){return}g=Fc(e);a=Fc(g);d=Cf(a,g);b=Cf(g,e);oj(f.e,d,b)}break}}}
function ni(b,c){var a;if(c.h!=b){return false}gk(c,null);a=c.i;Fc(a).removeChild(a);Ch(b.f,a);return true}
function pi(b,a){b.c=a;ph(b.c)}
function qi(f,d,a,c){var e,b;eh(f,d,a);e=(b=f.b.a.a.rows[d].cells[a],li(f,b,c==null),b);if(c!=null){e.innerHTML=c||z}}
function ri(f,c,a,e){var d,b;eh(f,c,a);d=(b=f.b.a.a.rows[c].cells[a],li(f,b,e==null),b);if(e!=null){ad(d,e)}}
function si(){return th(new rh(),this.f)}
function ti(a){mi(this,a)}
function ui(a){return ni(this,a)}
function hh(){}
_=hh.prototype=new xi();_.w=si;_.z=ti;_.D=ui;_.tI=13;_.a=null;_.b=null;_.c=null;_.d=null;_.e=null;function ch(a){a.f=zh(new qh());a.d=$doc.createElement(bb);a.a=$doc.createElement(db);a.d.appendChild(a.a);a.i=a.d;a.b=ah(new Fg(),a);pi(a,nh(new mh(),a));return a}
function eh(e,d,b){var a,c;fh(e,d);if(b<0){throw km(new jm(),eb+b)}a=(ci(e,d),e.a.rows[d].cells.length);c=b+1-a;if(c>0){gh(e.a,d,c)}}
function fh(d,b){var a,c;if(b<0){throw km(new jm(),fb+b)}c=d.a.rows.length;for(a=c;a<=b;++a){ki(d,a)}}
function gh(f,d,c){var e=f.rows[d];for(var b=0;b<c;b++){var a=$doc.createElement(F);e.appendChild(a)}}
function Eg(){}
_=Eg.prototype=new hh();_.tI=14;function ih(){}
_=ih.prototype=new ym();_.tI=0;_.a=null;function ah(b,a){b.a=a;return b}
function Fg(){}
_=Fg.prototype=new ih();_.tI=0;function nh(b,a){b.b=a;return b}
function ph(a){if(!a.a){a.a=$doc.createElement(gb);Ef(a.b.d,a.a,0);a.a.appendChild($doc.createElement(hb))}}
function mh(){}
_=mh.prototype=new ym();_.tI=0;_.a=null;_.b=null;function zh(a){a.a=oq(new nq());return a}
function Bh(d,b){var c,a;c=(a=b[ib],a==null?-1:a);if(c<0){return null}return be(rq(d.a,c),5)}
function Ch(d,b){var c,a;c=(a=b[ib],a==null?-1:a);b[ib]=null;tq(d.a,c,null)}
function qh(){}
_=qh.prototype=new ym();_.tI=0;function th(b,a){b.b=a;vh(b);return b}
function vh(a){while(++a.a<a.b.a.b){if(rq(a.b.a,a.a)!=null){return}}}
function wh(){return this.a<this.b.a.b}
function xh(){var a;if(this.a>=this.b.a.b){throw new tr()}a=be(rq(this.b.a,this.a),5);vh(this);return a}
function rh(){}
_=rh.prototype=new ym();_.u=wh;_.x=xh;_.tI=0;_.a=-1;_.b=null;function ej(){ej=Ar;ij=Dq(new Cq());jj=br(new ar())}
function dj(b,a){ej();b.a=Bj(new uj());b.i=a;dk(b);return b}
function fj(){var b,a;ej();var c,d;for(d=(b=Cn(new Bn(),gq(jj.a).b.a),wp(new vp(),b));d.a.u();){c=be((a=d.a.x(),a.q()),5);if(c.v()){c.A()}}}
function hj(b){ej();var a,c;c=be(Ao(ij,b),6);if(c){return c}a=null;if(b!=null){if(!(a=$doc.getElementById(b))){return null}}if(ij.d==0){nf(new Ei())}if(!a){c=bj(new aj())}else{c=dj(new Di(),a)}ap(ij,b,c);cr(jj,c);return c}
function Di(){}
_=Di.prototype=new lg();_.tI=15;var ij,jj;function Ei(){}
_=Ei.prototype=new ym();_.tI=16;function cj(){cj=Ar;ej()}
function bj(a){cj();dj(a,$doc.body);return a}
function aj(){}
_=aj.prototype=new Di();_.tI=17;function vn(a,b){var c;while(a.u()){c=a.x();if(b==null?c==null:oc(b,c)){return a}}return null}
function xn(a){throw new rn()}
function yn(b){var a;a=vn(this.w(),b);return !!a}
function un(){}
_=un.prototype=new ym();_.k=xn;_.l=yn;_.tI=0;function np(a){this.j(this.ab(),a);return true}
function mp(b,a){throw new rn()}
function op(a,b){if(a<0||a>=b){rp(a,b)}}
function pp(e){var a,b,c,d,f;if((e==null?null:e)===(this==null?null:this)){return true}if(!(e!=null&&ae(e.tI,13))){return false}f=be(e,13);if(this.ab()!=f.ab()){return false}c=fp(new dp(),this);d=f.w();while(c.a<c.b.ab()){a=ip(c);b=ip(d);if(!(a==null?b==null:oc(a,b))){return false}}return true}
function qp(){var a,b,c;b=1;a=fp(new dp(),this);while(a.a<a.b.ab()){c=ip(a);b=31*b+(c==null?0:qc(c));b=~~b}return b}
function rp(a,b){throw km(new jm(),jb+a+kb+b)}
function sp(){return fp(new dp(),this)}
function cp(){}
_=cp.prototype=new un();_.k=np;_.j=mp;_.eQ=pp;_.hC=qp;_.w=sp;_.tI=18;function oq(a){a.a=xd(se,0,0,0,0);a.b=0;return a}
function pq(b,a){Ad(b.a,b.b++,a);return true}
function rq(b,a){op(a,b.b);return b.a[a]}
function sq(c,b,a){for(;a<c.b;++a){if(zr(b,c.a[a])){return a}}return -1}
function tq(d,a,b){var c;c=(op(a,d.b),d.a[a]);Ad(d.a,a,b);return c}
function vq(a){return Ad(this.a,this.b++,a),true}
function uq(a,b){if(a<0||a>this.b){rp(a,this.b)}this.a.splice(a,0,b);++this.b}
function wq(a){return sq(this,a,0)!=-1}
function xq(a){return op(a,this.b),this.a[a]}
function yq(){return this.b}
function nq(){}
_=nq.prototype=new cp();_.k=vq;_.j=uq;_.l=wq;_.t=xq;_.ab=yq;_.tI=19;_.a=null;_.b=0;function mj(a){a.a=xd(se,0,0,0,0);a.b=0;return a}
function oj(e,d,a){var b,c;for(c=fp(new dp(),e);c.a<c.b.ab();){b=be(ip(c),7);b.a.b=um(a);b.a.c=um(d-1);$wnd.google.visualization.events.trigger(b.a.d,lb,null)}}
function lj(){}
_=lj.prototype=new nq();_.tI=20;function Bj(a){a.a=xd(qe,0,5,4,0);return a}
function Cj(a,b){Fj(a,b,a.b)}
function Ej(b,c){var a;for(a=0;a<b.b;++a){if(b.a[a]==c){return a}}return -1}
function Fj(d,e,a){var b,c;if(a<0||a>d.b){throw new jm()}if(d.b==d.a.length){c=xd(qe,0,5,d.a.length*2,0);for(b=0;b<d.a.length;++b){Ad(c,b,d.a[b])}d.a=c}++d.b;for(b=d.b-1;b>a;--b){Ad(d.a,b,d.a[b-1])}Ad(d.a,a,e)}
function ak(c,b){var a;if(b<0||b>=c.b){throw new jm()}--c.b;for(a=b;a<c.b;++a){Ad(c.a,a,c.a[a+1])}Ad(c.a,c.b,null)}
function bk(b,c){var a;a=Ej(b,c);if(a==-1){throw new tr()}ak(b,a)}
function uj(){}
_=uj.prototype=new ym();_.tI=0;_.a=null;_.b=0;function xj(b,a){b.b=a;return b}
function zj(){return this.a<this.b.b-1}
function Aj(){if(this.a>=this.b.b){throw new tr()}return this.b.a[++this.a]}
function vj(){}
_=vj.prototype=new ym();_.u=zj;_.x=Aj;_.tI=0;_.a=-1;_.b=null;function Ak(b,c,a){var d;d=ql(new cl());d.d=c;mg(hj(a.id),d);if(d){Ck(c)}return d}
function Ck(b){b.getSelection=function(){return this.gwt_vis.r()};b.setSelection=function(a){this.gwt_vis.E(a)}}
function Dk(d,c){$wnd[d]=function(a){this.gwt_vis=Ak(c,this,a)};$wnd[d].prototype.draw=function(a,b){this.gwt_vis.o(a,b)}}
function xk(){}
_=xk.prototype=new xg();_.tI=21;_.d=null;function ql(a){a.a=ch(new Eg());zg(a,a.a);return a}
function sl(b,c){var a,d;ei(this.a);if(c){this.a.i.style[mb]=c.backgroundColor||ob}for(a=0;a<b.getNumberOfColumns();++a){qi(this.a,0,a,pb+b.getColumnLabel(a)+qb)}for(d=0;d<b.getNumberOfRows();++d){for(a=0;a<b.getNumberOfColumns();++a){ri(this.a,d+1,a,b.getFormattedValue(d,a))}}bi(this.a,el(new dl(),this))}
function tl(){return hc(yd(pe,0,-1,[{row:this.c.a,column:this.b.a}]))}
function ul(a){$wnd.alert(rb)}
function cl(){}
_=cl.prototype=new xk();_.o=sl;_.r=tl;_.E=ul;_.tI=22;_.b=null;_.c=null;function el(b,a){b.a=a;return b}
function dl(){}
_=dl.prototype=new ym();_.tI=23;_.a=null;function ol(a){if($wnd.onLoadCallback!=undefined){$wnd.onLoadCallback(a)}}
function ll(){}
_=ll.prototype=new ym();_.tI=0;function pn(){}
_=pn.prototype=new ym();_.tI=3;function em(){}
_=em.prototype=new pn();_.tI=4;function Cm(){}
_=Cm.prototype=new em();_.tI=5;function xl(){}
_=xl.prototype=new Cm();_.tI=25;function El(c,a){var b;b=new Al();return b}
function Al(){}
_=Al.prototype=new ym();_.tI=0;function Bl(){}
_=Bl.prototype=new Cm();_.tI=28;function gm(){}
_=gm.prototype=new Cm();_.tI=30;function km(b,a){return b}
function jm(){}
_=jm.prototype=new Cm();_.tI=31;function wm(){}
_=wm.prototype=new ym();_.tI=29;function qm(a,b){a.a=b;return a}
function sm(a){return a!=null&&ae(a.tI,11)&&be(a,11).a==this.a}
function tm(){return this.a}
function um(a){var b,c;if(a>-129&&a<128){b=a+128;c=(om(),pm)[b];if(!c){c=pm[b]=qm(new mm(),a)}return c}return qm(new mm(),a)}
function mm(){}
_=mm.prototype=new wm();_.eQ=sm;_.hC=tm;_.tI=32;_.a=0;function om(){om=Ar;pm=xd(re,0,11,256,0)}
var pm;function kn(b,a){if(a==null)return false;return b==a||b.toLowerCase()==a.toLowerCase()}
function nn(a){if(!(a!=null&&ae(a.tI,1))){return false}return String(this)==a}
function on(){return fn(this)}
_=String.prototype;_.eQ=nn;_.hC=on;_.tI=2;function an(){an=Ar;bn={};en={}}
function cn(e){var a,b,c,d;d=e.length;c=d<64?1:~~(d/32);a=0;for(b=0;b<d;b+=c){a<<=1;a+=e.charCodeAt(b)}a|=0;return a}
function fn(c){an();var a=sb+c;var b=en[a];if(b!=null){return b}b=bn[a];if(b==null){b=cn(c)}gn();return en[a]=b}
function gn(){if(dn==256){bn=en;en={};dn=0}++dn}
var bn,dn=0,en;function rn(){}
_=rn.prototype=new Cm();_.tI=35;function gq(b){var a;a=ao(new An(),b);return Bp(new up(),b,a)}
function hq(c){var a,b,d,e,f;if((c==null?null:c)===(this==null?null:this)){return true}if(!(c!=null&&ae(c.tI,14))){return false}e=be(c,14);if(be(this,14).d!=e.d){return false}for(b=Cn(new Bn(),ao(new An(),e).a);hp(b.a);){a=be(ip(b.a),12);d=a.q();f=a.s();if(!(d==null?be(this,14).c:d!=null&&ae(d.tI,1)?Co(be(this,14),be(d,1)):Bo(be(this,14),d,~~qc(d)))){return false}if(!zr(f,d==null?be(this,14).b:d!=null&&ae(d.tI,1)?be(this,14).e[sb+be(d,1)]:yo(be(this,14),d,~~qc(d)))){return false}}return true}
function iq(){var a,b,c;c=0;for(b=Cn(new Bn(),ao(new An(),be(this,14)).a);hp(b.a);){a=be(ip(b.a),12);c+=a.hC();c=~~c}return c}
function tp(){}
_=tp.prototype=new ym();_.eQ=hq;_.hC=iq;_.tI=0;function to(g,c){var e=g.a;for(var d in e){if(d==parseInt(d)){var a=e[d];for(var f=0,b=a.length;f<b;++f){c.k(a[f])}}}}
function uo(e,a){var d=e.e;for(var c in d){if(c.charCodeAt(0)==58){var b=ro(e,c.substring(1));a.k(b)}}}
function xo(b,a){return a==null?b.c:a!=null&&ae(a.tI,1)?Co(b,be(a,1)):Bo(b,a,~~qc(a))}
function Ao(b,a){return a==null?b.b:a!=null&&ae(a.tI,1)?b.e[sb+be(a,1)]:yo(b,a,~~qc(a))}
function yo(h,g,e){var a=h.a[e];if(a){for(var f=0,b=a.length;f<b;++f){var c=a[f];var d=c.q();if(h.p(g,d)){return c.s()}}}return null}
function Bo(h,g,e){var a=h.a[e];if(a){for(var f=0,b=a.length;f<b;++f){var c=a[f];var d=c.q();if(h.p(g,d)){return true}}}return false}
function Co(b,a){return sb+a in b.e}
function ap(b,a,c){return a==null?Eo(b,c):a!=null&&ae(a.tI,1)?Fo(b,be(a,1),c):Do(b,a,c,~~qc(a))}
function Do(i,g,j,e){var a=i.a[e];if(a){for(var f=0,b=a.length;f<b;++f){var c=a[f];var d=c.q();if(i.p(g,d)){var h=c.s();c.F(j);return h}}}else{a=i.a[e]=[]}var c=mr(new lr(),g,j);a.push(c);++i.d;return null}
function Eo(b,c){var a;a=b.b;b.b=c;if(!b.c){b.c=true;++b.d}return a}
function Fo(d,a,e){var b,c=d.e;a=sb+a;if(a in c){b=c[a]}else{++d.d}c[a]=e;return b}
function bp(a,b){return (a==null?null:a)===(b==null?null:b)||a!=null&&oc(a,b)}
function zn(){}
_=zn.prototype=new tp();_.p=bp;_.tI=0;_.a=null;_.b=null;_.c=false;_.d=0;_.e=null;function lq(b){var a,c,d;if((b==null?null:b)===(this==null?null:this)){return true}if(!(b!=null&&ae(b.tI,15))){return false}c=be(b,15);if(c.ab()!=this.ab()){return false}for(a=c.w();a.u();){d=a.x();if(!this.l(d)){return false}}return true}
function mq(){var a,b,c;a=0;for(b=this.w();b.u();){c=b.x();if(c!=null){a+=qc(c);a=~~a}}return a}
function jq(){}
_=jq.prototype=new un();_.eQ=lq;_.hC=mq;_.tI=36;function ao(b,a){b.a=a;return b}
function co(c){var a,b,d;if(c!=null&&ae(c.tI,12)){a=be(c,12);b=a.q();if(xo(this.a,b)){d=Ao(this.a,b);return Fq(a.s(),d)}}return false}
function eo(){return Cn(new Bn(),this.a)}
function fo(){return this.a.d}
function An(){}
_=An.prototype=new jq();_.l=co;_.w=eo;_.ab=fo;_.tI=37;_.a=null;function Cn(c,b){var a;c.b=b;a=oq(new nq());if(c.b.c){pq(a,ho(new go(),c.b))}uo(c.b,a);to(c.b,a);c.a=fp(new dp(),a);return c}
function En(){return hp(this.a)}
function Fn(){return be(ip(this.a),12)}
function Bn(){}
_=Bn.prototype=new ym();_.u=En;_.x=Fn;_.tI=0;_.a=null;_.b=null;function dq(b){var a;if(b!=null&&ae(b.tI,12)){a=be(b,12);if(zr(this.q(),a.q())&&zr(this.s(),a.s())){return true}}return false}
function eq(){var a,b;a=0;b=0;if(this.q()!=null){a=qc(this.q())}if(this.s()!=null){b=qc(this.s())}return a^b}
function bq(){}
_=bq.prototype=new ym();_.eQ=dq;_.hC=eq;_.tI=38;function ho(b,a){b.a=a;return b}
function jo(){return null}
function ko(){return this.a.b}
function lo(a){return Eo(this.a,a)}
function go(){}
_=go.prototype=new bq();_.q=jo;_.s=ko;_.F=lo;_.tI=39;_.a=null;function no(c,a,b){c.b=b;c.a=a;return c}
function po(){return this.a}
function qo(){return this.b.e[sb+this.a]}
function ro(b,a){return no(new mo(),a,b)}
function so(a){return Fo(this.b,this.a,a)}
function mo(){}
_=mo.prototype=new bq();_.q=po;_.s=qo;_.F=so;_.tI=40;_.a=null;_.b=null;function fp(b,a){b.b=a;return b}
function hp(a){return a.a<a.b.ab()}
function ip(a){if(a.a>=a.b.ab()){throw new tr()}return a.b.t(a.a++)}
function jp(){return this.a<this.b.ab()}
function kp(){return ip(this)}
function dp(){}
_=dp.prototype=new ym();_.u=jp;_.x=kp;_.tI=0;_.a=0;_.b=null;function Bp(b,a,c){b.a=a;b.b=c;return b}
function Ep(a){return xo(this.a,a)}
function Fp(){var a;return a=Cn(new Bn(),this.b.a),wp(new vp(),a)}
function aq(){return this.b.a.d}
function up(){}
_=up.prototype=new jq();_.l=Ep;_.w=Fp;_.ab=aq;_.tI=41;_.a=null;_.b=null;function wp(a,b){a.a=b;return a}
function zp(){return this.a.u()}
function Ap(){var a;return a=this.a.x(),a.q()}
function vp(){}
_=vp.prototype=new ym();_.u=zp;_.x=Ap;_.tI=0;_.a=null;function Dq(a){a.a=[];a.e={};a.c=false;a.b=null;a.d=0;return a}
function Fq(a,b){return (a==null?null:a)===(b==null?null:b)||a!=null&&oc(a,b)}
function Cq(){}
_=Cq.prototype=new zn();_.tI=42;function br(a){a.a=Dq(new Cq());return a}
function cr(c,a){var b;b=ap(c.a,a,c);return b==null}
function er(b){var a;return a=ap(this.a,b,this),a==null}
function fr(a){return xo(this.a,a)}
function gr(){var a;return a=Cn(new Bn(),gq(this.a).b.a),wp(new vp(),a)}
function hr(){return this.a.d}
function ar(){}
_=ar.prototype=new jq();_.k=er;_.l=fr;_.w=gr;_.ab=hr;_.tI=43;_.a=null;function mr(b,a,c){b.a=a;b.b=c;return b}
function or(){return this.a}
function pr(){return this.b}
function rr(b){var a;a=this.b;this.b=b;return a}
function lr(){}
_=lr.prototype=new bq();_.q=or;_.s=pr;_.F=rr;_.tI=44;_.a=null;_.b=null;function tr(){}
_=tr.prototype=new Cm();_.tI=45;function zr(a,b){return (a==null?null:a)===(b==null?null:b)||a!=null&&oc(a,b)}
function vl(){!!$stats&&$stats({moduleName:$moduleName,subSystem:tb,evtGroup:ub,millis:(new Date()).getTime(),type:vb,className:wb});Dk(xb,new ll());ol($moduleName)}
function gwtOnLoad(b,d,c){$moduleName=d;$moduleBase=c;if(b)try{vl()}catch(a){b(d)}else{vl()}}
function Ar(){}
var qe=El(zb,Ab),re=El(Bb,Cb),se=El(Bb,Db),pe=El(Eb,Fb);$stats && $stats({moduleName:'com.google.gwt.visualization.customvisualization.CustomVisualization',subSystem:'startup',evtGroup:'moduleStartup',millis:(new Date()).getTime(),type:'moduleEvalEnd'});if (com_google_gwt_visualization_customvisualization_CustomVisualization) {  var __gwt_initHandlers = com_google_gwt_visualization_customvisualization_CustomVisualization.__gwt_initHandlers;  com_google_gwt_visualization_customvisualization_CustomVisualization.onScriptLoad(gwtOnLoad);}})();