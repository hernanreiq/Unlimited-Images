(this["webpackJsonpunlimited-images"]=this["webpackJsonpunlimited-images"]||[]).push([[0],{55:function(e,t,a){},71:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),c=a(24),r=a.n(c),i=(a(54),a(55),a(7)),o=a(8),l=a(10),d=a(9),j=a(27),h=a(11),p=a(1),b=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(p.jsx)(s.a.Fragment,{children:Object(p.jsx)("main",{children:Object(p.jsx)("div",{className:"container mt-5 py-4",children:Object(p.jsxs)("div",{className:"card-index shadow",children:[Object(p.jsx)("h1",{className:"text-center display-4",children:"Unlimited Images"}),Object(p.jsx)("h4",{className:"text-center",children:"Watch and enjoy the best royalty-free images and videos"}),Object(p.jsxs)("div",{className:"text-center mt-4",children:[Object(p.jsx)("a",{href:"/Unlimited-Images/images",className:"btn btn-success shadow m-2",children:"Images"}),Object(p.jsx)("a",{href:"/Unlimited-Images/videos",className:"btn btn-success shadow m-2",children:"Videos"})]})]})})})})}}]),a}(n.Component),m=b,u=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return Object(p.jsx)(s.a.Fragment,{children:this.props.images.photos.map((function(t,a){return Object(p.jsx)("div",{className:"col-md-4 my-2",children:Object(p.jsxs)("div",{className:"card shadow",children:[Object(p.jsx)("div",{className:"card-body p-0",children:Object(p.jsx)("img",{src:t.src.tiny,alt:"content by pexels",className:"card-img",onClick:function(){e.props.showModal(t)}})}),Object(p.jsx)("div",{className:"card-footer bg-dark",children:Object(p.jsx)("a",{href:t.photographer_url,target:"_blank",rel:"noreferrer",className:"text-warning",children:t.photographer})})]})},a)}))})}}]),a}(n.Component),g=u,O=function(e,t,a){var n="",s="";return"next"===a?(n=e>0&&e<100?e+1:1,s="btn-success"):"back"===a&&(e>1&&e<=100?n=e-1:1===e&&(n=100),s="btn-danger"),Object(p.jsx)("a",{href:"/".concat(t,"/").concat(n),className:"btn "+s,children:Object(p.jsx)("b",{children:a.toUpperCase()})})},x=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(p.jsx)(s.a.Fragment,{children:"images"===this.props.content||"videos"===this.props.content?Object(p.jsx)("div",{className:"container py-4",children:Object(p.jsx)("div",{className:"row",children:Object(p.jsx)("div",{className:"col-md-4 offset-md-4 text-center",children:Object(p.jsxs)("div",{className:"card-index",children:[O(this.props.page,this.props.content,"back"),Object(p.jsx)("span",{className:"px-3 h4 text-white",children:this.props.page}),O(this.props.page,this.props.content,"next")]})})})}):""})}}]),a}(n.Component),v=x,f=a(31),y=a.n(f),w=a(42),N=a(46),k=Object(N.a)("563492ad6f917000010000010f9e4c416ff8451296f5943ac35bbbcc"),C=function(){var e=Object(w.a)(y.a.mark((function e(t){var a;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={},e.next=3,k.photos.curated({per_page:30,page:t}).then((function(e){a=e}));case 3:return e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),I=function(){var e=Object(w.a)(y.a.mark((function e(t){var a;return y.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a={},e.next=3,k.videos.popular({per_page:30,page:t}).then((function(e){a=e.videos}));case 3:return e.abrupt("return",a);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),M=a(75),F=a(73),U=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).showData=function(){console.log(e.props.image)},e}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return Object(p.jsx)(s.a.Fragment,{children:Object(p.jsxs)(M.a,{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,show:this.props.showModal,animation:!1,children:[Object(p.jsx)(M.a.Header,{className:"bg-dark",children:Object(p.jsx)(M.a.Title,{children:Object(p.jsx)("a",{href:this.props.image.photographer_url,target:"_blank",rel:"noreferrer",className:"text-warning",children:this.props.image.photographer})})}),Object(p.jsx)(M.a.Body,{className:"bg-dark",children:Object(p.jsx)("img",{src:this.props.image.src.original,alt:"content by pexels",className:"card-img"})}),Object(p.jsx)(M.a.Footer,{className:"bg-dark",children:Object(p.jsx)(F.a,{variant:"danger",onClick:function(){e.props.closeModal()},children:"Close"})})]})})}}]),a}(n.Component),_=U,S=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={images:"",imageClicked:{},show:!1},e.getImage=function(){C(e.props.page).then((function(t){e.setState({images:t})}))},e.showModal=function(t){e.setState({imageClicked:t,show:!0})},e.closeModal=function(){e.setState({imageClicked:{},show:!1})},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.getImage()}},{key:"componentDidUpdate",value:function(e,t){e.page!==this.props.page&&this.getImage()}},{key:"render",value:function(){return Object(p.jsx)(s.a.Fragment,{children:Object(p.jsxs)("main",{children:[Object(p.jsx)("div",{className:"container py-4",children:Object(p.jsx)("div",{className:"row",children:this.state.images&&Object(p.jsx)(g,{images:this.state.images,showModal:this.showModal})})}),Object(p.jsx)(v,{content:this.props.contentPage,page:this.props.page}),this.state.show&&Object(p.jsx)(_,{image:this.state.imageClicked,showModal:this.state.show,closeModal:this.closeModal})]})})}}]),a}(n.Component),P=S,D=a(77),B=a(74),T=a(76),V=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(p.jsx)(s.a.Fragment,{children:Object(p.jsx)(D.a,{bg:"success",expand:"lg",variant:"dark",className:"shadow",children:Object(p.jsxs)(B.a,{children:[Object(p.jsx)(D.a.Brand,{children:Object(p.jsx)(j.b,{to:"/Unlimited-Images",className:"border-none py-3 text-white font-weight-bold text-decoration-none",children:"Unlimited Images"})}),Object(p.jsx)(D.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(p.jsx)(D.a.Collapse,{id:"basic-navbar-nav",children:Object(p.jsxs)(T.a,{className:"ml-auto",children:[Object(p.jsx)(j.b,{to:"/Unlimited-Images/home",activeClassName:"active",className:"text-white mx-3 text-decoration-none",children:"Home"}),Object(p.jsx)(j.b,{to:"/Unlimited-Images/images",activeClassName:"active",className:"text-white mx-3 text-decoration-none",children:"Images"}),Object(p.jsx)(j.b,{to:"/Unlimited-Images/videos",activeClassName:"active",className:"text-white mx-3 text-decoration-none",children:"Videos"})]})})]})})})}}]),a}(n.Component),A=V,H=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return Object(p.jsx)(s.a.Fragment,{children:this.props.videos.map((function(t,a){return Object(p.jsx)("div",{className:"col-md-4 my-2",children:Object(p.jsxs)("div",{className:"card shadow",children:[Object(p.jsx)("div",{className:"card-header bg-dark",children:Object(p.jsx)("a",{href:t.user.url,target:"_blank",rel:"noreferrer",className:"text-warning",children:t.user.name})}),Object(p.jsx)("div",{className:"card-body p-0",children:Object(p.jsx)("img",{src:t.image,alt:"content by pexels",className:"card-img"})}),Object(p.jsx)("div",{className:"card-footer bg-dark",children:Object(p.jsx)("button",{className:"btn btn-success d-block w-100",onClick:function(){e.props.showModal(t)},children:"Play"})})]})},a)}))})}}]),a}(n.Component),z=H,J=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this;return Object(p.jsx)(s.a.Fragment,{children:Object(p.jsxs)(M.a,{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,show:this.props.showModal,animation:!1,children:[Object(p.jsx)(M.a.Header,{className:"bg-dark",children:Object(p.jsx)(M.a.Title,{children:Object(p.jsx)("a",{href:this.props.video.user.url,target:"_blank",rel:"noreferrer",className:"text-warning",children:this.props.video.user.name})})}),Object(p.jsx)(M.a.Body,{className:"bg-dark",children:Object(p.jsx)("video",{className:"card-img",controls:!0,children:Object(p.jsx)("source",{src:this.props.video.video_files[0].link,type:this.props.video.video_files[0].file_type})})}),Object(p.jsx)(M.a.Footer,{className:"bg-dark",children:Object(p.jsx)(F.a,{variant:"danger",onClick:function(){e.props.closeModal()},children:"Close"})})]})})}}]),a}(n.Component),L=J,E=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,s=new Array(n),c=0;c<n;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={videos:"",videoClicked:{},show:!1},e.getVideo=function(){I(e.props.page).then((function(t){e.setState({videos:t})}))},e.showModal=function(t){e.setState({videoClicked:t,show:!0})},e.closeModal=function(){e.setState({videoClicked:{},show:!1})},e}return Object(o.a)(a,[{key:"componentDidMount",value:function(){this.getVideo()}},{key:"componentDidUpdate",value:function(e,t){e.page!==this.props.page&&this.getVideo()}},{key:"render",value:function(){return Object(p.jsx)(s.a.Fragment,{children:Object(p.jsxs)("main",{children:[Object(p.jsx)("div",{className:"container py-4",children:Object(p.jsx)("div",{className:"row",children:this.state.videos&&Object(p.jsx)(z,{videos:this.state.videos,showModal:this.showModal})})}),Object(p.jsx)(v,{content:this.props.contentPage,page:this.props.page}),this.state.show&&Object(p.jsx)(L,{video:this.state.videoClicked,showModal:this.state.show,closeModal:this.closeModal})]})})}}]),a}(n.Component),W=E,q=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(p.jsxs)(j.a,{children:[Object(p.jsx)(A,{}),Object(p.jsxs)(h.c,{children:[Object(p.jsx)(h.a,{exact:!0,path:"/Unlimited-Images/",component:m}),Object(p.jsx)(h.a,{exact:!0,path:"/Unlimited-Images/images/:page?",render:function(e){var t=1;return(parseInt(e.match.params.page)>0||parseInt(e.match.params.page)<267)&&(t=parseInt(e.match.params.page)),Object(p.jsx)(P,{page:t,contentPage:"images"})}}),Object(p.jsx)(h.a,{exact:!0,path:"/Unlimited-Images/videos/:page?",render:function(e){var t=1;return(parseInt(e.match.params.page)>0||parseInt(e.match.params.page)<100)&&(t=parseInt(e.match.params.page)),Object(p.jsx)(W,{page:t,contentPage:"videos"})}})]})]})}}]),a}(n.Component),G=q,K=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){return Object(p.jsx)(G,{})}}]),a}(n.Component),Q=K,R=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,78)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,c=t.getLCP,r=t.getTTFB;a(e),n(e),s(e),c(e),r(e)}))};r.a.render(Object(p.jsx)(s.a.StrictMode,{children:Object(p.jsx)(Q,{})}),document.getElementById("root")),R()}},[[71,1,2]]]);
//# sourceMappingURL=main.86cb107b.chunk.js.map