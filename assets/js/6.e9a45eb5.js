(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{57:function(e,t,a){"use strict";a.r(t);var s=a(0),n=Object(s.a)({},function(){this.$createElement;this._self._c;return this._m(0)},[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"content"},[a("h1",{attrs:{id:"route"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#route","aria-hidden":"true"}},[e._v("#")]),e._v(" ROUTE")]),a("p",[e._v("Route is one of ServerHub's core features. With route, all HTTP request can be filtered and send to correct handlers. For example, "),a("code",[e._v("/index.html")]),e._v(" might be a static webpage, but "),a("code",[e._v("/home/index")]),e._v(" could be a controller URL. ServerHub's route system provide two ways to deal with it. One is called positive rules and the other one is called negative rules.")]),a("h2",{attrs:{id:"positive-rules"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#positive-rules","aria-hidden":"true"}},[e._v("#")]),e._v(" Positive rules")]),a("p",[e._v("Positive rules looks like JavaScript string formatting. There are several '{' and '}' symbols in the rule content. Between each pair of parenthess lies the segment name of rule syntax. Valid segment names are: controller, action and id. For example: "),a("code",[e._v('"api/{controller}/{action}/{id}"')]),e._v(".")]),a("p",[e._v("Prefix "),a("code",[e._v("api")]),e._v(" is a normal string. Every request that matches the rule should start with this prefix.")]),a("p",[a("code",[e._v("controller")]),e._v(" is the name of controller, which is right the name of the controller file.")]),a("p",[a("code",[e._v("action")]),e._v(" is the function property defined in controller scripts.")]),a("p",[e._v("Here we have some examples (assuming that you have home controller with index/info actions in your project):")]),a("ul",[a("li",[a("p",[e._v("Valid request path")]),a("ul",[a("li",[e._v("/api/home/index")]),a("li",[e._v("/api/home/info/")]),a("li",[e._v("/api/home/index/5")]),a("li",[e._v("/api/home/index/5?name=xu_wangzhe")]),a("li",[e._v("/api/home/index/?name=xu_wangzhe")])])]),a("li",[a("p",[e._v("Invalid request path")]),a("ul",[a("li",[e._v("/home/index")]),a("li",[e._v("/api/home/index.html")]),a("li",[e._v("/api/home/5")]),a("li",[e._v("/api/index/5?name=xu_wangzhe")]),a("li",[e._v("/api/home-foo/index/?name=xu_wangzhe")])]),a("p",[e._v("Request paths that does not match the route rule will be treated as requests to static resources.")])])]),a("p",[e._v("But how to set positive rule? Look at this:")]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[e._v("route "),a("span",{attrs:{class:"token operator"}},[e._v("=>")]),e._v(" "),a("span",{attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  route"),a("span",{attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{attrs:{class:"token function"}},[e._v("MapRoute")]),a("span",{attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{attrs:{class:"token string"}},[e._v('"default"')]),a("span",{attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),a("span",{attrs:{class:"token string"}},[e._v('"v1/{controller}/{action}/{id}"')]),a("span",{attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n"),a("span",{attrs:{class:"token punctuation"}},[e._v("}")]),a("span",{attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])]),a("p",[e._v("Pass this annoymous function as the second parameter of "),a("code",[e._v("instance.Run()")]),e._v(" method.")]),a("h2",{attrs:{id:"negative-rules"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#negative-rules","aria-hidden":"true"}},[e._v("#")]),e._v(" Negative rules")]),a("p",[a("strong",[e._v("Negative rules are checked before positive rules")]),e._v(". If any request path matched any negative rule, it will immediately be treated as static resources.")]),a("p",[e._v("Negative rules support "),a("strong",[e._v("both")]),e._v(" string rule definition and regular expressions. An array is used to contain all the rules needed.")]),a("p",[e._v("Here are three examples:")]),a("ul",[a("li",[e._v("String rule example")])]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[e._v("route"),a("span",{attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{attrs:{class:"token function"}},[e._v("IgnoreRoute")]),a("span",{attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{attrs:{class:"token punctuation"}},[e._v("[")]),a("span",{attrs:{class:"token string"}},[e._v('"/language/all"')]),a("span",{attrs:{class:"token punctuation"}},[e._v("]")]),a("span",{attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])]),a("p",[e._v("As you can see. The "),a("code",[e._v("language")]),e._v(" controller may have "),a("code",[e._v("english")]),e._v(" and "),a("code",[e._v("chinese")]),e._v(" actions, but "),a("code",[e._v("all")]),e._v(" is not an action. If we don't ignore this route, ServerHub will try to seek for action named "),a("code",[e._v("all")]),e._v(", which will fire an exception. So, we use this string rule to ignore specific request path.")]),a("p",[e._v("One thing that you should know about string negative route rule is: your rules should always start with '/'.")]),a("ul",[a("li",[e._v("Regular expression example")])]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[e._v("route"),a("span",{attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{attrs:{class:"token function"}},[e._v("IgnoreRoute")]),a("span",{attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{attrs:{class:"token punctuation"}},[e._v("[")]),a("span",{attrs:{class:"token operator"}},[e._v("/")]),a("span",{attrs:{class:"token operator"}},[e._v("^")]),e._v("\\"),a("span",{attrs:{class:"token operator"}},[e._v("/")]),e._v("no"),a("span",{attrs:{class:"token operator"}},[e._v("-")]),e._v("route"),a("span",{attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{attrs:{class:"token operator"}},[e._v("*")]),e._v("$"),a("span",{attrs:{class:"token operator"}},[e._v("/")]),e._v("i"),a("span",{attrs:{class:"token punctuation"}},[e._v("]")]),a("span",{attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])]),a("p",[e._v('What if want to ignore all routes that start with "no-route"? Should we write every possibilities? Of course, that is not possible. So we use the regular expression above to ignore all request with prefix "no-route" (upper-case or lower-case)')]),a("ul",[a("li",[e._v("Multiple negative rules")])]),a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[e._v("route"),a("span",{attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{attrs:{class:"token function"}},[e._v("IgnoreRoute")]),a("span",{attrs:{class:"token punctuation"}},[e._v("(")]),a("span",{attrs:{class:"token punctuation"}},[e._v("[")]),a("span",{attrs:{class:"token string"}},[e._v('"/language/all"')]),a("span",{attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),a("span",{attrs:{class:"token operator"}},[e._v("/")]),a("span",{attrs:{class:"token operator"}},[e._v("^")]),e._v("\\"),a("span",{attrs:{class:"token operator"}},[e._v("/")]),e._v("no"),a("span",{attrs:{class:"token operator"}},[e._v("-")]),e._v("route"),a("span",{attrs:{class:"token punctuation"}},[e._v(".")]),a("span",{attrs:{class:"token operator"}},[e._v("*")]),e._v("$"),a("span",{attrs:{class:"token operator"}},[e._v("/")]),e._v("i"),a("span",{attrs:{class:"token punctuation"}},[e._v("]")]),a("span",{attrs:{class:"token punctuation"}},[e._v(")")]),a("span",{attrs:{class:"token punctuation"}},[e._v(";")]),e._v("\n")])]),a("h2",{attrs:{id:"search-query-in-url"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#search-query-in-url","aria-hidden":"true"}},[e._v("#")]),e._v(" Search/Query in URL")]),a("p",[e._v("According to "),a("a",{attrs:{href:"https://tools.ietf.org/html/rfc1738",target:"_blank",rel:"noopener noreferrer"}},[e._v("RFC 1738")]),e._v(", a valid search in URL is defined as follows:")]),a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('search         = *[ uchar | ";" | ":" | "@" | "&" | "=" ]\nuchar          = unreserved | escape\nunreserved     = alpha | digit | safe | extra\nalpha          = lowalpha | hialpha\nlowalpha       = "a" | "b" | "c" | "d" | "e" | "f" | "g" | "h" |\n                 "i" | "j" | "k" | "l" | "m" | "n" | "o" | "p" |\n                 "q" | "r" | "s" | "t" | "u" | "v" | "w" | "x" |\n                 "y" | "z"\nhialpha        = "A" | "B" | "C" | "D" | "E" | "F" | "G" | "H" | "I" |\n                 "J" | "K" | "L" | "M" | "N" | "O" | "P" | "Q" | "R" |\n                 "S" | "T" | "U" | "V" | "W" | "X" | "Y" | "Z"\ndigit          = "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" |\n                 "8" | "9"\nsafe           = "$" | "-" | "_" | "." | "+"\nextra          = "!" | "*" | "\'" | "(" | ")" | ","\nescape         = "%" hex hex\nhex            = digit | "A" | "B" | "C" | "D" | "E" | "F" |\n                 "a" | "b" | "c" | "d" | "e" | "f"\n')])]),a("p",[e._v("More specificly, ServerHub allows:")]),a("ul",[a("li",[a("code",[e._v("?")]),e._v(" as the start of a search/query.")]),a("li",[e._v("Identifier before "),a("code",[e._v("=")]),e._v(" is used as search key.")]),a("li",[e._v("Identifier after "),a("code",[e._v("=")]),e._v(" is used as search value.")]),a("li",[e._v("Search items use "),a("code",[e._v("&")]),e._v(" as delimiter.")])]),a("p",[e._v('Please always obey the above rules, later versions of ServerHub might eable "strict mode" to force ignore search/query with invalid characters.')])])}],!1,null,null,null);t.default=n.exports}}]);