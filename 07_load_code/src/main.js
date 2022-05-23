import { hello, asHello } from "./util";
import weChat from "../assets/images/weChat.png";
import svgUrl from "../assets/images/404.svg";
import text from "../assets/text/01.text";
import jpgUrl from "../assets/images/bg.jpg";
import "../assets/styles/base.css";
import _ from "lodash";
import "./async-module";

console.log("main lodash", _.join[(5, 6, 7)]);
hello();
asHello();
const img = document.createElement("img");
img.src = weChat;
document.body.appendChild(img);

const svg = document.createElement("img");
svg.style.cssText = "width:400px;height:200px";
svg.src = svgUrl;
document.body.appendChild(svg);

const block = document.createElement("div");
block.style.cssText = "width:400px;height:200px;background:#eee";
block.classList.add("bg");
block.textContent = text;
document.body.appendChild(block);

const jpg = document.createElement("img");
jpg.style.cssText = "width:400px;height:200px";
jpg.src = jpgUrl;
document.body.appendChild(jpg);
