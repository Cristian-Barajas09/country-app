import{A as j,B as D,C as N,D as $,E as H,F as G,J,L as K,M as Q,N as O,R as C,S as W,a as E,b as k,c as I,d as A,e as L,f as B,g as z,h as d,i as P,j as T,k as c,l as u,m as y,n as l,o as r,p as o,q as p,r as x,s as _,t as F,u as a,v as w,w as f,x as q,y as M,z as R}from"./chunk-SRQDC6G2.js";var h=(()=>{let e=class e{constructor(i){this.http=i,this.apiUrl="https://restcountries.com/v3.1"}searchCountryByAlphaCode(i){let n=`${this.apiUrl}/alpha/${i}`;return this.http.get(n).pipe(k(m=>m.length>0?m[0]:null),I(()=>E(null)))}searchCapital(i){let n=`${this.apiUrl}/capital/${i}`;return this.http.get(n).pipe(I(()=>E([])))}searchCountry(i){let n=`${this.apiUrl}/name/${i}`;return this.http.get(n).pipe(I(()=>E([])))}searchRegion(i){let n=`${this.apiUrl}/region/${i}`;return this.http.get(n).pipe(I(()=>E([])))}};e.\u0275fac=function(n){return new(n||e)(z(G))},e.\u0275prov=L({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();var re=t=>["/countries/by",t];function ae(t,e){t&1&&(r(0,"div",2),a(1,` No hay paises que mostrar
`),o())}function ce(t,e){if(t&1&&(r(0,"tr")(1,"td"),a(2),o(),r(3,"td"),a(4),o(),r(5,"td"),p(6,"img",5),o(),r(7,"td"),a(8),o(),r(9,"td"),a(10),o(),r(11,"td"),a(12),M(13,"number"),o(),r(14,"td")(15,"a",6),a(16,"Info"),o()()()),t&2){let s=e.$implicit,i=e.index;c(2),w(i+1),c(2),f(" ",s.flag," "),c(2),l("src",s.flags.svg,T)("alt",s.name.common),c(2),f(" ",s.name.common," "),c(2),f(" ",s.capital," "),c(2),f(" ",R(13,8,s.population)," "),c(3),l("routerLink",q(10,re,s.cca3))}}function se(t,e){if(t&1&&(r(0,"table",3)(1,"thead")(2,"tr")(3,"th"),a(4,"#"),o(),r(5,"th"),a(6,"Icon"),o(),r(7,"th"),a(8,"Bandera"),o(),r(9,"th"),a(10,"Nombre"),o(),r(11,"th"),a(12,"Capital"),o(),r(13,"th"),a(14,"Poblacion"),o(),p(15,"th"),o()(),r(16,"tbody"),y(17,ce,17,12,"tr",4),o()()),t&2){let s=_();c(17),l("ngForOf",s.countries)}}var b=(()=>{let e=class e{constructor(){this.countries=[]}};e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=d({type:e,selectors:[["countries-table"]],inputs:{countries:"countries"},decls:3,vars:2,consts:[["table",""],["class","alert alert-warning text-center",4,"ngIf","ngIfElse"],[1,"alert","alert-warning","text-center"],[1,"table","table-hover"],[4,"ngFor","ngForOf"],[3,"src","alt"],[3,"routerLink"]],template:function(n,m){if(n&1&&y(0,ae,2,0,"div",1)(1,se,18,1,"ng-template",null,0,j),n&2){let v=F(2);l("ngIf",m.countries.length===0)("ngIfElse",v)}},dependencies:[D,N,Q,$],styles:["img[_ngcontent-%COMP%]{width:25px}"]});let t=e;return t})();var Y=(()=>{let e=class e{constructor(i){this.countriesService=i,this.countries=[]}searchByCapital(i){this.countriesService.searchCapital(i).subscribe(n=>{this.countries=n})}};e.\u0275fac=function(n){return new(n||e)(u(h))},e.\u0275cmp=d({type:e,selectors:[["app-by-capital-page"]],decls:10,vars:1,consts:[[1,"row"],[1,"col"],["placeholder","Buscar por capital",3,"onValue"],[3,"countries"]],template:function(n,m){n&1&&(r(0,"h2"),a(1,"Por capital"),o(),p(2,"hr"),r(3,"div",0)(4,"div",1)(5,"shared-search-box",2),x("onValue",function(S){return m.searchByCapital(S)}),o()()(),r(6,"div",0)(7,"div",1),p(8,"hr")(9,"countries-table",3),o()()),n&2&&(c(9),l("countries",m.countries))},dependencies:[C,b],encapsulation:2});let t=e;return t})();var Z=(()=>{let e=class e{constructor(i){this.countriesService=i,this.countries=[]}searchByCountry(i){this.countriesService.searchCountry(i).subscribe(n=>this.countries=n)}};e.\u0275fac=function(n){return new(n||e)(u(h))},e.\u0275cmp=d({type:e,selectors:[["app-by-country-page"]],decls:10,vars:1,consts:[[1,"row"],[1,"col"],["placeholder","Buscar por Pais",3,"onValue"],[3,"countries"]],template:function(n,m){n&1&&(r(0,"h2"),a(1,"Por paises"),o(),p(2,"hr"),r(3,"div",0)(4,"div",1)(5,"shared-search-box",2),x("onValue",function(S){return m.searchByCountry(S)}),o()()(),r(6,"div",0)(7,"div",1),p(8,"hr")(9,"countries-table",3),o()()),n&2&&(c(9),l("countries",m.countries))},dependencies:[C,b]});let t=e;return t})();var ee=(()=>{let e=class e{constructor(i){this.countriesService=i,this.countries=[]}searchByRegion(i){this.countriesService.searchRegion(i).subscribe(n=>this.countries=n)}};e.\u0275fac=function(n){return new(n||e)(u(h))},e.\u0275cmp=d({type:e,selectors:[["app-by-region-page"]],decls:10,vars:1,consts:[[1,"row"],[1,"col"],["placeholder","Buscar por Region",3,"onValue"],[3,"countries"]],template:function(n,m){n&1&&(r(0,"h2"),a(1,"Por regi\xF3n "),o(),p(2,"hr"),r(3,"div",0)(4,"div",1)(5,"shared-search-box",2),x("onValue",function(S){return m.searchByRegion(S)}),o()()(),r(6,"div",0)(7,"div",1),p(8,"hr")(9,"countries-table",3),o()()),n&2&&(c(9),l("countries",m.countries))},dependencies:[C,b],encapsulation:2});let t=e;return t})();function me(t,e){t&1&&(r(0,"div",2),a(1," Espere Por Favor "),o())}function le(t,e){if(t&1&&(r(0,"span",13),a(1),o()),t&2){let s=e.$implicit,i=_(2);c(),f(" ",i.country.translations[s].common," ")}}function pe(t,e){if(t&1&&(r(0,"div")(1,"div",3)(2,"div",4)(3,"h2"),a(4," Pais "),r(5,"strong"),a(6),o()(),p(7,"hr"),o(),r(8,"div",3)(9,"div",5)(10,"h3"),a(11,"Bandera"),o(),p(12,"img",6),o(),r(13,"div",7)(14,"h3"),a(15,"Informaci\xF3n"),o(),r(16,"ul",8)(17,"li",9)(18,"strong"),a(19,"Poblacion:"),o(),a(20),M(21,"number"),o(),r(22,"li",9)(23,"strong"),a(24,"Codigo:"),o(),a(25),o(),r(26,"li",9)(27,"strong"),a(28,"Contientes: "),o(),a(29),o()()()()(),r(30,"div",10)(31,"div",7)(32,"h3"),a(33,"Traducciones"),o(),r(34,"div",11),y(35,le,2,1,"span",12),o()()()()),t&2){let s=_();c(6),w(s.country.name.common),c(6),l("src",s.country.flags.svg,T)("alt",s.country.name.common),c(8),f(" ",R(21,7,s.country.population)," "),c(5),f(" ",s.country.cca3," "),c(4),f(" ",s.country.continents," "),c(6),l("ngForOf",s.translations)}}var te=(()=>{let e=class e{constructor(i,n,m){this.activatedRoute=i,this.router=n,this.countriesService=m,this.translations=[]}ngOnInit(){this.activatedRoute.params.pipe(A(({id:i})=>this.countriesService.searchCountryByAlphaCode(i))).subscribe(i=>i?(console.log(i),this.translations=Object.keys(i?.translations||{}),this.country=i):this.router.navigateByUrl(""))}};e.\u0275fac=function(n){return new(n||e)(u(J),u(K),u(h))},e.\u0275cmp=d({type:e,selectors:[["app-country-page"]],decls:3,vars:2,consts:[["loading",""],[4,"ngIf","ngIfElse"],[1,"alert","alert-info","text.center"],[1,"row"],[1,"col-12"],[1,"col-4"],[1,"img-thumbnail",3,"src","alt"],[1,"col"],[1,"list-group"],[1,"list-group-item"],[1,"row","mt-2"],[1,"d-flex","flex-wrap"],["class","badge bg-primary m-1",4,"ngFor","ngForOf"],[1,"badge","bg-primary","m-1"]],template:function(n,m){if(n&1&&y(0,me,2,0,"ng-template",null,0,j)(2,pe,36,9,"div",1),n&2){let v=F(1);c(2),l("ngIf",m.country)("ngIfElse",v)}},dependencies:[D,N,$]});let t=e;return t})();var de=[{path:"by-capital",component:Y},{path:"by-country",component:Z},{path:"by-region",component:ee},{path:"by/:id",component:te},{path:"**",redirectTo:"by-capital"}],ie=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=P({type:e}),e.\u0275inj=B({imports:[O.forChild(de)]});let t=e;return t})();var ke=(()=>{let e=class e{};e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=P({type:e}),e.\u0275inj=B({imports:[H,ie,W,O]});let t=e;return t})();export{ke as CountriesModule};
