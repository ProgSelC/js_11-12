document.addEventListener("DOMContentLoaded", function () {
    var data = {
        fio: 'ИВАНОВ ИВАН ИВАНОВИЧ',
        img: 'img/photo.png',
        occupation: 'студент заборостроительного университета',
        motivation: [
            'Заборы строить не интересно',
            'Платят мало',
            'Приходится работать по ночам'
        ],
        phone: '+3802222222',
        profile: 'vk.com',
        fidback: 'Если нужно, могу построить вам забор'
    };
    var tmpl = _.template(document.getElementById('content-template').innerHTML);
    var content = tmpl( data );
    document.body.innerHTML = content;
});
