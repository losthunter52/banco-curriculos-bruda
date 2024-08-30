import{B as E,s as L,o as p,c as h,m as y,a as o,_ as N,b as t,w as a,d as A,e as C,F,f as I,n as B,g as M,h as R}from"./index-1tIofFCG.js";import{s as T,a as q,b as z,c as O,d as G}from"./index-D2TTJkJ0.js";import{h as H,s as Q,a as W,b as J,c as K,d as Y}from"./utils-jj8XC2MZ.js";import{a as w,s as X}from"./api-CgKWZU5c.js";var Z=function(e){var n=e.dt;return`
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
    stroke: `.concat(n("progressspinner.color.1"),`;
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
        stroke: `).concat(n("progressspinner.color.1"),`;
    }
    40% {
        stroke: `).concat(n("progressspinner.color.2"),`;
    }
    66% {
        stroke: `).concat(n("progressspinner.color.3"),`;
    }
    80%,
    90% {
        stroke: `).concat(n("progressspinner.color.4"),`;
    }
}
`)},$={root:"p-progressspinner",spin:"p-progressspinner-spin",circle:"p-progressspinner-circle"},ee=E.extend({name:"progressspinner",theme:Z,classes:$}),oe={name:"BaseProgressSpinner",extends:L,props:{strokeWidth:{type:String,default:"2"},fill:{type:String,default:"none"},animationDuration:{type:String,default:"2s"}},style:ee,provide:function(){return{$pcProgressSpinner:this,$parentInstance:this}}},S={name:"ProgressSpinner",extends:oe,inheritAttrs:!1,computed:{svgStyle:function(){return{"animation-duration":this.animationDuration}}}},le=["fill","stroke-width"];function se(i,e,n,u,l,c){return p(),h("div",y({class:i.cx("root"),role:"progressbar"},i.ptmi("root")),[(p(),h("svg",y({class:i.cx("spin"),viewBox:"25 25 50 50",style:c.svgStyle},i.ptm("spin")),[o("circle",y({class:i.cx("circle"),cx:"50",cy:"50",r:"20",fill:i.fill,"stroke-width":i.strokeWidth,strokeMiterlimit:"10"},i.ptm("circle")),null,16,le)],16))],16)}S.render=se;const te="/banco-curriculos-bruda/assets/busca-DLKTOTqw.svg",ie={data(){return{value:null,visible:!1,value_aux:null,curriculo:null,icon:"pi pi-search",loading:!1,estado_civil:["Solteiro(a)","Casado(a)","Divorciado(a)","Viúvo(a)","Separado(a)","União Estável","Companheiro(a)","Desquitado(a)","Outro"],escolaridade:["Analfabeto(a)","Alfabetizado(a)","Ensino Fundamental Incompleto","Ensino Fundamental Completo","Ensino Médio Incompleto","Ensino Médio Completo","Técnico Incompleto","Técnico Completo","Superior Incompleto","Superior Completo","Pós-graduação Incompleta","Pós-graduação Completa","Mestrado Incompleto","Mestrado Completo","Doutorado Incompleto","Doutorado Completo","Pós-Doutorado","Outro"],ufs:["Acre","Alagoas","Amapá","Amazonas","Bahia","Ceará","Distrito Federal","Espírito Santo","Goiás","Maranhão","Mato Grosso","Mato Grosso do Sul","Minas Gerais","Pará","Paraíba","Paraná","Pernambuco","Piauí","Rio de Janeiro","Rio Grande do Norte","Rio Grande do Sul","Rondônia","Roraima","Santa Catarina","São Paulo","Sergipe","Tocantins"],setores:[],lojas:[]}},methods:{cadastro(){this.$router.push(`/banco-curriculos-bruda/cadastrar-curriculo/${this.value}`)},getSeverityDate(i){if(!i)return i;if(!(i instanceof Date)||isNaN(i))return"danger";const n=new Date-i,u=Math.floor(n/(1e3*60*60*24));return u<90?"success":u<=180?"primary":u<=365?"warn":u<=730?"danger":"contrast"},formatDate(i){if(!i||!(i instanceof Date)||isNaN(i))return i;const e=String(i.getDate()).padStart(2,"0"),n=String(i.getMonth()+1).padStart(2,"0"),u=i.getFullYear(),l=String(i.getHours()).padStart(2,"0"),c=String(i.getMinutes()).padStart(2,"0"),v=String(i.getSeconds()).padStart(2,"0");return`${e}/${n}/${u} ${l}:${c}:${v}`},searchCurriculo(){if(this.value&&typeof this.value=="string"){const i=this.value.replace(/\D/g,"");i.length==11&&this.value!=this.value_aux&&(this.loading=!0,this.icon="pi pi-spin pi-spinner",this.value_aux=this.value,w.getCurriculo(i).then(e=>{this.curriculo={},this.curriculo.apresentacao_curriculo=e.data.apresentacao_curriculo,this.curriculo.apresentacao_pessoal=e.data.apresentacao_pessoal,this.curriculo.apresentacao_observacao=e.data.apresentacao_observacao,this.curriculo.nome=e.data.nome,this.curriculo.idade=e.data.idade,this.curriculo.cpf=e.data.cpf,this.curriculo.rg=e.data.rg,this.curriculo.telefone=e.data.telefone,this.curriculo.estado_civil=e.data.estado_civil,this.curriculo.escolaridade=e.data.escolaridade,this.curriculo.possui_cursos_complementares=e.data.possui_cursos_complementares,this.curriculo.cursos_observacao=e.data.cursos_observacao,this.curriculo.possui_dependentes=e.data.possui_dependentes,this.curriculo.numero_dependentes=e.data.numero_dependentes,this.curriculo.observacao_dependentes=e.data.observacao_dependentes,this.curriculo.cep=e.data.cep,this.curriculo.uf=e.data.uf,this.curriculo.cidade=e.data.cidade,this.curriculo.bairro=e.data.bairro,this.curriculo.rua=e.data.rua,this.curriculo.numero=e.data.numero,this.curriculo.complemento=e.data.complemento,this.curriculo.possui_experiencia=e.data.possui_experiencia,this.curriculo.relato_experiencia=e.data.relato_experiencia,this.curriculo.relato_desligamento=e.data.relato_desligamento,this.curriculo.observacao_experiencia=e.data.observacao_experiencia,this.curriculo.relato_motivacao=e.data.relato_motivacao,this.curriculo.lojas_interesse=e.data.lojas_interesse,this.curriculo.setores_interesse=e.data.setores_interesse,this.curriculo.relato_interesse=e.data.relato_interesse,this.curriculo.relato_equipe=e.data.relato_equipe,this.curriculo.restricoes_horario=e.data.restricoes_horario,this.curriculo.observacoes_entrevista=e.data.observacoes_entrevista,this.curriculo.entrevistador=e.data.entrevistador,this.curriculo.setores_ideal=e.data.setores_ideal,this.curriculo.apto_contratacao=e.data.apto_contratacao,this.curriculo.ex_funcionario=e.data.ex_funcionario,this.curriculo.atualmente_contratado=e.data.atualmente_contratado,this.curriculo.observacao=e.data.observacao,this.curriculo.bate_perfil_setor=this.curriculo.setores_interesse.some(n=>this.curriculo.setores_ideal.some(u=>n.id===u.id)),this.curriculo.ultima_atualizacao=new Date(e.data.ultima_atualizacao),this.visible=!0,this.loading=!1,this.icon="pi pi-search"}).catch(e=>{H(e,this.$router,this.$toast),this.loading=!1,this.icon="pi pi-search",this.$confirm.require({message:`O CPF ${this.value} não foi encontrado no banco de currículos. Deseja cadastrar um novo currículo?`,header:"Confirmação",icon:"pi pi-exclamation-triangle",rejectProps:{label:"Não",severity:"secondary",outlined:!0},acceptProps:{label:"Sim"},accept:()=>{this.$router.push(`/banco-curriculos-bruda/cadastrar-curriculo/${i}`)},reject:()=>{this.value=null,this.value_aux=null,this.$toast.add({severity:"warn",summary:"Cancelado",detail:"Você optou por não cadastrar um novo currículo",life:3e3})}})}))}},editCurriculo(){this.$router.push(`/banco-curriculos-bruda/cadastrar-curriculo/${this.curriculo.cpf}`)},hideDialog(){this.value=null,this.visible=!1,this.value_aux=null}},mounted(){w.getStores().then(i=>{this.lojas=i.data,this.loadingLojas=!1}).catch(i=>{handleStoreErrors(i,this.$router,this.$toast)}),w.getDepartments().then(i=>{this.setores=i.data,this.loadingSetores=!1}).catch(i=>{handleDepartmentErrors(i,this.$router,this.$toast)})}},ae={class:"card"},re={key:0,class:"flex items-center justify-center",style:{"min-height":"36rem"}},ne={key:1,class:"flex items-center justify-center",style:{"min-height":"36rem"}},ue=o("div",null,[o("img",{src:te,alt:"Logo",style:{height:"auto"}})],-1),ce=[ue],de={class:"inline-flex items-center justify-center gap-2 w-full"},me={class:"flex flex-col gap-2 mx-auto",style:{"max-width":"40rem"}},_e=o("div",{class:"text-center mt-4 mb-8 text-xl font-semibold"},"Dados Pessoais",-1),pe={class:"flex flex-row gap-3"},fe={class:"flex-1"},he={class:"flex flex-col mb-6"},xe=o("label",null,"Nome",-1),ve={class:"flex-1"},be={class:"flex flex-col mb-6"},ge=o("label",null,"Idade",-1),Ve={class:"flex flex-row gap-3"},ye={class:"flex-1"},we={class:"flex flex-col mb-6"},Ce=o("label",null,"CPF",-1),Se={class:"flex-1"},Ue=o("label",null,"RG",-1),Pe={class:"flex flex-row gap-3"},ke={class:"flex-1"},De={class:"flex flex-col mb-6"},je=o("label",null,"Telefone",-1),Ee={class:"flex-1"},Le={class:"flex flex-col mb-6"},Ne=o("label",null,"Estado Civil",-1),Ae={class:"flex flex-row gap-3"},Fe={class:"flex-1"},Ie={class:"flex flex-col mb-6"},Be=o("label",null,"Escolaridade",-1),Me={class:"flex-1"},Re=o("label",null,"Cursos Complementares",-1),Te={class:"flex flex-col gap-2 mx-auto",style:{"max-width":"40rem"}},qe=o("div",{class:"text-center mt-4 mb-8 text-xl font-semibold"},"Currículo e Apresentação Pessoal",-1),ze={class:"flex justify-between gap-2 mb-2"},Oe=o("label",null,"Estado do Currículo",-1),Ge={class:"flex flex-col gap-2"},He={class:"flex justify-end"},Qe={class:"flex justify-between gap-2 mb-2"},We=o("label",null,"Apresentação Pessoal",-1),Je={class:"flex flex-col gap-2"},Ke={class:"flex justify-end"},Ye={class:"flex flex-col gap-2 mt-8"},Xe=o("label",null,"Observações (Apresentação)",-1),Ze={class:"flex flex-col gap-2 mx-auto",style:{"max-width":"40rem"}},$e=o("div",{class:"text-center mt-9 mb-8 text-xl font-semibold"},"Dependentes",-1),eo={class:"flex flex-row gap-3"},oo={class:"flex-1"},lo={class:"flex-1"},so={class:"flex flex-col mb-6"},to=o("label",null,"Número de Dependentes",-1),io={class:"flex flex-col mb-6"},ao=o("label",null,"Observações ( Idade, Necessidades Especiais, etc. )",-1),ro={class:"flex flex-col gap-2 mx-auto",style:{"max-width":"40rem"}},no=o("div",{class:"text-center mt-4 mb-8 text-xl font-semibold"},"Endereço",-1),uo={class:"flex flex-row gap-3"},co={class:"flex-1"},mo={class:"flex flex-col mb-6"},_o={class:"w-full pr-7"},po={class:"flex justify-between"},fo=o("div",null," CEP ",-1),ho={key:0,class:"pi pi-spin pi-spinner mt-8"},xo={class:"flex-1"},vo={class:"flex flex-col mb-6"},bo=o("label",null,"Unidade Federativa",-1),go={class:"flex flex-row gap-3"},Vo={class:"flex-1"},yo={class:"flex flex-col mb-6"},wo=o("label",null,"Cidade",-1),Co={class:"flex-1"},So={class:"flex flex-col mb-6"},Uo=o("label",null,"Bairro",-1),Po={class:"flex flex-row gap-3"},ko={class:"flex-1"},Do={class:"flex flex-col mb-6"},jo=o("label",null,"Rua",-1),Eo={class:"flex-1"},Lo=o("label",null,"Número",-1),No=o("label",null,"Complemento",-1),Ao={class:"flex flex-col gap-2 mx-auto",style:{"max-width":"40rem"}},Fo=o("div",{class:"text-center mt-4 mb-8 text-xl font-semibold"},"Experiência",-1),Io={class:"flex justify-between gap-2"},Bo=o("label",null,"Experiência Profissional Anterior.",-1),Mo={class:"flex flex-col gap-2"},Ro={class:"flex justify-end"},To=o("div",{class:"flex justify-end"},null,-1),qo={class:"flex justify-between gap-2 mt-5 mb-8"},zo=o("label",null,"Motivo da Saída dos Empregos Anteriores.",-1),Oo={class:"flex flex-col gap-2"},Go={class:"flex justify-end"},Ho={class:"flex flex-col mb-6"},Qo=o("label",null,"Observações (Nomes das empresas anteriores, Cargos Ocupados, etc.)",-1),Wo={class:"flex flex-col gap-2 mx-auto",style:{"max-width":"40rem"}},Jo=o("div",{class:"text-center mt-4 mb-8 text-xl font-semibold"},"Entrevista",-1),Ko={class:"flex justify-between gap-2 mb-1"},Yo=o("label",null,"Por que você gostaria de trabalhar na Rede Bruda?",-1),Xo={class:"flex flex-col gap-2"},Zo={class:"flex justify-end"},$o=o("label",{class:"mb-6"},"Quais Lojas/Setores você tem interesse em atuar? Escolha até 2 opções.",-1),el={class:"flex flex-row gap-3 mb-2"},ol={class:"flex-1"},ll={class:"flex flex-col"},sl=o("label",{for:"ms-cities"},"Lojas",-1),tl={class:"flex-1"},il={class:"flex flex-col"},al=o("label",{for:"ms-cities"},"Setores",-1),rl={class:"flex justify-between gap-2 mb-6"},nl=o("label",null,"Por que você escolheu essas lojas/setores?",-1),ul={class:"flex flex-col gap-2"},cl={class:"flex justify-end"},dl=o("div",{class:"flex justify-end"},null,-1),ml={class:"flex justify-between gap-2 mb-2"},_l=o("label",null,"Você prefere trabalhar em grupo ou sozinho? Por quê?",-1),pl={class:"flex flex-col gap-2"},fl={class:"flex justify-end"},hl={class:"flex flex-col mb-4"},xl=o("label",null,"Observações (Detalhes relevantes da entrevista, Restrições de horário, etc.)",-1),vl={class:"flex flex-col gap-2 mx-auto",style:{"max-width":"40rem"}},bl=o("div",{class:"text-center mt-6 mb-8 text-xl font-semibold"},"Considerações Finais",-1),gl={class:"flex flex-col mb-1"},Vl=o("label",null,"Nome do Entrevistador",-1),yl=o("label",{class:"mb-6"},"Quais Setores combinam com o perfil do candidato?",-1),wl={class:"flex-1"},Cl={class:"flex flex-col mb-2"},Sl=o("label",{for:"ms-cities"},"Setores",-1),Ul=o("label",null,"Observações Finais",-1),Pl={class:"flex flex-col gap-2 mx-auto",style:{"max-width":"40rem"}};function kl(i,e,n,u,l,c){const v=W,x=T,U=Q,P=S,k=J,d=X,r=q,b=K,g=Y,m=M,f=z,_=O,V=G,D=R,j=I;return p(),h(F,null,[o("div",ae,[o("div",null,[t(U,null,{default:a(()=>[t(v,{class:B(l.icon)},null,8,["class"]),t(x,{modelValue:l.value,"onUpdate:modelValue":[e[0]||(e[0]=s=>l.value=s),c.searchCurriculo],fluid:"",autoClear:"",disabled:l.loading,mask:"999.999.999-99",placeholder:"Buscar Currículo por CPF..."},null,8,["modelValue","onUpdate:modelValue","disabled"])]),_:1})]),l.loading?(p(),h("div",re,[t(P,{style:{width:"50px",height:"50px"}})])):(p(),h("div",ne,ce))]),l.curriculo?(p(),A(j,{key:0,onHide:c.hideDialog,visible:l.visible,"onUpdate:visible":e[40]||(e[40]=s=>l.visible=s),modal:"",style:{width:"50rem"},breakpoints:{"1199px":"75vw","575px":"90vw"}},{header:a(()=>[o("div",de,[t(k,{value:"Ultima atualização: "+c.formatDate(l.curriculo.ultima_atualizacao),severity:c.getSeverityDate(l.curriculo.ultima_atualizacao)},null,8,["value","severity"])])]),default:a(()=>[o("div",me,[_e,o("div",pe,[o("div",fe,[o("div",he,[t(r,null,{default:a(()=>[t(d,{readonly:"",maxlength:"200",fluid:"",modelValue:l.curriculo.nome,"onUpdate:modelValue":e[1]||(e[1]=s=>l.curriculo.nome=s)},null,8,["modelValue"]),xe]),_:1})])]),o("div",ve,[o("div",be,[t(r,null,{default:a(()=>[t(b,{readonly:"",modelValue:l.curriculo.idade,"onUpdate:modelValue":e[2]||(e[2]=s=>l.curriculo.idade=s),fluid:""},null,8,["modelValue"]),ge]),_:1})])])]),o("div",Ve,[o("div",ye,[o("div",we,[t(r,null,{default:a(()=>[t(d,{readonly:"",modelValue:l.value,"onUpdate:modelValue":e[3]||(e[3]=s=>l.value=s),fluid:""},null,8,["modelValue"]),Ce]),_:1})])]),o("div",Se,[t(r,null,{default:a(()=>[t(x,{readonly:"",modelValue:l.curriculo.rg,"onUpdate:modelValue":e[4]||(e[4]=s=>l.curriculo.rg=s),mask:"9999?9999-99",placeholder:"99999999-99",fluid:""},null,8,["modelValue"]),Ue]),_:1})])]),o("div",Pe,[o("div",ke,[o("div",De,[t(r,null,{default:a(()=>[t(x,{readonly:"",modelValue:l.curriculo.telefone,"onUpdate:modelValue":e[5]||(e[5]=s=>l.curriculo.telefone=s),mask:"(99) 9999-9999?9",placeholder:"(99) 9999-99999",fluid:""},null,8,["modelValue"]),je]),_:1})])]),o("div",Ee,[o("div",Le,[t(r,null,{default:a(()=>[t(g,{disabled:"",modelValue:l.curriculo.estado_civil,"onUpdate:modelValue":e[6]||(e[6]=s=>l.curriculo.estado_civil=s),options:l.estado_civil,fluid:""},null,8,["modelValue","options"]),Ne]),_:1})])])]),o("div",Ae,[o("div",Fe,[o("div",Ie,[t(r,null,{default:a(()=>[t(g,{disabled:"",modelValue:l.curriculo.escolaridade,"onUpdate:modelValue":e[7]||(e[7]=s=>l.curriculo.escolaridade=s),options:l.escolaridade,fluid:""},null,8,["modelValue","options"]),Be]),_:1})])]),o("div",Me,[t(m,{readonly:"",class:"w-full",modelValue:l.curriculo.possui_cursos_complementares,"onUpdate:modelValue":e[8]||(e[8]=s=>l.curriculo.possui_cursos_complementares=s),onLabel:"Possui Cursos Complementares",offLabel:"Não Possui Cursos Complementares",onChange:i.changeCursosComplementares},null,8,["modelValue","onChange"])])]),t(r,{class:"mb-6"},{default:a(()=>[t(f,{readonly:"",maxlength:"450",modelValue:l.curriculo.cursos_observacao,"onUpdate:modelValue":e[9]||(e[9]=s=>l.curriculo.cursos_observacao=s),fluid:"",rows:"3",cols:"30"},null,8,["modelValue"]),Re]),_:1})]),o("div",Te,[qe,o("div",ze,[Oe,o("div",Ge,[o("div",He,[t(_,{readonly:"",modelValue:l.curriculo.apresentacao_curriculo,"onUpdate:modelValue":e[10]||(e[10]=s=>l.curriculo.apresentacao_curriculo=s)},null,8,["modelValue"])])])]),o("div",Qe,[We,o("div",Je,[o("div",Ke,[t(_,{readonly:"",modelValue:l.curriculo.apresentacao_pessoal,"onUpdate:modelValue":e[11]||(e[11]=s=>l.curriculo.apresentacao_pessoal=s)},null,8,["modelValue"])])])]),o("div",Ye,[t(r,null,{default:a(()=>[t(f,{readonly:"",maxlength:"450",modelValue:l.curriculo.apresentacao_observacao,"onUpdate:modelValue":e[12]||(e[12]=s=>l.curriculo.apresentacao_observacao=s),fluid:"",rows:"5",cols:"30"},null,8,["modelValue"]),Xe]),_:1})])]),o("div",Ze,[$e,o("div",eo,[o("div",oo,[t(m,{readonly:"",class:"w-full",modelValue:l.curriculo.possui_dependentes,"onUpdate:modelValue":e[13]||(e[13]=s=>l.curriculo.possui_dependentes=s),onLabel:"Possui Dependentes",offLabel:"Não Possui Dependentes",onChange:i.changePossuiDependentes},null,8,["modelValue","onChange"])]),o("div",lo,[o("div",so,[t(r,null,{default:a(()=>[t(b,{readonly:"",modelValue:l.curriculo.numero_dependentes,"onUpdate:modelValue":e[14]||(e[14]=s=>l.curriculo.numero_dependentes=s),fluid:""},null,8,["modelValue"]),to]),_:1})])])]),o("div",io,[t(r,null,{default:a(()=>[t(f,{readonly:"",modelValue:l.curriculo.observacao_dependentes,"onUpdate:modelValue":e[15]||(e[15]=s=>l.curriculo.observacao_dependentes=s),fluid:"",rows:"5",cols:"30"},null,8,["modelValue"]),ao]),_:1})])]),o("div",ro,[no,o("div",uo,[o("div",co,[o("div",mo,[t(r,null,{default:a(()=>[t(x,{readonly:"",modelValue:l.curriculo.cep,"onUpdate:modelValue":e[16]||(e[16]=s=>l.curriculo.cep=s),mask:"99999-999",placeholder:"99999-999",fluid:""},null,8,["modelValue"]),o("label",_o,[o("div",po,[fo,o("div",null,[i.loadingCep?(p(),h("i",ho)):C("",!0)])])])]),_:1})])]),o("div",xo,[o("div",vo,[t(r,null,{default:a(()=>[t(g,{disabled:"",modelValue:l.curriculo.uf,"onUpdate:modelValue":e[17]||(e[17]=s=>l.curriculo.uf=s),options:l.ufs,fluid:""},null,8,["modelValue","options"]),bo]),_:1})])])]),o("div",go,[o("div",Vo,[o("div",yo,[t(r,null,{default:a(()=>[t(d,{readonly:"",maxlength:"150",fluid:"",modelValue:l.curriculo.cidade,"onUpdate:modelValue":e[18]||(e[18]=s=>l.curriculo.cidade=s)},null,8,["modelValue"]),wo]),_:1})])]),o("div",Co,[o("div",So,[t(r,null,{default:a(()=>[t(d,{readonly:"",maxlength:"150",fluid:"",modelValue:l.curriculo.bairro,"onUpdate:modelValue":e[19]||(e[19]=s=>l.curriculo.bairro=s)},null,8,["modelValue"]),Uo]),_:1})])])]),o("div",Po,[o("div",ko,[o("div",Do,[t(r,null,{default:a(()=>[t(d,{readonly:"",maxlength:"250",fluid:"",modelValue:l.curriculo.rua,"onUpdate:modelValue":e[20]||(e[20]=s=>l.curriculo.rua=s)},null,8,["modelValue"]),jo]),_:1})])]),o("div",Eo,[t(r,null,{default:a(()=>[t(b,{readonly:"",modelValue:l.curriculo.numero,"onUpdate:modelValue":e[21]||(e[21]=s=>l.curriculo.numero=s),inputId:"minmax",min:1,max:999999,fluid:""},null,8,["modelValue"]),Lo]),_:1})])]),t(r,{class:"mb-6"},{default:a(()=>[t(d,{readonly:"",maxlength:"250",fluid:"",modelValue:l.curriculo.complemento,"onUpdate:modelValue":e[22]||(e[22]=s=>l.curriculo.complemento=s)},null,8,["modelValue"]),No]),_:1})]),o("div",Ao,[Fo,t(m,{readonly:"",class:"w-full mb-6",modelValue:l.curriculo.possui_experiencia,"onUpdate:modelValue":e[23]||(e[23]=s=>l.curriculo.possui_experiencia=s),onLabel:"Possui Experiência Profissional",offLabel:"Não Possui Experiência Profissional",onChange:i.changePossuiExperiencia},null,8,["modelValue","onChange"]),o("div",Io,[Bo,o("div",Mo,[o("div",Ro,[t(_,{readonly:"",modelValue:l.curriculo.relato_experiencia,"onUpdate:modelValue":e[24]||(e[24]=s=>l.curriculo.relato_experiencia=s)},null,8,["modelValue"])]),To])]),o("div",qo,[zo,o("div",Oo,[o("div",Go,[t(_,{readonly:"",modelValue:l.curriculo.relato_desligamento,"onUpdate:modelValue":e[25]||(e[25]=s=>l.curriculo.relato_desligamento=s)},null,8,["modelValue"])])])]),o("div",Ho,[t(r,null,{default:a(()=>[t(f,{readonly:"",maxlength:"450",modelValue:l.curriculo.observacao_experiencia,"onUpdate:modelValue":e[26]||(e[26]=s=>l.curriculo.observacao_experiencia=s),fluid:"",rows:"5",cols:"30"},null,8,["modelValue"]),Qo]),_:1})])]),o("div",Wo,[Jo,o("div",Ko,[Yo,o("div",Xo,[o("div",Zo,[t(_,{readonly:"",modelValue:l.curriculo.relato_motivacao,"onUpdate:modelValue":e[27]||(e[27]=s=>l.curriculo.relato_motivacao=s)},null,8,["modelValue"])])])]),$o,o("div",el,[o("div",ol,[o("div",ll,[t(r,null,{default:a(()=>[t(V,{disabled:"",modelValue:l.curriculo.lojas_interesse,"onUpdate:modelValue":e[28]||(e[28]=s=>l.curriculo.lojas_interesse=s),options:l.lojas,optionLabel:"name",class:"w-full"},null,8,["modelValue","options"]),sl]),_:1})])]),o("div",tl,[o("div",il,[t(r,null,{default:a(()=>[t(V,{disabled:"",modelValue:l.curriculo.setores_interesse,"onUpdate:modelValue":e[29]||(e[29]=s=>l.curriculo.setores_interesse=s),options:l.setores,optionLabel:"name",class:"w-full"},null,8,["modelValue","options"]),al]),_:1})])])]),o("div",rl,[nl,o("div",ul,[o("div",cl,[t(_,{readonly:"",modelValue:l.curriculo.relato_interesse,"onUpdate:modelValue":e[30]||(e[30]=s=>l.curriculo.relato_interesse=s)},null,8,["modelValue"])]),dl])]),o("div",ml,[_l,o("div",pl,[o("div",fl,[t(_,{readonly:"",modelValue:l.curriculo.relato_equipe,"onUpdate:modelValue":e[31]||(e[31]=s=>l.curriculo.relato_equipe=s)},null,8,["modelValue"])])])]),t(m,{readonly:"",class:"w-full mb-6",modelValue:l.curriculo.restricoes_horario,"onUpdate:modelValue":e[32]||(e[32]=s=>l.curriculo.restricoes_horario=s),onLabel:"Possui Restrição de Horário",offLabel:"Não Possui Restrição de Horário"},null,8,["modelValue"]),o("div",hl,[t(r,null,{default:a(()=>[t(f,{readonly:"",maxlength:"450",modelValue:l.curriculo.observacoes_entrevista,"onUpdate:modelValue":e[33]||(e[33]=s=>l.curriculo.observacoes_entrevista=s),fluid:"",rows:"3",cols:"30"},null,8,["modelValue"]),xl]),_:1})])]),o("div",vl,[bl,o("div",gl,[t(r,null,{default:a(()=>[t(d,{readonly:"",fluid:"",modelValue:l.curriculo.entrevistador,"onUpdate:modelValue":e[34]||(e[34]=s=>l.curriculo.entrevistador=s)},null,8,["modelValue"]),Vl]),_:1})]),yl,o("div",wl,[o("div",Cl,[t(r,null,{default:a(()=>[t(V,{disabled:"",modelValue:l.curriculo.setores_ideal,"onUpdate:modelValue":e[35]||(e[35]=s=>l.curriculo.setores_ideal=s),options:l.setores,optionLabel:"name",class:"w-full"},null,8,["modelValue","options"]),Sl]),_:1})])]),t(m,{readonly:"",class:"w-full mb-2",modelValue:l.curriculo.apto_contratacao,"onUpdate:modelValue":e[36]||(e[36]=s=>l.curriculo.apto_contratacao=s),onLabel:"Está Apto Para Contratação",offLabel:"Não Está Apto Para Contratação"},null,8,["modelValue"]),t(m,{readonly:"",class:"w-full mb-2",modelValue:l.curriculo.ex_funcionario,"onUpdate:modelValue":e[37]||(e[37]=s=>l.curriculo.ex_funcionario=s),onLabel:"É Ex-Funcionário",offLabel:"Não É Ex-Funcionário"},null,8,["modelValue"]),t(m,{readonly:"",class:"w-full mb-6",modelValue:l.curriculo.atualmente_contratado,"onUpdate:modelValue":e[38]||(e[38]=s=>l.curriculo.atualmente_contratado=s),onLabel:"Trabalha no Bruda Atualmente",offLabel:"Não Trabalha no Bruda Atualmente"},null,8,["modelValue"]),t(r,{class:"mb-4"},{default:a(()=>[t(f,{readonly:"",maxlength:"450",modelValue:l.curriculo.observacao,"onUpdate:modelValue":e[39]||(e[39]=s=>l.curriculo.observacao=s),fluid:"",rows:"5",cols:"30"},null,8,["modelValue"]),Ul]),_:1})]),o("div",Pl,[t(D,{type:"button",iconPos:"right",icon:"pi pi-save",label:"Atualizar",onClick:c.editCurriculo},null,8,["onClick"])])]),_:1},8,["onHide","visible"])):C("",!0)],64)}const Nl=N(ie,[["render",kl]]);export{Nl as default};
