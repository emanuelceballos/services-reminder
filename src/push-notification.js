export function randomNotification() {
    
    /// PC web notification

    // const games = [
    //     {
    //         name: "Gatitos",
    //         author: "Ema",
    //         slug: "https://www.rspca.org.uk/webContent/staticImages/Infographics/CatHappy3.jpg"
    //     }
    // ]
    
    // const randomItem = Math.floor(Math.random() * games.length);
    // const notifTitle = games[randomItem].name;
    // const notifBody = `Created by ${games[randomItem].author}.`;
    // const notifImg = games[randomItem].slug;
    // const options = {
    //   body: notifBody,
    //   icon: notifImg,
    // };

    // new Notification(notifTitle, options);

    /// Mobile web notification

    Notification.requestPermission(function(result) {
        if (result === 'granted') {
            navigator.serviceWorker.ready.then(function(registration) {
                registration.showNotification('Vibration Sample', {
                    "body": "Did you make a $1,000,000 purchase at Dr. Evil...",
                    "icon": "https://www.rspca.org.uk/webContent/staticImages/Infographics/CatHappy3.jpg",
                    "vibrate": [200, 100, 200, 100, 200, 100, 400],
                    "tag": "request",
                    "actions": [
                      { "action": "yes", "title": "Yes" },
                      { "action": "no", "title": "No" }
                    ]
                });
            });
        }
    });
    
}

export function notificationsGranted(setNotificationsGranted) {
    if(Notification.permission !== "granted") {
        Notification.requestPermission().then((result) => {
            if (result === 'granted') {
              setNotificationsGranted(true);
            }
          });
    }
}