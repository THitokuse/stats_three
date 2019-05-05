function init() {
    // 1-1 scene オブジェクトを作成する
    scene = new THREE.Scene();

    // 1−2 camera オブジェクト作成する
    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);

    // 1−3 renderer オブジェクトを作成する
    renderer = new THREE.WebGLRenderer();
    renderer.setClearColor(new THREE.Color(0xEEEEEE));
    renderer.setSize(window.innerWidth, window.innerHeight);

    // 2-1 平面を作成する
    var planeGeometry = new THREE.PlaneGeometry(60, 20);
    var planeMaterial = new THREE.MeshLambertMaterial({color: 0xffffff});
    var plane = new THREE.Mesh(planeGeometry, planeMaterial);

    // 2-2 平面を傾け、位置を決める
    plane.rotation.x = -0.5 * Math.PI;
    plane.position.x = 15;
    plane.position.y = 0;
    plane.position.z = 0;

    // 2-3 平面を追加する
    scene.add(plane);
}

window.onload = init;
