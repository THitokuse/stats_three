function init() {
    // 1-1 scene オブジェクトを作成する
    scene = new THREE.Scene();

    // 1−2 camera オブジェクト作成する
    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);

    // 1−3 renderer オブジェクトを作成する
    renderer = new THREE.WebGLRenderer();
    renderer.setClearColor(new THREE.Color(0xEEEEEE));
    renderer.setSize(window.innerWidth, window.innerHeight);

}

window.onload = init;
