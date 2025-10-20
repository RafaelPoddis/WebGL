main()

function main()
{
    const canvas = document.querySelector("#canvas");

    const gl = canvas.getContext("webgl");

    if (gl === null){
        alert("Unable to initialize WebGL. Your browser or machine may not support it.");
        return;
    }

    
    
    const vShaderSource = `
    attribute vec4 aVertexPosition;
    
    uniform mat4 uModelViewMatrix;
    uniform mat4 uProjectionMatrix;
    
    void main() {
    gl_Position = uProjectionMatrix * uModelViewMatrix * aVertexPosition;
    }`;
    
    const fShaderSource = `
    void main() {
    gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);
    }`;

    vShader = createShader(gl, gl.VERTEX_SHADER, vShaderSource);
    fShader = createShader(gl, gl.FRAGMENT_SHADER, fShaderSource);
    
    const program = gl.createProgram();

    gl.attachShader(program, vShader);
    gl.attachShader(program, fShader);

    gl.linkProgram(program);
    gl.useProgram(program);

    gl.clearColor(255, 255, 255, 1.0);
    gl.clear(gl.COLOR_BUFFER_BIT);

    // Retenagulo
    var translation = [0, 0];
    var width = 100;
    var height = 30;
    var color = [Math.random(), Math.random(), Math.random(), 1];
}

function createShader(gl, type, source)
{
    const shader = gl.createShader(type);

    gl.shaderSource(shader, source);
    gl.compileShader(shader);

    return shader;
}