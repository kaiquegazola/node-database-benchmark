var Docker = require('dockerode');
var express = require('express');
var fs = require('fs');
var q = require('q');
var docker = new Docker();
var app = express();

if (process.platform === 'win32') {
    var socket = process.env.DOCKER_SOCKET || '//./pipe/docker_engine';
} else {
    var socket = process.env.DOCKER_SOCKET || '/var/run/docker.sock';
}
var stats = fs.statSync(socket);

app.get('/', function (req, res) {
    res.send('Inicializating docker!');
    inicializateDocker().then(
        function () {
            console.log('get it');
        }
    );

});

app.listen(3000, function () {
    console.log('App listening on http://127.0.0.1:3000!');
});


function inicializateDocker() {
    var deferred = q.defer();
    if (true) {
        deferred.resolve(true);
    }
    return deferred.promise;
}

function startContainer() {
    var deferred = q.defer();
    if (true) {
        deferred.resolve(true);
    }
    return deferred.promise;
}

function startTest() {
    var deferred = q.defer();
    if (true) {
        deferred.resolve(true);
    }
    return deferred.promise;
}


