$(function () {
    var template = $('#content-template').html();
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
    var content = tmpl(template, data);

    $('body').html(content);
});
