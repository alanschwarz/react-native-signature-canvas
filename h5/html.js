export default (script) =>
  `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Signature Pad demo</title>
  <meta name="description" content="Signature Pad - HTML5 canvas based smooth signature drawing using variable width spline interpolation.">

  <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1, user-scalable=no">

  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-status-bar-style" content="black">

  <style>
    body {
      font-family: Helvetica, Sans-Serif;
    
      -moz-user-select: none;
      -webkit-user-select: none;
      -ms-user-select: none;
      margin:0;
      overflow:hidden;
    }
    body,html {
      width: 100%;
      height: 100%;
    }
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    
    .rotated-false {
      width: 100%;
      height: 100%;
    }
    .m-signature-pad {
      font-size: 10px;
      width: 100%;
      height: 100%;
      background-color: #fff;
    }
    
    .m-signature-pad--body {
      position: relative;
      height: 100%;
      border: 1px solid #f4f4f4;
    }
    
    .m-signature-pad--body
      canvas {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        border-radius: 4px;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.02) inset;
      }
    
    <%style%>
    </style>
</head>
<body onselectstart="return false">
  <div class="rotated-false">
    <div id="signature-pad" class="m-signature-pad">
      <div class="m-signature-pad--body">
        <canvas></canvas>
      </div>
    </div>
  </div>

  <script>
    ${script}
  </script>
</body>
</html>`;
