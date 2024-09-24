import{B,s as A,o as u,c as m,m as p,a as o,b as I,d as E,e as O,f as z,R as W,g as J,r as Y,h as X,i as x,w as r,j as L,k,l as Z,n as y,v as $,T as ee,_ as oe,p as a,F as se,q as le,t as te,u as ne,x as ae,y as re,z as ie}from"./index-BXSS2--j.js";import{s as ce,a as ue,b as de,c as me,d as pe,e as fe,f as ge,g as _e}from"./index-BTv5qkjK.js";import{h as he,s as be,a as ve,b as xe,c as ye,d as we}from"./utils-DxrjDp5Y.js";import{a as j,s as Ve}from"./api-B6Lbcf1B.js";var ke=function(e){var t=e.dt;return`
.p-progressspinner {
    position: relative;
    margin: 0 auto;
    width: 100px;
    height: 100px;
    display: inline-block;
}

.p-progressspinner::before {
    content: "";
    display: block;
    padding-top: 100%;
}

.p-progressspinner-spin {
    height: 100%;
    transform-origin: center center;
    width: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    animation: p-progressspinner-rotate 2s linear infinite;
}

.p-progressspinner-circle {
    stroke-dasharray: 89, 200;
    stroke-dashoffset: 0;
    stroke: `.concat(t("progressspinner.color.1"),`;
    animation: p-progressspinner-dash 1.5s ease-in-out infinite, p-progressspinner-color 6s ease-in-out infinite;
    stroke-linecap: round;
}

@keyframes p-progressspinner-rotate {
    100% {
        transform: rotate(360deg);
    }
}
@keyframes p-progressspinner-dash {
    0% {
        stroke-dasharray: 1, 200;
        stroke-dashoffset: 0;
    }
    50% {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: -35px;
    }
    100% {
        stroke-dasharray: 89, 200;
        stroke-dashoffset: -124px;
    }
}
@keyframes p-progressspinner-color {
    100%,
    0% {
        stroke: `).concat(t("progressspinner.color.1"),`;
    }
    40% {
        stroke: `).concat(t("progressspinner.color.2"),`;
    }
    66% {
        stroke: `).concat(t("progressspinner.color.3"),`;
    }
    80%,
    90% {
        stroke: `).concat(t("progressspinner.color.4"),`;
    }
}
`)},Ce={root:"p-progressspinner",spin:"p-progressspinner-spin",circle:"p-progressspinner-circle"},Se=B.extend({name:"progressspinner",theme:ke,classes:Ce}),Pe={name:"BaseProgressSpinner",extends:A,props:{strokeWidth:{type:String,default:"2"},fill:{type:String,default:"none"},animationDuration:{type:String,default:"2s"}},style:Se,provide:function(){return{$pcProgressSpinner:this,$parentInstance:this}}},M={name:"ProgressSpinner",extends:Pe,inheritAttrs:!1,computed:{svgStyle:function(){return{"animation-duration":this.animationDuration}}}},je=["fill","stroke-width"];function De(l,e,t,c,s,d){return u(),m("div",p({class:l.cx("root"),role:"progressbar"},l.ptmi("root")),[(u(),m("svg",p({class:l.cx("spin"),viewBox:"25 25 50 50",style:d.svgStyle},l.ptm("spin")),[o("circle",p({class:l.cx("circle"),cx:"50",cy:"50",r:"20",fill:l.fill,"stroke-width":l.strokeWidth,strokeMiterlimit:"10"},l.ptm("circle")),null,16,je)],16))],16)}M.render=De;var Ue=function(e){var t=e.dt;return`
.p-message {
    border-radius: `.concat(t("message.border.radius"),`;
    outline-width: `).concat(t("message.border.width"),`;
    outline-style: solid;
}

.p-message-content {
    display: flex;
    align-items: center;
    padding: `).concat(t("message.content.padding"),`;
    gap: `).concat(t("message.content.gap"),`;
    height: 100%;
}

.p-message-icon {
    flex-shrink: 0;
}

.p-message-close-button {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    margin: 0 0 0 auto;
    overflow: hidden;
    position: relative;
    width: `).concat(t("message.close.button.width"),`;
    height: `).concat(t("message.close.button.height"),`;
    border-radius: `).concat(t("message.close.button.border.radius"),`;
    background: transparent;
    transition: background `).concat(t("message.transition.duration"),", color ").concat(t("message.transition.duration"),", outline-color ").concat(t("message.transition.duration"),", box-shadow ").concat(t("message.transition.duration"),`, opacity 0.3s;
    outline-color: transparent;
    color: inherit;
    padding: 0;
    border: none;
    cursor: pointer;
    user-select: none;
}

.p-message-close-icon {
    font-size: `).concat(t("message.close.icon.size"),`;
    width: `).concat(t("message.close.icon.size"),`;
    height: `).concat(t("message.close.icon.size"),`;
}

.p-message-close-button:focus-visible {
    outline-width: `).concat(t("message.close.button.focus.ring.width"),`;
    outline-style: `).concat(t("message.close.button.focus.ring.style"),`;
    outline-offset: `).concat(t("message.close.button.focus.ring.offset"),`;
}

.p-message-info {
    background: `).concat(t("message.info.background"),`;
    outline-color: `).concat(t("message.info.border.color"),`;
    color: `).concat(t("message.info.color"),`;
    box-shadow: `).concat(t("message.info.shadow"),`;
}

.p-message-info .p-message-close-button:focus-visible {
    outline-color: `).concat(t("message.info.close.button.focus.ring.color"),`;
    box-shadow: `).concat(t("message.info.close.button.focus.ring.shadow"),`;
}

.p-message-info .p-message-close-button:hover {
    background: `).concat(t("message.info.close.button.hover.background"),`;
}

.p-message-success {
    background: `).concat(t("message.success.background"),`;
    outline-color: `).concat(t("message.success.border.color"),`;
    color: `).concat(t("message.success.color"),`;
    box-shadow: `).concat(t("message.success.shadow"),`;
}

.p-message-success .p-message-close-button:focus-visible {
    outline-color: `).concat(t("message.success.close.button.focus.ring.color"),`;
    box-shadow: `).concat(t("message.success.close.button.focus.ring.shadow"),`;
}

.p-message-success .p-message-close-button:hover {
    background: `).concat(t("message.success.close.button.hover.background"),`;
}

.p-message-warn {
    background: `).concat(t("message.warn.background"),`;
    outline-color: `).concat(t("message.warn.border.color"),`;
    color: `).concat(t("message.warn.color"),`;
    box-shadow: `).concat(t("message.warn.shadow"),`;
}

.p-message-warn .p-message-close-button:focus-visible {
    outline-color: `).concat(t("message.warn.close.button.focus.ring.color"),`;
    box-shadow: `).concat(t("message.warn.close.button.focus.ring.shadow"),`;
}

.p-message-warn .p-message-close-button:hover {
    background: `).concat(t("message.warn.close.button.hover.background"),`;
}

.p-message-error {
    background: `).concat(t("message.error.background"),`;
    outline-color: `).concat(t("message.error.border.color"),`;
    color: `).concat(t("message.error.color"),`;
    box-shadow: `).concat(t("message.error.shadow"),`;
}

.p-message-error .p-message-close-button:focus-visible {
    outline-color: `).concat(t("message.error.close.button.focus.ring.color"),`;
    box-shadow: `).concat(t("message.error.close.button.focus.ring.shadow"),`;
}

.p-message-error .p-message-close-button:hover {
    background: `).concat(t("message.error.close.button.hover.background"),`;
}

.p-message-secondary {
    background: `).concat(t("message.secondary.background"),`;
    outline-color: `).concat(t("message.secondary.border.color"),`;
    color: `).concat(t("message.secondary.color"),`;
    box-shadow: `).concat(t("message.secondary.shadow"),`;
}

.p-message-secondary .p-message-close-button:focus-visible {
    outline-color: `).concat(t("message.secondary.close.button.focus.ring.color"),`;
    box-shadow: `).concat(t("message.secondary.close.button.focus.ring.shadow"),`;
}

.p-message-secondary .p-message-close-button:hover {
    background: `).concat(t("message.secondary.close.button.hover.background"),`;
}

.p-message-contrast {
    background: `).concat(t("message.contrast.background"),`;
    outline-color: `).concat(t("message.contrast.border.color"),`;
    color: `).concat(t("message.contrast.color"),`;
    box-shadow: `).concat(t("message.contrast.shadow"),`;
}

.p-message-contrast .p-message-close-button:focus-visible {
    outline-color: `).concat(t("message.contrast.close.button.focus.ring.color"),`;
    box-shadow: `).concat(t("message.contrast.close.button.focus.ring.shadow"),`;
}

.p-message-contrast .p-message-close-button:hover {
    background: `).concat(t("message.contrast.close.button.hover.background"),`;
}

.p-message-text {
    font-size: `).concat(t("message.text.font.size"),`;
    font-weight: `).concat(t("message.text.font.weight"),`;
}

.p-message-icon {
    font-size: `).concat(t("message.icon.size"),`;
    width: `).concat(t("message.icon.size"),`;
    height: `).concat(t("message.icon.size"),`;
}

.p-message-enter-from {
    opacity: 0;
}

.p-message-enter-active {
    transition: opacity 0.3s;
}

.p-message.p-message-leave-from {
    max-height: 1000px;
}

.p-message.p-message-leave-to {
    max-height: 0;
    opacity: 0;
    margin: 0;
}

.p-message-leave-active {
    overflow: hidden;
    transition: max-height 0.45s cubic-bezier(0, 1, 0, 1), opacity 0.3s, margin 0.3s;
}

.p-message-leave-active .p-message-close-button {
    opacity: 0;
}
`)},Ie={root:function(e){var t=e.props;return"p-message p-component p-message-"+t.severity},content:"p-message-content",icon:"p-message-icon",text:"p-message-text",closeButton:"p-message-close-button",closeIcon:"p-message-close-icon"},Ee=B.extend({name:"message",theme:Ue,classes:Ie}),Oe={name:"BaseMessage",extends:A,props:{severity:{type:String,default:"info"},closable:{type:Boolean,default:!1},life:{type:Number,default:null},icon:{type:String,default:void 0},closeIcon:{type:String,default:void 0},closeButtonProps:{type:null,default:null}},style:Ee,provide:function(){return{$pcMessage:this,$parentInstance:this}}},F={name:"Message",extends:Oe,inheritAttrs:!1,emits:["close","life-end"],timeout:null,data:function(){return{visible:!0}},mounted:function(){var e=this;this.life&&setTimeout(function(){e.visible=!1,e.$emit("life-end")},this.life)},methods:{close:function(e){this.visible=!1,this.$emit("close",e)}},computed:{iconComponent:function(){return{info:I,success:E,warn:O,error:z}[this.severity]},closeAriaLabel:function(){return this.$primevue.config.locale.aria?this.$primevue.config.locale.aria.close:void 0}},directives:{ripple:W},components:{TimesIcon:J,InfoCircleIcon:I,CheckIcon:E,ExclamationTriangleIcon:O,TimesCircleIcon:z}};function w(l){"@babel/helpers - typeof";return w=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},w(l)}function N(l,e){var t=Object.keys(l);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(l);e&&(c=c.filter(function(s){return Object.getOwnPropertyDescriptor(l,s).enumerable})),t.push.apply(t,c)}return t}function T(l){for(var e=1;e<arguments.length;e++){var t=arguments[e]!=null?arguments[e]:{};e%2?N(Object(t),!0).forEach(function(c){ze(l,c,t[c])}):Object.getOwnPropertyDescriptors?Object.defineProperties(l,Object.getOwnPropertyDescriptors(t)):N(Object(t)).forEach(function(c){Object.defineProperty(l,c,Object.getOwnPropertyDescriptor(t,c))})}return l}function ze(l,e,t){return(e=Le(e))in l?Object.defineProperty(l,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):l[e]=t,l}function Le(l){var e=Ne(l,"string");return w(e)=="symbol"?e:e+""}function Ne(l,e){if(w(l)!="object"||!l)return l;var t=l[Symbol.toPrimitive];if(t!==void 0){var c=t.call(l,e||"default");if(w(c)!="object")return c;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(l)}var Te=["aria-label"];function Be(l,e,t,c,s,d){var v=Y("TimesIcon"),V=X("ripple");return u(),x(ee,p({name:"p-message",appear:""},l.ptmi("transition")),{default:r(function(){return[L(o("div",p({class:l.cx("root"),role:"alert","aria-live":"assertive","aria-atomic":"true"},l.ptm("root")),[l.$slots.container?k(l.$slots,"container",{key:0,closeCallback:d.close}):(u(),m("div",p({key:1,class:l.cx("content")},l.ptm("content")),[k(l.$slots,"icon",{class:"p-message-icon"},function(){return[(u(),x(Z(l.icon?"span":null),p({class:[l.cx("icon"),l.icon]},l.ptm("icon")),null,16,["class"]))]}),l.$slots.default?(u(),m("div",p({key:0,class:["p-message-text",l.cx("text")]},l.ptm("text")),[k(l.$slots,"default")],16)):y("",!0),l.closable?L((u(),m("button",p({key:1,class:l.cx("closeButton"),"aria-label":d.closeAriaLabel,type:"button",onClick:e[0]||(e[0]=function(f){return d.close(f)})},T(T({},l.closeButtonProps),l.ptm("closeButton"))),[k(l.$slots,"closeicon",{},function(){return[l.closeIcon?(u(),m("i",p({key:0,class:[l.cx("closeIcon"),l.closeIcon]},l.ptm("closeIcon")),null,16)):(u(),x(v,p({key:1,class:[l.cx("closeIcon"),l.closeIcon]},l.ptm("closeIcon")),null,16,["class"]))]})],16,Te)),[[V]]):y("",!0)],16))],16),[[$,s.visible]])]}),_:3},16)}F.render=Be;const Ae="/assets/busca-DLKTOTqw.svg",Me={data(){return{value:null,visible:!1,value_aux:null,curriculo:null,icon:"pi pi-search",loading:!1,estado_civil:["Solteiro(a)","Casado(a)","Divorciado(a)","Viúvo(a)","Separado(a)","União Estável","Companheiro(a)","Desquitado(a)","Outro"],escolaridade:["Analfabeto(a)","Alfabetizado(a)","Ensino Fundamental Incompleto","Ensino Fundamental Completo","Ensino Médio Incompleto","Ensino Médio Completo","Técnico Incompleto","Técnico Completo","Superior Incompleto","Superior Completo","Pós-graduação Incompleta","Pós-graduação Completa","Mestrado Incompleto","Mestrado Completo","Doutorado Incompleto","Doutorado Completo","Pós-Doutorado","Outro"],ufs:["Acre","Alagoas","Amapá","Amazonas","Bahia","Ceará","Distrito Federal","Espírito Santo","Goiás","Maranhão","Mato Grosso","Mato Grosso do Sul","Minas Gerais","Pará","Paraíba","Paraná","Pernambuco","Piauí","Rio de Janeiro","Rio Grande do Norte","Rio Grande do Sul","Rondônia","Roraima","Santa Catarina","São Paulo","Sergipe","Tocantins"],setores:[],lojas:[]}},methods:{cadastro(){this.$router.push(`/cadastrar-curriculo/${this.value}`)},getSeverityDate(l){if(!l)return l;if(!(l instanceof Date)||isNaN(l))return"danger";const t=new Date-l,c=Math.floor(t/(1e3*60*60*24));return c<90?"success":c<=180?"primary":c<=365?"warn":c<=730?"danger":"contrast"},formatDateTime(l){if(!l||!(l instanceof Date)||isNaN(l))return l;const e=String(l.getDate()).padStart(2,"0"),t=String(l.getMonth()+1).padStart(2,"0"),c=l.getFullYear(),s=String(l.getHours()).padStart(2,"0"),d=String(l.getMinutes()).padStart(2,"0"),v=String(l.getSeconds()).padStart(2,"0");return`${e}/${t}/${c} ${s}:${d}:${v}`},searchCurriculo(){if(this.value&&typeof this.value=="string"){const l=this.value.replace(/\D/g,"");l.length==11&&this.value!=this.value_aux&&(this.loading=!0,this.icon="pi pi-spin pi-spinner",this.value_aux=this.value,j.getCurriculo(l).then(e=>{this.curriculo={},this.curriculo.apresentacao_curriculo=e.data.apresentacao_curriculo,this.curriculo.apresentacao_pessoal=e.data.apresentacao_pessoal,this.curriculo.apresentacao_observacao=e.data.apresentacao_observacao,e.data.foto&&(this.curriculo.foto=e.data.foto),e.data.curriculo&&(this.curriculo.curriculo=e.data.curriculo),this.curriculo.nome=e.data.nome,this.curriculo.idade=e.data.idade,this.curriculo.cpf=e.data.cpf,this.curriculo.rg=e.data.rg,this.curriculo.telefone=e.data.telefone,this.curriculo.telefone_adicional=e.data.telefone_adicional,this.curriculo.data_de_nascimento=new Date(e.data.data_de_nascimento),this.curriculo.estado_civil=e.data.estado_civil,this.curriculo.escolaridade=e.data.escolaridade,this.curriculo.possui_cursos_complementares=e.data.possui_cursos_complementares,this.curriculo.cursos_observacao=e.data.cursos_observacao,this.curriculo.possui_dependentes=e.data.possui_dependentes,this.curriculo.numero_dependentes=e.data.numero_dependentes,this.curriculo.observacao_dependentes=e.data.observacao_dependentes,this.curriculo.cep=e.data.cep,this.curriculo.uf=e.data.uf,this.curriculo.cidade=e.data.cidade,this.curriculo.bairro=e.data.bairro,this.curriculo.rua=e.data.rua,this.curriculo.numero=e.data.numero,this.curriculo.complemento=e.data.complemento,this.curriculo.possui_experiencia=e.data.possui_experiencia,this.curriculo.relato_experiencia=e.data.relato_experiencia,this.curriculo.relato_desligamento=e.data.relato_desligamento,this.curriculo.observacao_experiencia=e.data.observacao_experiencia,this.curriculo.relato_motivacao=e.data.relato_motivacao,this.curriculo.lojas_interesse=e.data.lojas_interesse,this.curriculo.setores_interesse=e.data.setores_interesse,this.curriculo.relato_interesse=e.data.relato_interesse,this.curriculo.relato_equipe=e.data.relato_equipe,this.curriculo.restricoes_horario=e.data.restricoes_horario,this.curriculo.observacoes_entrevista=e.data.observacoes_entrevista,this.curriculo.entrevistador=e.data.entrevistador,this.curriculo.setores_ideal=e.data.setores_ideal,this.curriculo.apto_contratacao=e.data.apto_contratacao,this.curriculo.ex_funcionario=e.data.ex_funcionario,this.curriculo.atualmente_contratado=e.data.atualmente_contratado,this.curriculo.observacao=e.data.observacao,this.curriculo.bate_perfil_setor=this.curriculo.setores_interesse.some(t=>this.curriculo.setores_ideal.some(c=>t.id===c.id)),this.curriculo.ultima_atualizacao=new Date(e.data.ultima_atualizacao),this.visible=!0,this.loading=!1,this.icon="pi pi-search"}).catch(e=>{he(e,this.$router,this.$toast),this.loading=!1,this.icon="pi pi-search",this.$confirm.require({message:`O CPF ${this.value} não foi encontrado no banco de currículos. Deseja cadastrar um novo currículo?`,header:"Confirmação",icon:"pi pi-exclamation-triangle",rejectProps:{label:"Não",severity:"secondary",outlined:!0},acceptProps:{label:"Sim"},accept:()=>{this.$router.push(`/cadastrar-curriculo/${l}`)},reject:()=>{this.value=null,this.value_aux=null,this.$toast.add({severity:"warn",summary:"Cancelado",detail:"Você optou por não cadastrar um novo currículo",life:3e3})}})}))}},editCurriculo(){this.$router.push(`/cadastrar-curriculo/${this.curriculo.cpf}`)},hideDialog(){this.value=null,this.visible=!1,this.value_aux=null}},mounted(){j.getStores().then(l=>{this.lojas=l.data,this.loadingLojas=!1}).catch(l=>{handleStoreErrors(l,this.$router,this.$toast)}),j.getDepartments().then(l=>{this.setores=l.data,this.loadingSetores=!1}).catch(l=>{handleDepartmentErrors(l,this.$router,this.$toast)})}},Fe={class:"card"},Re={key:0,class:"flex items-center justify-center",style:{"min-height":"36rem"}},qe={key:1,class:"flex items-center justify-center",style:{"min-height":"36rem"}},Ge=o("div",null,[o("img",{src:Ae,alt:"Logo",style:{height:"auto"}})],-1),He=[Ge],Ke={class:"inline-flex items-center gap-2 w-full"},Qe={key:0},We={key:1},Je=["src","onClick"],Ye={class:"flex justify-center w-full"},Xe={class:"flex flex-col gap-2 mx-auto",style:{"max-width":"40rem"}},Ze=o("div",{class:"text-center mt-4 mb-8 text-xl font-semibold"},"Dados Pessoais",-1),$e={class:"flex flex-row flex-wrap gap-3"},eo={class:"flex-1"},oo={class:"flex flex-col mb-6"},so=o("label",null,"Nome",-1),lo={class:"flex-1"},to={class:"flex flex-col mb-6"},no=o("label",null,"Idade",-1),ao={class:"flex flex-row flex-wrap gap-3"},ro={class:"flex-1"},io={class:"flex flex-col mb-6"},co=o("label",null,"CPF",-1),uo={class:"flex-1"},mo=o("label",null,"RG",-1),po={class:"flex flex-row flex-wrap gap-3"},fo={class:"flex-1"},go={class:"flex flex-col mb-6"},_o=o("label",null,"Telefone 1",-1),ho={class:"flex-1"},bo={class:"flex flex-col mb-6"},vo=o("label",null,"Telefone 2",-1),xo={class:"flex flex-row flex-wrap gap-3"},yo={class:"flex-1 mb-6"},wo=o("label",null,"Data de nascimento",-1),Vo={class:"flex-1 mb-6"},ko=o("label",null,"Estado Civil",-1),Co={class:"flex flex-row flex-wrap gap-3"},So={class:"flex-1 mb-2"},Po=o("label",null,"Escolaridade",-1),jo={class:"flex-1 mb-6"},Do=o("label",null,"Cursos Complementares",-1),Uo={class:"flex flex-col gap-2 mx-auto",style:{"max-width":"40rem"}},Io=o("div",{class:"text-center mt-4 mb-4 text-xl font-semibold"},"Currículo e Apresentação Pessoal",-1),Eo={class:"flex justify-center gap-2 mb-4"},Oo={class:"flex justify-between gap-2 mb-2"},zo=o("label",null,"Estado do Currículo",-1),Lo={class:"flex flex-col gap-2"},No={class:"flex justify-end"},To={class:"flex justify-between gap-2 mb-2"},Bo=o("label",null,"Apresentação Pessoal",-1),Ao={class:"flex flex-col gap-2"},Mo={class:"flex justify-end"},Fo={class:"flex flex-col gap-2 mt-8"},Ro=o("label",null,"Observações (Apresentação)",-1),qo={class:"flex flex-col gap-2 mx-auto",style:{"max-width":"40rem"}},Go=o("div",{class:"text-center mt-9 mb-8 text-xl font-semibold"},"Dependentes",-1),Ho={class:"flex flex-row flex-wrap gap-3"},Ko={class:"flex-1 mb-6"},Qo={class:"flex-1 mb-6"},Wo=o("label",null,"N° Dependentes",-1),Jo={class:"flex flex-col mb-6"},Yo=o("label",null,"Observações (Idade, Necessidades Especiais)",-1),Xo={class:"flex flex-col gap-2 mx-auto",style:{"max-width":"40rem"}},Zo=o("div",{class:"text-center mt-4 mb-8 text-xl font-semibold"},"Endereço",-1),$o={class:"flex flex-row flex-wrap gap-3"},es={class:"flex-1"},os={class:"flex flex-col mb-6"},ss={class:"w-full pr-7"},ls={class:"flex justify-between"},ts=o("div",null," CEP ",-1),ns={key:0,class:"pi pi-spin pi-spinner mt-8"},as={class:"flex-1"},rs={class:"flex flex-col mb-6"},is=o("label",null,"Unidade Federativa",-1),cs={class:"flex flex-row flex-wrap gap-3"},us={class:"flex-1"},ds={class:"flex flex-col mb-6"},ms=o("label",null,"Cidade",-1),ps={class:"flex-1"},fs={class:"flex flex-col mb-6"},gs=o("label",null,"Bairro",-1),_s={class:"flex flex-row flex-wrap gap-3"},hs={class:"flex-1"},bs={class:"flex flex-col mb-6"},vs=o("label",null,"Rua",-1),xs={class:"flex-1"},ys=o("label",null,"Número",-1),ws=o("label",null,"Complemento",-1),Vs={class:"flex flex-col gap-2 mx-auto",style:{"max-width":"40rem"}},ks=o("div",{class:"text-center mt-4 mb-8 text-xl font-semibold"},"Experiência",-1),Cs={class:"flex justify-between gap-2"},Ss=o("label",null,"Experiência Profissional Anterior.",-1),Ps={class:"flex flex-col gap-2"},js={class:"flex justify-end"},Ds=o("div",{class:"flex justify-end"},null,-1),Us={class:"flex justify-between gap-2 mt-5 mb-8"},Is=o("label",null,"Motivo da Saída dos Empregos Anteriores.",-1),Es={class:"flex flex-col gap-2"},Os={class:"flex justify-end"},zs={class:"flex flex-col mb-6"},Ls=o("label",null,"Observações (Empresas anteriores, Cargos, etc.)",-1),Ns={class:"flex flex-col gap-2 mx-auto",style:{"max-width":"40rem"}},Ts=o("div",{class:"text-center mt-4 mb-8 text-xl font-semibold"},"Entrevista",-1),Bs={class:"flex justify-between gap-2 mb-1"},As=o("label",null,"Por que você gostaria de trabalhar na Rede Bruda?",-1),Ms={class:"flex flex-col gap-2"},Fs={class:"flex justify-end"},Rs=o("label",{class:"mb-6"},"Quais Lojas/Setores você tem interesse em atuar? Escolha até 2 opções.",-1),qs={class:"flex flex-row flex-wrap gap-3 mb-2"},Gs={class:"flex-1"},Hs={class:"flex flex-col"},Ks=o("label",{for:"ms-cities"},"Lojas",-1),Qs={class:"flex-1"},Ws={class:"flex flex-col"},Js=o("label",{for:"ms-cities"},"Setores",-1),Ys={class:"flex justify-between gap-2 mb-6"},Xs=o("label",null,"Por que você escolheu essas lojas/setores?",-1),Zs={class:"flex flex-col gap-2"},$s={class:"flex justify-end"},el=o("div",{class:"flex justify-end"},null,-1),ol={class:"flex justify-between gap-2 mb-2"},sl=o("label",null,"Você prefere trabalhar em grupo ou sozinho? Por quê?",-1),ll={class:"flex flex-col gap-2"},tl={class:"flex justify-end"},nl={class:"flex flex-col mb-4"},al=o("label",null,"Observações (Restrições de horário, etc.)",-1),rl={class:"flex flex-col gap-2 mx-auto",style:{"max-width":"40rem"}},il=o("div",{class:"text-center mt-6 mb-8 text-xl font-semibold"},"Considerações Finais",-1),cl={class:"flex flex-col mb-1"},ul=o("label",null,"Nome do Entrevistador",-1),dl=o("label",{class:"mb-6"},"Quais Setores combinam com o perfil do candidato?",-1),ml={class:"flex-1"},pl={class:"flex flex-col mb-2"},fl=o("label",{for:"ms-cities"},"Setores",-1),gl=o("label",null,"Observações Finais",-1),_l={class:"flex flex-col gap-2 mx-auto",style:{"max-width":"40rem"}};function hl(l,e,t,c,s,d){const v=F,V=ve,f=ce,R=be,q=M,D=ue,U=de,G=xe,h=Ve,i=me,C=ye,H=pe,S=we,g=re,b=fe,_=ge,P=_e,K=ie,Q=le;return u(),m(se,null,[a(v,{class:"mb-3",severity:"warn",closable:""},{default:r(()=>[te(" Contratações só podem ser feitas via banco de dados oficial da Rede Bruda. Entrevistas devem ser conduzidas por profissionais capacitados do RH e todos os tópicos devem ser devimente preenchidos. ")]),_:1}),o("div",Fe,[o("div",null,[a(R,null,{default:r(()=>[a(V,{class:ne(s.icon)},null,8,["class"]),a(f,{modelValue:s.value,"onUpdate:modelValue":[e[0]||(e[0]=n=>s.value=n),d.searchCurriculo],fluid:"",autoClear:"",disabled:s.loading,mask:"999.999.999-99",placeholder:"Buscar Currículo por CPF..."},null,8,["modelValue","onUpdate:modelValue","disabled"])]),_:1})]),s.loading?(u(),m("div",Re,[a(q,{style:{width:"50px",height:"50px"}})])):(u(),m("div",qe,He))]),s.curriculo?(u(),x(Q,{key:0,onHide:d.hideDialog,visible:s.visible,"onUpdate:visible":e[43]||(e[43]=n=>s.visible=n),modal:"",style:{width:"50rem"},breakpoints:{"1199px":"75vw","575px":"90vw"}},{header:r(()=>[o("div",Ke,[s.curriculo.foto?(u(),m("div",We,[a(U,{alt:"Image",preview:""},{image:r(()=>[a(D,{image:"https://api.bruda.com.br/"+s.curriculo.foto.foto,size:"large",shape:"circle"},null,8,["image"])]),preview:r(n=>[o("img",{src:"https://api.bruda.com.br/"+s.curriculo.foto.foto,alt:"preview",style:ae(n.style),onClick:n.onClick},null,12,Je)]),_:1})])):(u(),m("div",Qe,[a(D,{icon:"pi pi-user",size:"large",shape:"circle"})])),o("div",Ye,[a(G,{value:"Ultima atualização: "+d.formatDateTime(s.curriculo.ultima_atualizacao),severity:d.getSeverityDate(s.curriculo.ultima_atualizacao)},null,8,["value","severity"])])])]),default:r(()=>[o("div",Xe,[Ze,o("div",$e,[o("div",eo,[o("div",oo,[a(i,null,{default:r(()=>[a(h,{readonly:"",maxlength:"200",fluid:"",modelValue:s.curriculo.nome,"onUpdate:modelValue":e[1]||(e[1]=n=>s.curriculo.nome=n)},null,8,["modelValue"]),so]),_:1})])]),o("div",lo,[o("div",to,[a(i,null,{default:r(()=>[a(C,{readonly:"",modelValue:s.curriculo.idade,"onUpdate:modelValue":e[2]||(e[2]=n=>s.curriculo.idade=n),fluid:""},null,8,["modelValue"]),no]),_:1})])])]),o("div",ao,[o("div",ro,[o("div",io,[a(i,null,{default:r(()=>[a(f,{readonly:"",mask:"999.999.999-99",modelValue:s.curriculo.cpf,"onUpdate:modelValue":e[3]||(e[3]=n=>s.curriculo.cpf=n),fluid:""},null,8,["modelValue"]),co]),_:1})])]),o("div",uo,[a(i,null,{default:r(()=>[a(f,{readonly:"",modelValue:s.curriculo.rg,"onUpdate:modelValue":e[4]||(e[4]=n=>s.curriculo.rg=n),mask:"9999?9999-99",placeholder:"99999999-99",fluid:""},null,8,["modelValue"]),mo]),_:1})])]),o("div",po,[o("div",fo,[o("div",go,[a(i,null,{default:r(()=>[a(f,{readonly:"",modelValue:s.curriculo.telefone,"onUpdate:modelValue":e[5]||(e[5]=n=>s.curriculo.telefone=n),mask:"(99) 9999-9999?9",placeholder:"(99) 9999-99999",fluid:""},null,8,["modelValue"]),_o]),_:1})])]),o("div",ho,[o("div",bo,[a(i,null,{default:r(()=>[a(f,{readonly:"",modelValue:s.curriculo.telefone_adicional,"onUpdate:modelValue":e[6]||(e[6]=n=>s.curriculo.telefone_adicional=n),mask:"(99) 9999-9999?9",placeholder:"(99) 9999-99999",fluid:""},null,8,["modelValue"]),vo]),_:1})])])]),o("div",xo,[o("div",yo,[a(i,null,{default:r(()=>[a(H,{style:{"min-width":"200px"},modelValue:s.curriculo.data_de_nascimento,"onUpdate:modelValue":e[7]||(e[7]=n=>s.curriculo.data_de_nascimento=n),showIcon:"",fluid:"",showOnFocus:!1},null,8,["modelValue"]),wo]),_:1})]),o("div",Vo,[a(i,null,{default:r(()=>[a(S,{disabled:"",modelValue:s.curriculo.estado_civil,"onUpdate:modelValue":e[8]||(e[8]=n=>s.curriculo.estado_civil=n),options:s.estado_civil,fluid:""},null,8,["modelValue","options"]),ko]),_:1})])]),o("div",Co,[o("div",So,[a(i,null,{default:r(()=>[a(S,{disabled:"",modelValue:s.curriculo.escolaridade,"onUpdate:modelValue":e[9]||(e[9]=n=>s.curriculo.escolaridade=n),options:s.escolaridade,fluid:""},null,8,["modelValue","options"]),Po]),_:1})]),o("div",jo,[a(g,{readonly:"",class:"w-full",modelValue:s.curriculo.possui_cursos_complementares,"onUpdate:modelValue":e[10]||(e[10]=n=>s.curriculo.possui_cursos_complementares=n),onLabel:"Possui Cursos Complementares",offLabel:"Não Possui Cursos Complementares",onChange:l.changeCursosComplementares},null,8,["modelValue","onChange"])])]),a(i,{class:"mb-2"},{default:r(()=>[a(b,{readonly:"",maxlength:"450",modelValue:s.curriculo.cursos_observacao,"onUpdate:modelValue":e[11]||(e[11]=n=>s.curriculo.cursos_observacao=n),fluid:"",rows:"3",cols:"30"},null,8,["modelValue"]),Do]),_:1})]),o("div",Uo,[Io,o("div",Eo,[s.curriculo.curriculo?(u(),x(U,{key:0,src:"https://api.bruda.com.br/"+s.curriculo.curriculo.foto,alt:"Image",preview:""},null,8,["src"])):y("",!0)]),o("div",Oo,[zo,o("div",Lo,[o("div",No,[a(_,{readonly:"",modelValue:s.curriculo.apresentacao_curriculo,"onUpdate:modelValue":e[12]||(e[12]=n=>s.curriculo.apresentacao_curriculo=n)},null,8,["modelValue"])])])]),o("div",To,[Bo,o("div",Ao,[o("div",Mo,[a(_,{readonly:"",modelValue:s.curriculo.apresentacao_pessoal,"onUpdate:modelValue":e[13]||(e[13]=n=>s.curriculo.apresentacao_pessoal=n)},null,8,["modelValue"])])])]),o("div",Fo,[a(i,null,{default:r(()=>[a(b,{readonly:"",maxlength:"450",modelValue:s.curriculo.apresentacao_observacao,"onUpdate:modelValue":e[14]||(e[14]=n=>s.curriculo.apresentacao_observacao=n),fluid:"",rows:"5",cols:"30"},null,8,["modelValue"]),Ro]),_:1})])]),o("div",qo,[Go,o("div",Ho,[o("div",Ko,[a(g,{readonly:"",class:"w-full",modelValue:s.curriculo.possui_dependentes,"onUpdate:modelValue":e[15]||(e[15]=n=>s.curriculo.possui_dependentes=n),onLabel:"Possui Dependentes",offLabel:"Não Possui Dependentes",onChange:l.changePossuiDependentes},null,8,["modelValue","onChange"])]),o("div",Qo,[a(i,null,{default:r(()=>[a(C,{readonly:"",modelValue:s.curriculo.numero_dependentes,"onUpdate:modelValue":e[16]||(e[16]=n=>s.curriculo.numero_dependentes=n),fluid:""},null,8,["modelValue"]),Wo]),_:1})])]),o("div",Jo,[a(i,null,{default:r(()=>[a(b,{readonly:"",modelValue:s.curriculo.observacao_dependentes,"onUpdate:modelValue":e[17]||(e[17]=n=>s.curriculo.observacao_dependentes=n),fluid:"",rows:"5",cols:"30"},null,8,["modelValue"]),Yo]),_:1})])]),o("div",Xo,[Zo,o("div",$o,[o("div",es,[o("div",os,[a(i,null,{default:r(()=>[a(f,{readonly:"",modelValue:s.curriculo.cep,"onUpdate:modelValue":e[18]||(e[18]=n=>s.curriculo.cep=n),mask:"99999-999",placeholder:"99999-999",fluid:""},null,8,["modelValue"]),o("label",ss,[o("div",ls,[ts,o("div",null,[l.loadingCep?(u(),m("i",ns)):y("",!0)])])])]),_:1})])]),o("div",as,[o("div",rs,[a(i,null,{default:r(()=>[a(S,{disabled:"",modelValue:s.curriculo.uf,"onUpdate:modelValue":e[19]||(e[19]=n=>s.curriculo.uf=n),options:s.ufs,fluid:""},null,8,["modelValue","options"]),is]),_:1})])])]),o("div",cs,[o("div",us,[o("div",ds,[a(i,null,{default:r(()=>[a(h,{readonly:"",maxlength:"150",fluid:"",modelValue:s.curriculo.cidade,"onUpdate:modelValue":e[20]||(e[20]=n=>s.curriculo.cidade=n)},null,8,["modelValue"]),ms]),_:1})])]),o("div",ps,[o("div",fs,[a(i,null,{default:r(()=>[a(h,{readonly:"",maxlength:"150",fluid:"",modelValue:s.curriculo.bairro,"onUpdate:modelValue":e[21]||(e[21]=n=>s.curriculo.bairro=n)},null,8,["modelValue"]),gs]),_:1})])])]),o("div",_s,[o("div",hs,[o("div",bs,[a(i,null,{default:r(()=>[a(h,{readonly:"",maxlength:"250",fluid:"",modelValue:s.curriculo.rua,"onUpdate:modelValue":e[22]||(e[22]=n=>s.curriculo.rua=n)},null,8,["modelValue"]),vs]),_:1})])]),o("div",xs,[a(i,null,{default:r(()=>[a(C,{readonly:"",modelValue:s.curriculo.numero,"onUpdate:modelValue":e[23]||(e[23]=n=>s.curriculo.numero=n),inputId:"minmax",min:1,max:999999,fluid:""},null,8,["modelValue"]),ys]),_:1})])]),a(i,{class:"mb-6"},{default:r(()=>[a(h,{readonly:"",maxlength:"250",fluid:"",modelValue:s.curriculo.complemento,"onUpdate:modelValue":e[24]||(e[24]=n=>s.curriculo.complemento=n)},null,8,["modelValue"]),ws]),_:1})]),o("div",Vs,[ks,a(g,{readonly:"",class:"w-full mb-6",modelValue:s.curriculo.possui_experiencia,"onUpdate:modelValue":e[25]||(e[25]=n=>s.curriculo.possui_experiencia=n),onLabel:"Possui Experiência Profissional",offLabel:"Não Possui Experiência Profissional",onChange:l.changePossuiExperiencia},null,8,["modelValue","onChange"]),o("div",Cs,[Ss,o("div",Ps,[o("div",js,[a(_,{readonly:"",modelValue:s.curriculo.relato_experiencia,"onUpdate:modelValue":e[26]||(e[26]=n=>s.curriculo.relato_experiencia=n)},null,8,["modelValue"])]),Ds])]),o("div",Us,[Is,o("div",Es,[o("div",Os,[a(_,{readonly:"",modelValue:s.curriculo.relato_desligamento,"onUpdate:modelValue":e[27]||(e[27]=n=>s.curriculo.relato_desligamento=n)},null,8,["modelValue"])])])]),o("div",zs,[a(i,null,{default:r(()=>[a(b,{readonly:"",maxlength:"450",modelValue:s.curriculo.observacao_experiencia,"onUpdate:modelValue":e[28]||(e[28]=n=>s.curriculo.observacao_experiencia=n),fluid:"",rows:"5",cols:"30"},null,8,["modelValue"]),Ls]),_:1})])]),o("div",Ns,[Ts,o("div",Bs,[As,o("div",Ms,[o("div",Fs,[a(_,{readonly:"",modelValue:s.curriculo.relato_motivacao,"onUpdate:modelValue":e[29]||(e[29]=n=>s.curriculo.relato_motivacao=n)},null,8,["modelValue"])])])]),Rs,o("div",qs,[o("div",Gs,[o("div",Hs,[a(i,null,{default:r(()=>[a(P,{disabled:"",modelValue:s.curriculo.view_lojas_interesse,"onUpdate:modelValue":e[30]||(e[30]=n=>s.curriculo.view_lojas_interesse=n),options:s.lojas,optionLabel:"name",class:"w-full"},null,8,["modelValue","options"]),Ks]),_:1})])]),o("div",Qs,[o("div",Ws,[a(i,null,{default:r(()=>[a(P,{disabled:"",modelValue:s.curriculo.view_setores_interesse,"onUpdate:modelValue":e[31]||(e[31]=n=>s.curriculo.view_setores_interesse=n),options:s.setores,optionLabel:"name",class:"w-full"},null,8,["modelValue","options"]),Js]),_:1})])])]),o("div",Ys,[Xs,o("div",Zs,[o("div",$s,[a(_,{readonly:"",modelValue:s.curriculo.relato_interesse,"onUpdate:modelValue":e[32]||(e[32]=n=>s.curriculo.relato_interesse=n)},null,8,["modelValue"])]),el])]),o("div",ol,[sl,o("div",ll,[o("div",tl,[a(_,{readonly:"",modelValue:s.curriculo.relato_equipe,"onUpdate:modelValue":e[33]||(e[33]=n=>s.curriculo.relato_equipe=n)},null,8,["modelValue"])])])]),a(g,{readonly:"",class:"w-full mb-6",modelValue:s.curriculo.restricoes_horario,"onUpdate:modelValue":e[34]||(e[34]=n=>s.curriculo.restricoes_horario=n),onLabel:"Possui Restrição de Horário",offLabel:"Não Possui Restrição de Horário"},null,8,["modelValue"]),o("div",nl,[a(i,null,{default:r(()=>[a(b,{readonly:"",maxlength:"450",modelValue:s.curriculo.observacoes_entrevista,"onUpdate:modelValue":e[35]||(e[35]=n=>s.curriculo.observacoes_entrevista=n),fluid:"",rows:"3",cols:"30"},null,8,["modelValue"]),al]),_:1})])]),o("div",rl,[il,o("div",cl,[a(i,null,{default:r(()=>[a(h,{readonly:"",fluid:"",modelValue:s.curriculo.entrevistador,"onUpdate:modelValue":e[36]||(e[36]=n=>s.curriculo.entrevistador=n)},null,8,["modelValue"]),ul]),_:1})]),dl,o("div",ml,[o("div",pl,[a(i,null,{default:r(()=>[a(P,{disabled:"",modelValue:s.curriculo.view_setores_ideal,"onUpdate:modelValue":e[37]||(e[37]=n=>s.curriculo.view_setores_ideal=n),options:s.setores,optionLabel:"name",class:"w-full"},null,8,["modelValue","options"]),fl]),_:1})])]),a(g,{readonly:"",class:"w-full mb-2",modelValue:s.curriculo.apto_contratacao,"onUpdate:modelValue":e[38]||(e[38]=n=>s.curriculo.apto_contratacao=n),onLabel:"Está Apto Para Contratação",offLabel:"Não Está Apto Para Contratação"},null,8,["modelValue"]),a(g,{readonly:"",class:"w-full mb-2",modelValue:s.curriculo.ex_funcionario,"onUpdate:modelValue":e[39]||(e[39]=n=>s.curriculo.ex_funcionario=n),onLabel:"É Ex-Funcionário",offLabel:"Não É Ex-Funcionário"},null,8,["modelValue"]),a(g,{readonly:"",class:"w-full mb-6",modelValue:s.curriculo.atualmente_contratado,"onUpdate:modelValue":e[40]||(e[40]=n=>s.curriculo.atualmente_contratado=n),onLabel:"Trabalha no Bruda Atualmente",offLabel:"Não Trabalha no Bruda Atualmente"},null,8,["modelValue"]),a(i,{class:"mb-4"},{default:r(()=>[a(b,{readonly:"",maxlength:"450",modelValue:s.curriculo.observacao,"onUpdate:modelValue":e[41]||(e[41]=n=>s.curriculo.observacao=n),fluid:"",rows:"5",cols:"30"},null,8,["modelValue"]),gl]),_:1})]),o("div",_l,[a(K,{type:"button",iconPos:"right",icon:"pi pi-save",label:"Atualizar",onClick:e[42]||(e[42]=n=>d.editCurriculo(s.curriculo))})])]),_:1},8,["onHide","visible"])):y("",!0)],64)}const wl=oe(Me,[["render",hl]]);export{wl as default};
