(self.webpackChunkpetcompufc_github_io=self.webpackChunkpetcompufc_github_io||[]).push([[766],{1202:function(e,a,t){"use strict";t.d(a,{qE:function(){return g}});var r=t(8481),o=t(3212),n=t(2980),i=t(7487),l=t(4821),s=t(5007);function c(e,a){if(null==e)return{};var t,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)t=n[r],a.indexOf(t)>=0||(o[t]=e[t]);return o}function u(){return(u=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var d=(0,n.forwardRef)((function(e,a){var t=u({position:"absolute",display:"flex",alignItems:"center",justifyContent:"center",right:"0",bottom:"0"},(0,n.useStyles)().badge);return s.createElement(n.chakra.div,u({ref:a},e,{className:(0,l.cx)("chakra-avatar__badge",e.className),__css:t}))}));function m(e){var a=e.split(" "),t=(0,r.Z)(a,2),o=t[0],n=t[1];return o&&n?""+o.charAt(0)+n.charAt(0):o.charAt(0)}l.__DEV__&&(d.displayName="AvatarBadge");var f=function(e){var a=e.name,t=e.getInitials,r=c(e,["name","getInitials"]),o=(0,n.useStyles)();return s.createElement(n.chakra.div,u({"aria-label":a},r,{__css:o.label}),a?null==t?void 0:t(a):null)},p=function(e){return s.createElement(n.chakra.svg,u({viewBox:"0 0 128 128",color:"#fff",width:"100%",height:"100%"},e),s.createElement("path",{fill:"currentColor",d:"M103,102.1388 C93.094,111.92 79.3504,118 64.1638,118 C48.8056,118 34.9294,111.768 25,101.7892 L25,95.2 C25,86.8096 31.981,80 40.6,80 L87.4,80 C96.019,80 103,86.8096 103,95.2 L103,102.1388 Z"}),s.createElement("path",{fill:"currentColor",d:"M63.9961647,24 C51.2938136,24 41,34.2938136 41,46.9961647 C41,59.7061864 51.2938136,70 63.9961647,70 C76.6985159,70 87,59.7061864 87,46.9961647 C87,34.2938136 76.6985159,24 63.9961647,24"}))},E={display:"inline-flex",alignItems:"center",justifyContent:"center",textAlign:"center",textTransform:"uppercase",fontWeight:"medium",position:"relative",flexShrink:0},g=(0,n.forwardRef)((function(e,a){var t=(0,n.useMultiStyleConfig)("Avatar",e),r=(0,i.Lr)(e),o=r.src,d=r.name,f=r.showBorder,g=r.borderRadius,h=void 0===g?"full":g,y=r.onError,_=r.getInitials,b=void 0===_?m:_,C=r.icon,w=void 0===C?s.createElement(p,null):C,P=r.loading,x=r.children,T=r.borderColor,O=c(r,["src","name","showBorder","borderRadius","onError","getInitials","icon","loading","children","borderColor"]),S=u({borderRadius:h,borderWidth:f?"2px":void 0},E,t.container);return T&&(S.borderColor=T),s.createElement(n.chakra.span,u({ref:a},O,{className:(0,l.cx)("chakra-avatar",e.className),__css:S}),s.createElement(n.StylesProvider,{value:t},s.createElement(v,{src:o,loading:P,onError:y,getInitials:b,name:d,borderRadius:h,icon:w}),x))}));l.__DEV__&&(g.displayName="Avatar");var v=function(e){var a=e.src,t=e.onError,r=e.getInitials,i=e.name,l=e.borderRadius,c=e.loading,u=e.icon,d=void 0===u?s.createElement(p,null):u,m=(0,o.d)({src:a,onError:t});return!a||!("loaded"===m)?i?s.createElement(f,{className:"chakra-avatar__initials",getInitials:r,name:i}):s.cloneElement(d,{role:"img"}):s.createElement(n.chakra.img,{src:a,alt:i,className:"chakra-avatar__img",loading:c,__css:{width:"100%",height:"100%",objectFit:"cover",borderRadius:l}})};l.__DEV__&&(v.displayName="AvatarImage")},9823:function(e,a,t){"use strict";t.d(a,{r:function(){return s}});var r=t(2980),o=t(4821),n=t(5007);function i(){return(i=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function l(e,a){if(null==e)return{};var t,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)t=n[r],a.indexOf(t)>=0||(o[t]=e[t]);return o}var s=(0,r.forwardRef)((function(e,a){var t=e.area,o=e.templateAreas,s=e.gap,c=e.rowGap,u=e.columnGap,d=e.column,m=e.row,f=e.autoFlow,p=e.autoRows,E=e.templateRows,g=e.autoColumns,v=e.templateColumns,h=l(e,["area","templateAreas","gap","rowGap","columnGap","column","row","autoFlow","autoRows","templateRows","autoColumns","templateColumns"]),y={display:"grid",gridArea:t,gridTemplateAreas:o,gridGap:s,gridRowGap:c,gridColumnGap:u,gridAutoColumns:g,gridColumn:d,gridRow:m,gridAutoFlow:f,gridAutoRows:p,gridTemplateRows:E,gridTemplateColumns:v};return n.createElement(r.chakra.div,i({ref:a,__css:y},h))}));o.__DEV__&&(s.displayName="Grid")},2200:function(e,a,t){"use strict";t.d(a,{x:function(){return s}});var r=t(2980),o=t(7487),n=t(4821),i=t(5007);function l(){return(l=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var s=(0,r.forwardRef)((function(e,a){var t=(0,r.useStyleConfig)("Text",e),s=function(e,a){if(null==e)return{};var t,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)t=n[r],a.indexOf(t)>=0||(o[t]=e[t]);return o}((0,o.Lr)(e),["className","align","decoration","casing"]),c=(0,n.filterUndefined)({textAlign:e.align,textDecoration:e.decoration,textTransform:e.casing});return i.createElement(r.chakra.p,l({ref:a,className:(0,n.cx)("chakra-text",e.className)},c,s,{__css:t}))}));n.__DEV__&&(s.displayName="Text")},2940:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return k}});var r=t(5007),o=t(6156),n=t(132),i=t(2980),l=t(7487),s=t(4821);function c(){return(c=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}function u(e,a){if(null==e)return{};var t,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)t=n[r],a.indexOf(t)>=0||(o[t]=e[t]);return o}var d=(0,i.forwardRef)((function(e,a){var t=(0,i.useMultiStyleConfig)("List",e),n=(0,l.Lr)(e),d=n.children,m=n.styleType,f=void 0===m?"none":m,p=n.stylePosition,E=n.spacing,g=u(n,["children","styleType","stylePosition","spacing"]),v=(0,s.getValidChildren)(d),h=E?(0,o.Z)({},"& > *:not(style) ~ *:not(style)",{mt:E}):{};return r.createElement(i.StylesProvider,{value:t},r.createElement(i.chakra.ul,c({ref:a,listStyleType:f,listStylePosition:p,role:"list",__css:c({},t.container,h)},g),v))}));s.__DEV__&&(d.displayName="List");var m=(0,i.forwardRef)((function(e,a){var t=u(e,["as"]);return r.createElement(d,c({ref:a,as:"ol",styleType:"decimal",marginLeft:"1em"},t))}));s.__DEV__&&(m.displayName="OrderedList");var f=(0,i.forwardRef)((function(e,a){var t=u(e,["as"]);return r.createElement(d,c({ref:a,as:"ul",styleType:"initial",marginLeft:"1em"},t))}));s.__DEV__&&(f.displayName="UnorderedList");var p=(0,i.forwardRef)((function(e,a){var t=(0,i.useStyles)();return r.createElement(i.chakra.li,c({ref:a},e,{__css:t.item}))}));s.__DEV__&&(p.displayName="ListItem");var E=(0,i.forwardRef)((function(e,a){var t=(0,i.useStyles)();return r.createElement(n.J,c({ref:a,role:"presentation"},e,{__css:t.icon}))}));s.__DEV__&&(E.displayName="ListIcon");var g=t(2331),v=t(2200),h=t(8540),y=t(9823),_=t(1046);function b(e){return(0,_.w_)({tag:"svg",attr:{viewBox:"0 0 12 16"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M11 10h1v3c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h3v1H1v10h10v-3zM6 2l2.25 2.25L5 7.5 6.5 9l3.25-3.25L12 8V2H6z"}}]})(e)}var C=t(6955),w=function(e){var a=e.children;return r.default.createElement(p,{borderRadius:5,bg:"white",boxShadow:"md",p:3,pos:"relative",marginLeft:4,my:3,maxW:"50em",transition:"all .4s",_even:{backgroundColor:"red.100"},_hover:{boxShadow:"lg",transform:"translateY(-10px)","&:after":{transform:"translateY(10px)"}},_after:{borderRadius:"100%",content:'""',position:"absolute",left:-6,bottom:"50%",width:4,height:4,backgroundColor:"red.500",transition:"transform .4s"}},a)},P=function(e){var a=e.eventos;return r.default.createElement(d,{as:"ol",css:{"&:before":{background:"red",content:"''",position:"absolute",left:-2,width:4,height:"100%"}},maxWidth:"fit-content",mx:"auto",position:"relative"},a.map((function(e){return r.default.createElement(w,{key:e.acontecimento},r.default.createElement(g.X,{as:"h4",size:"md"},e.ano),r.default.createElement(v.x,null,e.acontecimento))})))},x=t(7361),T=t(1202),O=function(e){var a=e.imagem,t=e.nome,o=e.titulo;return r.default.createElement(x.k,{direction:"column",align:"center",m:5},r.default.createElement(T.qE,{size:"lg",name:t,src:a}),r.default.createElement(g.X,{textAlign:"center",as:"h3",size:"md",mt:3},t),r.default.createElement(v.x,{color:"gray.500"},o))};O.defaultProps={imagem:""};var S=O,R=t(1783),k=function(){return r.default.createElement(C.Z,null,r.default.createElement(R.Z,{title:"Sobre Nós",description:"Saiba mais sobre o que é o PET Computação e a história do grupo até os dias de hoje"}),r.default.createElement(g.X,{as:"h1",my:5,size:"xl"},"Sobre o PET"),r.default.createElement(g.X,{as:"h2",my:3,size:"lg"},"Quem Somos?"),r.default.createElement(v.x,{maxWidth:"50em"},"O PETComp UFC é o Programa de Educação Tutorial do curso de Ciência da Computação da Universidade Federal do Ceará. O PET é um projeto da"," ",r.default.createElement(h.r,{color:"red.500",href:"http://portal.mec.gov.br/sesu-secretaria-de-educacao-superior/apresentacao",isExternal:!0},"Secretaria de Educação Superior (SESu)"," ",r.default.createElement(b,{style:{display:"inline"}}))," ","do"," ",r.default.createElement(h.r,{color:"red.500",href:"https://www.gov.br/mec/pt-br",isExternal:!0},"Ministério da Educação (MEC)"," ",r.default.createElement(b,{style:{display:"inline"}}))," ","que visa trabalhar com os PETianos (os alunos que compõem  o PET) nos 3 pilares do ensino superior: Ensino, Pesquisa e Extensão.",r.default.createElement("br",null),"Por causa desse objetivo o PET é considerado como um ambiente de preparo para alunos interessados em seguir carreira acadêmica. Junto ao tutor os PETianos realizam diversas atividades que abordam esses 3 pilares, como:"),r.default.createElement(d,{maxWidth:"50em",my:2,styleType:"disc"},r.default.createElement(p,null,r.default.createElement(h.r,{color:"red.500",href:"https://oci.org.br/",isExternal:!0},"Olimpíada Cearense de Informática"," ",r.default.createElement(b,{style:{display:"inline"}})),", focada em fomentar o interesse de alunos de ensino fundamental e médio na Computação"),r.default.createElement(p,null,"Coding, que visa ensinar programação aos alunos de ensino médio das escolas municipais de Fortaleza."),r.default.createElement(p,null,"Include, a semana de recepção dos novos alunos de"," ",r.default.createElement(h.r,{color:"red.500",href:"https://cc.ufc.br/",isExternal:!0},"Ciência da Computação"," ",r.default.createElement(b,{style:{display:"inline"}})))),r.default.createElement(g.X,{as:"h2",my:3,size:"lg"},"Timeline"),r.default.createElement(P,{eventos:[{ano:1992,acontecimento:"O PET Computação UFC é fundado pelo Prof. Riverson, sendo ele o primeiro a ocupar o cargo de tutor"},{ano:1996,acontecimento:"O PETComp realiza a sua primeira troca de tutor, assumindo o Prof. Tarcísio"},{ano:1997,acontecimento:"O PETComp troca de tutor novamente, sendo o novo tutor o Prof. Marcelino Pequeno"},{ano:1999,acontecimento:"A CAPES anuncia o fim do programa, que passar a existir sob emendas parlamentares, com uma quantidade menor de bolsistas e sem bolsa nem custeio"},{ano:2003,acontecimento:"O Programa é transferido da CAPES para a SESU, voltando a ter 12 bolsistas com custeio e pagamento de tutor"},{ano:2005,acontecimento:"O PET torna-se regulamentado por lei, dando mais segurança ao programa."},{ano:2005,acontecimento:"O PET Computação organiza a SESOL, uma referência nacional de encontro para desenvolvimento e utilização de softwares livres."},{ano:2010,acontecimento:"A duração do tutor no cargo é limitada a 6 anos"},{ano:2016,acontecimento:"O PETComp, pela primeira vez através do debate e da votação de alunos e professores, troca de tutor, assumindo o prof. Lincoln Rocha"}]}),r.default.createElement(g.X,{as:"h2",my:3,size:"lg"},"PETianos"),r.default.createElement(y.r,{w:"100%",templateColumns:"repeat(auto-fit, minmax(10rem, 1fr))"},r.default.createElement(S,{nome:"Lincoln Rocha",titulo:"Tutor",imagem:""}),r.default.createElement(S,{nome:"Felipe Keiler",titulo:"PETiano"}),r.default.createElement(S,{nome:"Gabriel Passos",titulo:"PETiano",imagem:""}),r.default.createElement(S,{nome:"Gabriel Brilhante",titulo:"PETiano"}),r.default.createElement(S,{nome:"Amanda Cavalcante",titulo:"PETiana"}),r.default.createElement(S,{nome:"João Victor",titulo:"PETiano"}),r.default.createElement(S,{nome:"Paloma Almeida",titulo:"PETiana"}),r.default.createElement(S,{nome:"Michael Nicholas",titulo:"PETiano"}),r.default.createElement(S,{nome:"Sabrina Sioli",titulo:"PETiana"}),r.default.createElement(S,{nome:"Mayron Alves",titulo:"PETiano"}),r.default.createElement(S,{nome:"Josué Hinrichs",titulo:"PETiano"})))}}}]);
//# sourceMappingURL=component---src-pages-sobre-jsx-7cee94b9f9fd68847a49.js.map