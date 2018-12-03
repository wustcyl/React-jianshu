import { injectGlobal } from "styled-components";

injectGlobal`
@font-face {font-family: "iconfont";
  src: url('./iconfont.eot?t=1543656372295'); /* IE9*/
  src: url('./iconfont.eot?t=1543656372295#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff;charset=utf-8;base64,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') format('woff'),
  url('./iconfont.ttf?t=1543656372295') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+*/
  url('./iconfont.svg?t=1543656372295#iconfont') format('svg'); /* iOS 4.1- */
}

.iconfont {
  font-family:"iconfont" !important;
  font-size:18px;
  font-style:normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
`;

 

 

