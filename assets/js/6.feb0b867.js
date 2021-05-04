(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{356:function(e,t,o){e.exports=o.p+"assets/media/builder_demo.03c2365a.webm"},357:function(e,t,o){e.exports=o.p+"assets/media/form_demo.7cec6b43.webm"},365:function(e,t,o){"use strict";o.r(t);var r=o(45),s=Object(r.a)({},(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"dynamic-forms-for-laravel"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#dynamic-forms-for-laravel"}},[e._v("#")]),e._v(" Dynamic Forms for Laravel")]),e._v(" "),r("p",[e._v("User-defined forms are a perennial problem for developers.")]),e._v(" "),r("p",[e._v("Dynamic Forms for Laravel gives you an easy solution: a drag-and-drop builder, an easy way to display the forms, and back-end validation to ensure the submitted data is good.")]),e._v(" "),r("p",[e._v("If you want to see it in action, here are some demo videos:")]),e._v(" "),r("details",{staticClass:"custom-block details"},[r("summary",[e._v("Creating a form in the builder")]),e._v(" "),r("video",{attrs:{controls:"controls",preload:"none",width:"100%"}},[r("source",{attrs:{src:o(356),type:"video/webm"}})])]),e._v(" "),r("details",{staticClass:"custom-block details"},[r("summary",[e._v("Filling out a dynamic form")]),e._v(" "),r("video",{attrs:{controls:"controls",preload:"none",width:"100%"}},[r("source",{attrs:{src:o(357),type:"video/webm"}})])]),e._v(" "),r("h2",{attrs:{id:"how-does-this-work"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#how-does-this-work"}},[e._v("#")]),e._v(" How does this work?")]),e._v(" "),r("p",[e._v("The front-end is powered by the open source "),r("a",{attrs:{href:"https://github.com/formio/formio.js",target:"_blank",rel:"noopener noreferrer"}},[e._v("Form.io"),r("OutboundLink")],1),e._v(" JavaScript library. This is an awesome library: the builder is user-friendly, you can adjust what's offered, and add your own custom form fields.")]),e._v(" "),r("p",[e._v("On the backend, it's as simple as calling "),r("code",[e._v("$request->validateDynamicForm()")]),e._v(". It behaves just like the "),r("a",{attrs:{href:"https://laravel.com/docs/8.x/validation#quick-writing-the-validation-logic",target:"_blank",rel:"noopener noreferrer"}},[r("code",[e._v("validate")]),r("OutboundLink")],1),e._v(" method you're used to in Laravel, giving you valid data you can trust.")]),e._v(" "),r("p",[e._v("You "),r("strong",[e._v("do not")]),e._v(" need to use the Form.io SaaS platform. Your Laravel application is filling that role.")]),e._v(" "),r("h2",{attrs:{id:"concepts"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#concepts"}},[e._v("#")]),e._v(" Concepts")]),e._v(" "),r("p",[e._v("There are a couple pieces to be aware of:")]),e._v(" "),r("ul",[r("li",[e._v("The "),r("strong",[e._v("form builder")]),e._v(" is a WYSIWYG editor that people use to create forms.")]),e._v(" "),r("li",[r("strong",[e._v("Form definitions")]),e._v(" are created & updated by the form builder. Definitions are JSON documents that describe a form's fields, validation logic, help text, etc.")]),e._v(" "),r("li",[r("strong",[e._v("Components")]),e._v(" are individual form fields. Formiojs comes with a wide variety of components, from basic "),r("code",[e._v("<input type='text>")]),e._v(" fields to rich WYSIWYG textareas and API-backed address lookups. You can reconfigure existing components to create new ones, or write your own from scratch.")]),e._v(" "),r("li",[r("strong",[e._v("Forms")]),e._v(" are shown when you render a form definition. The form can be read-write or read-only (to display a submitted form). Forms produce submissions in the form of key:value JSON documents.")])]),e._v(" "),r("h2",{attrs:{id:"supported-features"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#supported-features"}},[e._v("#")]),e._v(" Supported Features")]),e._v(" "),r("p",[e._v("Formiojs offers a lot of functionality. Dynamic Forms for Laravel has implemented a limited subset of all its available features.")]),e._v(" "),r("p",[e._v("Most of the decisions not to include something were driven by what would give us a good minimum viable product. If there are missing features that you would like to see, please feel free to submit an issue to discuss including it.")]),e._v(" "),r("h3",{attrs:{id:"components"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#components"}},[e._v("#")]),e._v(" Components")]),e._v(" "),r("p",[e._v("Most of the Formiojs components are supported in some configuration. These components have limitations:")]),e._v(" "),r("ul",[r("li",[e._v("Address only supports Open Street Maps")]),e._v(" "),r("li",[e._v("File only supports Amazon S3")]),e._v(" "),r("li",[e._v("Select only supports values, and not API-backed resources")])]),e._v(" "),r("p",[e._v("These components are not supported at all:")]),e._v(" "),r("ul",[r("li",[e._v("HTML Element")]),e._v(" "),r("li",[e._v("Tags")]),e._v(" "),r("li",[e._v("Hidden")]),e._v(" "),r("li",[e._v("Data Map")]),e._v(" "),r("li",[e._v("Data Grid")]),e._v(" "),r("li",[e._v("Edit Grid")]),e._v(" "),r("li",[e._v("Tree")]),e._v(" "),r("li",[e._v("Tabs")]),e._v(" "),r("li",[e._v("ReCAPTCHA")]),e._v(" "),r("li",[e._v("Resource")]),e._v(" "),r("li",[e._v("Nested Form")])]),e._v(" "),r("h3",{attrs:{id:"scripting"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#scripting"}},[e._v("#")]),e._v(" Scripting")]),e._v(" "),r("p",[e._v("Formiojs offers several methods for creating dependencies between form fields: simple UI-driven setups, JSON Logic, and custom JavaScript.")]),e._v(" "),r("p",[e._v("Dynamic Forms for Laravel only supports the simple UI-driven dependencies.")]),e._v(" "),r("p",[e._v("No JS eval or other scripting is supported at this point in time.")]),e._v(" "),r("h3",{attrs:{id:"other-features"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#other-features"}},[e._v("#")]),e._v(" Other Features")]),e._v(" "),r("p",[e._v("PDF forms and form wizards are not supported.")])])}),[],!1,null,null,null);t.default=s.exports}}]);