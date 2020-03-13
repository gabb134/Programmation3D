  
   var strVertexShaderSource =
        '    attribute vec3 vertexPos;\n' +
        '    uniform mat4 modelViewMatrix;\n' +
        '    uniform mat4 projectionMatrix;\n' +
        '    void main(void) {\n' +
        '        gl_Position = projectionMatrix * modelViewMatrix * \n' +
        '            vec4(vertexPos, 1.0);\n' +
        '    }\n';

    var strFragmentShaderSource =
        '    void main(void) {\n' +
        '    gl_FragColor = vec4(1.0, 1.0, 1.0, 1.0);\n' +
        '}\n';

     function creerShader(objgl, strSource, strType) {
        var objShader = null;
		
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
		var objProgShaders = null;

		// Créer les shaders à partir du code source
        var objFragmentShader = creerShader(objgl, strFragmentShaderSource, 'fragment');
        var objVertexShader = creerShader(objgl, strVertexShaderSource, 'vertex');
		
		if (objFragmentShader && objVertexShader) { 
		    // Créer le programme dans lequel seront ajoutés les shaders
			objProgShaders = objgl.createProgram();
			objgl.attachShader(objProgShaders, objVertexShader);
			objgl.attachShader(objProgShaders, objFragmentShader);
			objgl.linkProgram(objProgShaders);
		
			if (!objgl.getProgramParameter(objProgShaders, objgl.LINK_STATUS)) {
				alert('Impossible de lier les shaders');
			}
			else {	
                // Lier les variables des shaders à nos propres variables
				objProgShaders.posVertex = objgl.getAttribLocation(objProgShaders, 'vertexPos');
				objgl.enableVertexAttribArray(objProgShaders.posVertex);
			
				objProgShaders.matProjection = objgl.getUniformLocation(objProgShaders, 'projectionMatrix');
				objProgShaders.matModeleVue = objgl.getUniformLocation(objProgShaders, 'modelViewMatrix');

				objgl.useProgram(objProgShaders);
			}
		}
		
		return objProgShaders;
    }
