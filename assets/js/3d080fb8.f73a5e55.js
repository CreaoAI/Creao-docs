"use strict";(self.webpackChunkdocsite=self.webpackChunkdocsite||[]).push([[38],{7894:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"how-to-guide/basic-use-case","title":"\ud83d\udcda Basic Use Case","description":"Example Project","source":"@site/docs/how-to-guide/basic-use-case.md","sourceDirName":"how-to-guide","slug":"/how-to-guide/basic-use-case","permalink":"/Creao-docs/how-to-guide/basic-use-case","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":7,"frontMatter":{"sidebar_position":7},"sidebar":"tutorialSidebar","previous":{"title":"\ud83d\udd04 Iteration Process","permalink":"/Creao-docs/how-to-guide/iteration-process"},"next":{"title":"\ud83c\udf89 Congratulations!","permalink":"/Creao-docs/how-to-guide/congratulations"}}');var i=n(4848),r=n(8453);const o={sidebar_position:7},l="\ud83d\udcda Basic Use Case",a={},c=[{value:"Example Project",id:"example-project",level:2},{value:"Project Name: Real Estate Highlighted Property Email Blast",id:"project-name-real-estate-highlighted-property-email-blast",level:3},{value:"Project Description:",id:"project-description",level:3},{value:"Workflow Overview",id:"workflow-overview",level:2},{value:"Example Prompts",id:"example-prompts",level:3},{value:"Task Description:",id:"task-description",level:4},{value:"Input Prompt Template:",id:"input-prompt-template",level:4},{value:"Reference Column:",id:"reference-column",level:4},{value:"Result Format:",id:"result-format",level:4},{value:"Tools:",id:"tools",level:4}];function d(e){const t={br:"br",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"-basic-use-case",children:"\ud83d\udcda Basic Use Case"})}),"\n",(0,i.jsx)(t.h2,{id:"example-project",children:"Example Project"}),"\n",(0,i.jsx)(t.h3,{id:"project-name-real-estate-highlighted-property-email-blast",children:"Project Name: Real Estate Highlighted Property Email Blast"}),"\n",(0,i.jsx)(t.h3,{id:"project-description",children:"Project Description:"}),"\n",(0,i.jsx)(t.p,{children:"This project sends highlighted property information based on location to potential clients. The goal is to assist real estate agents in reaching out to clients with the most valuable property listings."}),"\n",(0,i.jsx)(t.h2,{id:"workflow-overview",children:"Workflow Overview"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Name Your Project:"}),(0,i.jsx)(t.br,{}),"\n","Start by naming your project (e.g., ",(0,i.jsx)(t.strong,{children:"Real Estate Highlighted Property Email Blast"}),")."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Add a Project Description:"}),(0,i.jsx)(t.br,{}),"\n",'Write a brief description of what your project is about (e.g., "Sends highlighted property information based on location to potential clients").']}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Upload Your Dataset:"}),(0,i.jsx)(t.br,{}),"\n","Upload a dataset in ",(0,i.jsx)(t.strong,{children:"JSONL"})," format. Each line should be a valid JSON object containing business-related input and output data. Example:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-json",children:'{"location": "Palo Alto, CA", "price": 3750000, "image": "image_url"}\n{"location": "San Francisco, CA", "price": 4500000, "image": "image_url"}\n'})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Create Project:"}),(0,i.jsx)(t.br,{}),"\n","After uploading your dataset, click ",(0,i.jsx)(t.strong,{children:"Create Project"}),". You will be directed to the Data Page."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Set Initial Prompts:"}),(0,i.jsx)(t.br,{}),"\n","Go to the ",(0,i.jsx)(t.strong,{children:"Settings Page"})," to configure your ",(0,i.jsx)(t.strong,{children:"Input Prompt"})," and ",(0,i.jsx)(t.strong,{children:"Judge Prompt"}),". Below are example prompts you can use:"]}),"\n",(0,i.jsx)(t.h3,{id:"example-prompts",children:"Example Prompts"}),"\n",(0,i.jsx)(t.h4,{id:"task-description",children:"Task Description:"}),"\n",(0,i.jsx)(t.p,{children:"Based on user task, which is to get a list of properties based on location, choose the top 2 most expensive ones, and send the result to email to show the address, price, and highlighted image."}),"\n",(0,i.jsx)(t.h4,{id:"input-prompt-template",children:"Input Prompt Template:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"Find the top 2 most expensive houses in Palo Alto, CA, and send the result to email [potential client email]. Make sure you send out the email, and make sure the image is in the email as an image, in a circle thumbnail, not a link.\n"})}),"\n",(0,i.jsx)(t.h4,{id:"reference-column",children:"Reference Column:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"Price\n"})}),"\n",(0,i.jsx)(t.h4,{id:"result-format",children:"Result Format:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"3750000\n"})}),"\n",(0,i.jsx)(t.h4,{id:"tools",children:"Tools:"}),"\n",(0,i.jsx)(t.p,{children:'Select "find_properties_list" and "send_email".'}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Save Settings:"}),(0,i.jsx)(t.br,{}),"\n","After configuring your settings, make sure to save them."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Generate Agent:"}),(0,i.jsx)(t.br,{}),"\n","Once your prompts are set, click ",(0,i.jsx)(t.strong,{children:"Generate Agent"})," to create your agents. You will be taken to the ",(0,i.jsx)(t.strong,{children:"Agent Page"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"View Agent Generation:"}),(0,i.jsx)(t.br,{}),"\n","On the ",(0,i.jsx)(t.strong,{children:"Agent Page"}),", you can view the generation process and execution plan. Click deploy if needed. Double-check to see if the potential client actually receives the email for the highlighted property."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.p,{children:"This is a basic example of how to set up and use Creao AI for creating automated systems using your own dataset. For more detailed instructions, see the rest of the documentation."})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>l});var s=n(6540);const i={},r=s.createContext(i);function o(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);