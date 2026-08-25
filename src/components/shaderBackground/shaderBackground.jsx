import { useEffect, useRef } from "react";
import styles from "./styles.module.css";

const VERTEX_SRC = `#version 300 es
in vec2 position;
void main() {
  gl_Position = vec4(position, 0.0, 1.0);
}`;

const FRAGMENT_SRC = `#version 300 es
precision highp float;
out vec4 fragColor;
uniform vec2 uResolution;
uniform float uTime;

#define PI 3.14159265359

void main() {
  vec2 uv = (gl_FragCoord.xy - 0.5 * uResolution) / uResolution.y;
  float r = length(uv) + 0.0008;
  float a = atan(uv.y, uv.x);

  float t = uTime * 0.15;
  float tunnel = 1.0 / r + t * 2.0;
  float spokes = a * 5.0 / PI;

  float cell = abs(fract(tunnel - spokes) - 0.5);
  float lines = smoothstep(0.05, 0.0, cell);

  float depthFade = clamp(1.0 - r * 0.85, 0.0, 1.0);
  float glow = exp(-r * 2.6) * 0.55;

  vec3 colA = vec3(0.16, 0.87, 0.80);
  vec3 colB = vec3(0.49, 0.38, 1.0);
  vec3 col = mix(colA, colB, 0.5 + 0.5 * sin(a * 2.0 + t * 0.7));

  col *= (lines * depthFade * 0.9 + glow);

  float vignette = smoothstep(1.35, 0.15, r);
  col *= vignette;

  fragColor = vec4(col, 1.0);
}`;

function compileShader(gl, type, source) {
  const shader = gl.createShader(type);
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    gl.deleteShader(shader);
    return null;
  }
  return shader;
}

function createProgram(gl) {
  const vertexShader = compileShader(gl, gl.VERTEX_SHADER, VERTEX_SRC);
  const fragmentShader = compileShader(gl, gl.FRAGMENT_SHADER, FRAGMENT_SRC);
  if (!vertexShader || !fragmentShader) return null;

  const program = gl.createProgram();
  gl.attachShader(program, vertexShader);
  gl.attachShader(program, fragmentShader);
  gl.linkProgram(program);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
    gl.deleteProgram(program);
    return null;
  }
  return program;
}

function ShaderBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const gl = canvas.getContext("webgl2", { antialias: true, alpha: false });
    if (!gl) return undefined;

    const program = createProgram(gl);
    if (!program) return undefined;

    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 3, -1, -1, 3]),
      gl.STATIC_DRAW
    );

    const positionLoc = gl.getAttribLocation(program, "position");
    gl.enableVertexAttribArray(positionLoc);
    gl.vertexAttribPointer(positionLoc, 2, gl.FLOAT, false, 0, 0);

    const resolutionLoc = gl.getUniformLocation(program, "uResolution");
    const timeLoc = gl.getUniformLocation(program, "uTime");

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    let width = 0;
    let height = 0;

    function resize() {
      width = Math.floor(canvas.clientWidth * dpr);
      height = Math.floor(canvas.clientHeight * dpr);
      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
        gl.viewport(0, 0, width, height);
      }
    }

    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(canvas);
    resize();

    gl.useProgram(program);

    let rafId = null;
    const start = performance.now();

    function render(now) {
      const elapsed = (now - start) / 1000;
      gl.uniform2f(resolutionLoc, width, height);
      gl.uniform1f(timeLoc, elapsed);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
      if (!reduceMotion) {
        rafId = requestAnimationFrame(render);
      }
    }

    render(performance.now());

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <>
      <canvas ref={canvasRef} className={styles.canvas} aria-hidden="true" />
      <div className={styles.overlay} aria-hidden="true" />
    </>
  );
}

export default ShaderBackground;
