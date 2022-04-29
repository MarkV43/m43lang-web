import * as wasm from "wasm-app";
import { memory } from "wasm-app/inner_bg";

import('p5');
import './canvas.js';
import '../css/style.css';

window.wasm = wasm;
window.wasm_memory = memory;
wasm.debug_mode();
