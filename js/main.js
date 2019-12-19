// properties
var content, webcam;

function init() {
    content = document.getElementById('content');

    // adds listeners to activate and deactivate on iframe focus
    window.addEventListener('focus', start, false);
    window.addEventListener('blur', stop, false);

    // instantiate our Webcam
    webcam = new Webcam();
    content.appendChild(webcam.domElement);
}

function start(e) {
    e.preventDefault();
    document.body.className = 'active';
    webcam.start();
}

function stop(e) {
    e.preventDefault();
    document.body.className = '';

    webcam.stop();
}

init();