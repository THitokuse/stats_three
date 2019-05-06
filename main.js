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

    // 5-1 cubeの作成
    var cubeGeometry = new THREE.BoxGeometry(4, 4, 4);
    var cubeMaterial = new THREE.MeshLambertMaterial({color: 0xff0000});
    var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    // 5-2 cubeの位置
    cube.position.x = -4;
    cube.position.y = 3;
    cube.position.z = 0;
    // 5-3 cubeの追加
    scene.add(cube);

    // 5−4 sphereの作成
    var sphereGeometry = new THREE.SphereGeometry(4, 20, 20);
    var sphereMaterial = new THREE.MeshLambertMaterial({color: 0x7777ff});
    var sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    // 5-5 sphereの位置
    sphere.position.x = 20;
    sphere.position.y = 0;
    sphere.position.z = 2;
    // 5-6 sphereの追加
    scene.add(sphere);

    // 3-1 カメラの位置 見え方を設定する
    camera.position.x = -30;
    camera.position.y = 40;
    camera.position.z = 30;
    camera.lookAt(scene.position);

    // 4 光源を追加する
    var spotLight = new THREE.SpotLight(0xffffff);
    spotLight.position.set(-20, 30, -5);
    scene.add(spotLight);

    // 3-2 jsのappendChild関数でdiv要素に追加
    document.getElementById("WebGL-output").appendChild(renderer.domElement);

    // 3-3 rendererにsecne cameraの描画を指示する
    renderer.render(scene, camera);
}

window.onload = init;
