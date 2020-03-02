function Notification() {
    function init() {
        console.log('init Notification');
        bindEvents();    
    }

    function bindEvents() {
        var button = document.getElementsByClassName('js-notificationbutton')[0];
        button.addEventListener('click', setNotification);
    }

    function setNotification(e) {
        var textarea = document.getElementsByClassName('js-notificationtext')[0],
            notification = document.getElementsByClassName('js-notification')[0];
        
        console.log('text in notification is: ' + notification.innerText);
        console.log('text in text area is: ' + textarea.value);
    }
    
    return {
        init: init
    };
};
