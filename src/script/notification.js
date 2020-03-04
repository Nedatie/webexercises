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
            notification = document.getElementsByClassName('grid-notifications')[0];

        if(textarea.value != "")
        {
            var constraint = document.createElement("div");
            constraint.classList = "layout-constrainwidth";

            var container = document.createElement("div");
            container.classList = "js-notification notification notification-error";

            var p = document.createElement("p");
            p.innerText = textarea.value;

            container.appendChild(p);
            constraint.appendChild(container);
            notification.appendChild(constraint);
        }
        
        console.log('text in notification is: ' + notification.innerText);
        console.log('text in text area is: ' + textarea.value);

        // todo: 1. försök byta ut innehållet i <p>-elementet som ligger i notification.
        // todo: 2. ta bort <p> elementet helt om texten är tom och skapa ett nytt p-element och lägg till (appendChild) i notification
        // https://developer.mozilla.org/en-US/docs/Web/API/Node/appendChild
        // todo: 3. gå igenom hur man kan hacka en sida igenom script injection (Per visar - gäller både javascript och t.ex. PHP)
    }

    // function scriptInjectionExample() {
    //     window.location = 'https://www.google.com/search?q=you+have+been+hacked';
    // <div class="js-notification notification"><div style="background:red; width: 100vw; height: 100vh; position: fixed; z-index: 100000000; left: 0; top: 0;">hacked lol</div></div>
    // }
    
    return {
        init: init
    };
}
