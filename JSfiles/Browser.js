function getBrowserInfo() {
    var ua = navigator.userAgent;
    var version = '';
    var type = '';


    if (ua.indexOf('Chrome') !== -1) {
        version = ua.match(/Chrome\/(\S+)/)[1];
        type = 'Google Chrome';
    } else if (ua.indexOf('Firefox') !== -1) {
        version = ua.match(/Firefox\/(\S+)/)[1];
        type = 'Mozilla Firefox';
    } else if (ua.indexOf('Edge') !== -1 || ua.indexOf('Edg') !== -1) {
        version = ua.match(/(Edge|Edg)\/(\S+)/)[2];
        type = 'Microsoft Edge';
    } else if (ua.indexOf('Safari') !== -1) {
        version = ua.match(/Version\/(\S+)/)[1];
        type = 'Safari';
    } else if (ua.indexOf('MSIE') !== -1 || ua.indexOf('Trident/') !== -1) {
        version = ua.match(/(MSIE|rv:)(\S+)/)[2];
        type = 'Internet Explorer';
    } else {
        type = 'Unknown Browser';
    }

    return { version: version, type: type };
}


document.addEventListener('DOMContentLoaded', function() {
    var browserInfo = getBrowserInfo();


    var infoElement = document.createElement('p');
    infoElement.textContent = 'Версия браузера: ' + browserInfo.version + '\nТип браузера: ' + browserInfo.type;


    document.body.appendChild(infoElement);
});

