(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[858],{4873:function(e,a,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/new/[[...workspace]]",function(){return s(5790)}])},5790:function(e,a,s){"use strict";s.r(a),s.d(a,{__N_SSG:function(){return u},default:function(){return p}});var l=s(5893),t=s(9008),r=s.n(t),i=s(7294),n=s(3162),c=s(8813),o=s(3157),d=s(1163),m=JSON.parse('{"wZ":[{"description":"Chromium is a free and open-source browser, primarily developed and maintained by Google.","docker_registry":"https://index.docker.io/v1/","image_src":"chromium.png","name":"kasmweb/chromium:develop","run_config":{"hostname":"kasm"},"exec_config":{"go":{"cmd":"bash -c \'/dockerstartup/custom_startup.sh --go --url \\"$KASM_URL\\"\'"},"assign":{"cmd":"bash -c \'/dockerstartup/custom_startup.sh --assign --url \\"$KASM_URL\\"\'"}},"categories":["Browser"],"friendly_name":"Chromium","architecture":["amd64","arm64"],"compatibility":["1.13.x"],"uncompressed_size_mb":2170,"sha":"c47aba1be459ed66fc58bca2fb6a3c797dd26ca1"},{"description":"Nighthawk Coders CSSE Official 2023-2024 Ubuntu Desktop Workspace","docker_registry":"https://index.docker.io/v1/","image_src":"nighthawkcoders.png","name":"nighthawkcoders/kasm_workspaces:latest","run_config":{"hostname":"kasm"},"exec_config":{"go":{"cmd":"bash -c \'/dockerstartup/custom_startup.sh --go --url \\"$KASM_URL\\"\'"},"assign":{"cmd":"bash -c \'/dockerstartup/custom_startup.sh --assign --url \\"$KASM_URL\\"\'"}},"categories":["Development","Desktop"],"friendly_name":"CSSE Ubuntu Jammy","architecture":["amd64"],"compatibility":["1.13.x"],"uncompressed_size_mb":6000,"sha":"53d616012c25b44e66830c268b7909fcc2c6b3d8"},{"description":"Nighthawk Coders Official 2023-2024 WorkSpace Image","docker_registry":"https://index.docker.io/v1/","image_src":"nighthawkcoders.png","name":"aaditgupta21/kasm-nighthawks:1.0.0","run_config":{"hostname":"kasm"},"exec_config":{"go":{"cmd":"bash -c \'/dockerstartup/custom_startup.sh --go --url \\"$KASM_URL\\"\'"},"assign":{"cmd":"bash -c \'/dockerstartup/custom_startup.sh --assign --url \\"$KASM_URL\\"\'"}},"categories":["workspaces"],"friendly_name":"Nighthawk Coders","architecture":["amd64"],"compatibility":["1.13.x"],"uncompressed_size_mb":6000,"sha":"b93fa6733b684234344596ab4007465c847ec7d4"}]}'),u=!0;function p(e){let{workspace:a}=e,t=(0,i.useRef)(null),u=(0,i.useRef)(null),p=(0,i.useRef)(null),[f,b]=(0,i.useState)(null),[g,x]=(0,i.useState)(null),[v,w]=(0,i.useState)(null),[_,y]=(0,i.useState)("png"),[j,k]=(0,i.useState)(null),N={friendly_name:null,image_src:null,description:null,name:null,cores:2,memory:2768,gpu_count:0,cpu_allocation_method:"Inherit",docker_registry:"https://index.docker.io/v1/",categories:[],require_gpu:!1,enabled:!0,image_type:"Container"},[S,C]=(0,i.useState)(N);(0,d.useRouter)(),(0,i.useEffect)(()=>{if(null===a)p.current.value="",t.current.value="",u.current.value="",b(null),x(null),w(null),C(N);else if(a&&a[0]){let e=m.wZ.find(e=>e.name===atob(a[0]));if(delete e.sha,p.current.value=e.description,t.current.value=e.name,u.current.value=e.friendly_name,e.categories){let s=[];e.categories.map(e=>s.push({label:e,value:e})),b(s)}if(e.architecture){let l=[];e.architecture.map(e=>l.push({label:e,value:e})),x(l)}k("../../icons/"+e.image_src),C({...S,...e})}},[a]);let R={control:(e,a)=>({...e,background:"#f1f5f9",borderRadius:"0.5rem",borderColor:"#94a3b8"}),multiValue(e,a){let{data:s}=a;return{...e,backgroundColor:"#dde6f1"}}};(0,i.useEffect)(()=>{if(S&&S.friendly_name){let e={...S};e.image_src=O(e.friendly_name)+"."+_,C(e)}},[_]);let L=e=>{let a={...S};a.categories=e.map(e=>e.value),C(a);let s=[];a.categories.map(e=>s.push({label:e,value:e})),b(s)},A=e=>{let a={...S};a.architecture=e.map(e=>e.value),C(a);let s=[];a.architecture.map(e=>s.push({label:e,value:e})),x(s)};function O(e){var a=e.toString().toLowerCase();return(a=(a=(a=a.split(/\&+/).join("-and-")).split(/[^a-z0-9]/).join("-")).split(/-+/).join("-")).trim("-")}let D=()=>{var e=s(5733);let a=new e,l=a.folder(S.friendly_name);if(l.file("workspace.json",JSON.stringify(S,null,2)),v)l.file(S.image_src,v.file);else if(j){let t=fetch(j).then(e=>e.blob());l.file(S.image_src,t)}a.generateAsync({type:"blob"}).then(function(e){(0,n.saveAs)(e,O(S.friendly_name)+".zip")})},E=e=>{let a={...S};a[e.target.name]=e.target.value,"icon"===e.target.name&&(delete a.icon,w({value:e.target.value,file:e.target.files[0]}),y(e.target.value.substr(e.target.value.lastIndexOf(".")+1)),k(null)),a.friendly_name&&(a.image_src=O(a.friendly_name)+"."+_),C(a)};return(0,l.jsxs)("div",{className:"",children:[(0,l.jsxs)(r(),{children:[(0,l.jsx)("title",{children:"Kasm Workspaces"}),(0,l.jsx)("meta",{name:"description",content:"List of workspaces for Kasm Webspaces"}),(0,l.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,l.jsxs)("div",{className:"flex flex-col lg:flex-row w-full my-20 max-w-6xl text-sm rounded-xl overflow-hidden mx-auto",children:[(0,l.jsxs)("div",{className:"w-full lg:w-1/2 p-16 bg-slate-300",children:[(0,l.jsx)("h1",{className:"text-2xl font-medium mb-2",children:"Add Workspace"}),(0,l.jsxs)("div",{className:"flex flex-col",children:[(0,l.jsx)("p",{className:"mb-8 opacity-70",children:'This page is designed to allow admins to generate the JSON they need to upload to the "workspaces" directory. It also allows end users to see what settings are needed if they want to manually copy them into a new workspace.'}),(0,l.jsx)("label",{className:"mb-2 font-medium",children:"Icon"}),(0,l.jsx)("input",{type:"file",name:"icon",onChange:E,className:"mb-2 p-2 rounded-lg bg-slate-100 border border-solid border-slate-400"}),(0,l.jsx)("p",{className:"mb-6 opacity-70",children:"Select the image to use, image will be renamed when it's downloaded."}),(0,l.jsx)("label",{className:"mb-2 font-medium",children:"Friendly Name"}),(0,l.jsx)("input",{ref:u,name:"friendly_name",onChange:E,className:"mb-2 p-2 rounded-lg bg-slate-100 border border-solid border-slate-400"}),(0,l.jsx)("p",{className:"mb-6 opacity-70",children:"This is the name that will show for users"}),(0,l.jsx)("label",{className:"mb-2 font-medium",children:"Categories"}),(0,l.jsx)(c.Z,{instanceId:"1",name:"categories",isMulti:!0,options:[{value:"Browser",label:"Browser"},{value:"Communication",label:"Communication"},{value:"Desktop",label:"Desktop"},{value:"Development",label:"Development"},{value:"Games",label:"Games"},{value:"Multimedia",label:"Multimedia"},{value:"Office",label:"Office"},{value:"Privacy",label:"Privacy"},{value:"Productivity",label:"Productivity"},{value:"Remote Access",label:"Remote Access"}],onChange:L,styles:R,value:f}),(0,l.jsx)("p",{className:"mb-6 mt-2 opacity-70",children:"You can select from the available option or create new ones."}),(0,l.jsx)("label",{className:"mb-2 font-medium",children:"Description"}),(0,l.jsx)("input",{ref:p,name:"description",onChange:E,className:"mb-2 p-2 rounded-lg bg-slate-100 border border-solid border-slate-400"}),(0,l.jsx)("p",{className:"mb-6 opacity-70",children:"A short description about the workspace"}),(0,l.jsx)("label",{className:"mb-2 font-medium",children:"Docker Image"}),(0,l.jsx)("input",{ref:t,name:"name",onChange:E,className:"mb-2 p-2 rounded-lg bg-slate-100 border border-solid border-slate-400"}),(0,l.jsxs)("p",{className:"mb-6 opacity-70",children:["The docker image to use, i.e. ",(0,l.jsx)("code",{className:"text-xs p-1 px-2 rounded bg-white/40",children:"kasmweb/filezilla:develop"})]}),(0,l.jsx)("label",{className:"mb-2 font-medium",children:"Architecture"}),(0,l.jsx)(o.ZP,{instanceId:"2",name:"architecture",isMulti:!0,options:[{value:"amd64",label:"amd64"},{value:"arm64",label:"arm64"}],onChange:A,styles:R,value:g}),(0,l.jsx)("p",{className:"mb-6 mt-2 opacity-70",children:"You can select from the available option or create new ones."})]})]}),(0,l.jsxs)("div",{className:"w-full lg:w-1/2 p-16 bg-slate-100",children:[(0,l.jsx)(h,{workspace:S,icon:v,inlineImage:j}),(0,l.jsx)("pre",{className:"my-8 overflow-y-auto text-xs",children:JSON.stringify({...S},null,2)}),(0,l.jsx)("button",{onClick:D,className:"p-4 relative z-10 px-5 bg-cyan-700 border-t border-white/20 border-solid hover:bg-slate-900 transition m-2 rounded items-center text-white/70 flex cursor-pointer",children:"Download"})]})]})]})}function h(e){let{workspace:a,icon:s,inlineImage:t}=e,[r,n]=(0,i.useState)(!1),c=null;if(s){let o=new Blob([s.file]);c=URL.createObjectURL(o),a.image_src=c}return(0,l.jsx)("div",{className:"rounded-xl group w-full shadow max-w-xs relative overflow-hidden h-[100px] border border-solid flex flex-col justify-between bg-slate-300 border-slate-400/50",children:(0,l.jsxs)("div",{className:"absolute top-0 left-0 right-0 h-[200px] transition-all"+(r?" -translate-y-1/2":""),children:[(0,l.jsxs)("div",{onClick:()=>n(!0),className:"h-[100px] p-4 relative overflow-hidden cursor-pointer",children:[(0,l.jsx)("img",{className:"h-[90px] group-hover:scale-150 transition-all absolute left-2 top-1",src:a.image_src,onError(e){null!==t&&(e.target.src=t)},alt:a.friendly_name}),(0,l.jsxs)("div",{className:"flex-col pl-28",children:[(0,l.jsx)("div",{className:"font-bold",children:a.friendly_name||"Friendly Name"}),(0,l.jsxs)("div",{className:"text-xs mb-2 flex gap-2",children:["Del Norte HS Computer Science"," ",(0,l.jsx)("span",{children:void 0})]}),(0,l.jsx)("div",{className:" h-8"})]}),(0,l.jsxs)("div",{className:"absolute bottom-0 left-0 right-0 bg-slate-400/20 h-8 text-[10px] flex items-center justify-center",children:[a.architecture&&a.architecture.map((e,a)=>(0,l.jsx)("span",{className:"p-2 py-0 m-[1px] inline-block rounded bg-slate-400/70",children:e},"arch"+a)),a.categories.map((e,a)=>(0,l.jsx)("span",{className:"p-2 py-0 m-[1px] inline-block rounded bg-slate-300/90",children:e},"cat"+a))]}),!1]}),(0,l.jsxs)("div",{className:"h-[100px] text-xs relative p-2 pl-4 flex",children:[(0,l.jsx)("button",{className:"absolute right-2 top-2 bg-slate-100 rounded-full flex justify-center items-center h-6 w-6",onClick:()=>n(!1),children:(0,l.jsx)("svg",{style:{height:"14px"},xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512",children:(0,l.jsx)("path",{d:"M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z"})})}),(0,l.jsxs)("div",{className:"flex flex-col flex-grow",children:[(0,l.jsx)("div",{className:"font-bold",children:a.friendly_name})," ",a.description]}),(0,l.jsxs)("div",{className:"flex flex-col justify-end gap-1",children:[(0,l.jsx)("div",{className:"text-xs text-color w-full p-4 py-1 rounded-lg bg-black/5 flex justify-center items-center",children:"Edit"}),(0,l.jsx)("button",{className:"text-xs w-full p-4 py-1 rounded-lg flex justify-center items-center bg-blue-500 font-bold text-white",children:"Install"})]})]})]})})}}},function(e){e.O(0,[484,774,888,179],function(){return e(e.s=4873)}),_N_E=e.O()}]);