
   const strVertexShaderSource =
        '    attribute vec3 vertexPos;\n' +
        '    attribute vec4 vertexColor;\n' +
        '    uniform mat4 modelViewMatrix;\n' +
        '    uniform mat4 projectionMatrix;\n' +
        '    varying vec4 vColor;\n' +
        '    void main(void) {\n' +
        '        gl_Position = projectionMatrix * modelViewMatrix * \n' +
        '            vec4(vertexPos, 1.0);\n' +
        '        vColor = vertexColor;\n' +
        '    }\n';

    const strFragmentShaderSource =
        '    precision mediump float;\n' +
        '    varying vec4 vColor;\n' +
        '    void main(void) {\n' +
        '    gl_FragColor = vColor;\n' +
        '}\n';

     function creerShader(objgl, strSource, strType) {
        let objShader = null;
		
        if (strType == 'fragment') {
            objShader = objgl.createShader(objgl.FRAGMENT_SHADER);
        } else if (strType == 'vertex') {
            objShader = objgl.createShader(objgl.VERTEX_SHADER);
        } 
		
		if (!objShader) {
			alert('Impossible de créer le ' + strType + 'shader');
		}
		else {
			objgl.shaderSource(objShader, strSource);
			objgl.compileShader(objShader);
			if (!objgl.getShaderParameter(objShader, objgl.COMPILE_STATUS)) {
				alert('Impossible de compiler le ' + strType + ' shader');
			}
        }

        return objShader;
    }

	function initShaders(objgl) {
		let objProgShaders = null;

		// Créer les shaders à partir du code source
        const objFragmentShader = creerShader(objgl, strFragmentShaderSource, 'fragment');
        const objVertexShader = creerShader(objgl, strVertexShaderSource, 'vertex');
		
		if (objFragmentShader && objVertexShader) { 
		    // Créer le programme qui va exécuter les shaders
			objProgShaders = objgl.createProgram();
			objgl.attachShader(objProgShaders, objVertexShader);
			objgl.attachShader(objProgShaders, objFragmentShader);
			objgl.linkProgram(objProgShaders);
		
			if (!objgl.getProgramParameter(objProgShaders, objgl.LINK_STATUS)) {
				alert('Impossible de lier les shaders');
			}
			else {	
				objProgShaders.posVertex = objgl.getAttribLocation(objProgShaders, 'vertexPos');
				objgl.enableVertexAttribArray(objProgShaders.posVertex);

				objProgShaders.couleurVertex = objgl.getAttribLocation(objProgShaders, 'vertexColor');
				objgl.enableVertexAttribArray(objProgShaders.couleurVertex);

				objProgShaders.matProjection = objgl.getUniformLocation(objProgShaders, 'projectionMatrix');
				objProgShaders.matModeleVue = objgl.getUniformLocation(objProgShaders, 'modelViewMatrix');

				objgl.useProgram(objProgShaders);
			}
		}
		
		return objProgShaders;
    }
