import React, { Component } from "react";

export default class Tawkto extends Component {
  state = {};

  componentDidMount() {
    const tawk = document.createElement("script");
    const scriptText = document.createTextNode(`
    (function(){
    var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
    s1.async=true;
    s1.src='https://embed.tawk.to/61352894649e0a0a5cd4bc41/1ferqd1pk';
    s1.charset='UTF-8';
    s1.setAttribute('crossorigin','*');
    s0.parentNode.insertBefore(s1,s0);
    })();
    `);
    tawk.appendChild(scriptText);
    document.getElementById("tawkto").appendChild(tawk);
  }
  render() {
    return <div id="tawkto" />;
  }
}

// <!--Start of Tawk.to Script-->
// <script type="text/javascript">
// var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
// (function(){
// var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
// s1.async=true;
// s1.src='https://embed.tawk.to/61352894649e0a0a5cd4bc41/1ferqd1pk';
// s1.charset='UTF-8';
// s1.setAttribute('crossorigin','*');
// s0.parentNode.insertBefore(s1,s0);
// })();
// </script>
// <!--End of Tawk.to Script-->