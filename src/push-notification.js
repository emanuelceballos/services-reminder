export function randomNotification() {

    const notifTitle = 'Recordatorio de servicios';
    const notifBody = 'Sacar la basura';
    const notifImg = "https://www.rspca.org.uk/webContent/staticImages/Infographics/CatHappy3.jpg";
    
    if (isMobile()) {
        navigator.serviceWorker.ready.then(function(registration) {
            registration.showNotification(notifTitle, {
                "body": notifBody,
                "icon": notifImg,
                "vibrate": [200, 100, 200, 100, 200, 100, 400],
                "tag": "request",
                "actions": [
                  { "action": "yes", "title": "Yes" },
                  { "action": "no", "title": "No" }
                ]
            });
        });
    } else {
        /// PC web notification

        const options = {
          body: notifBody,
          icon: notifImg,
        };

        new Notification(notifTitle, options);
    }
}

export const notificationsGranted = (setNotificationGranted) => {
    
    if(Notification.permission !== "granted") {
        Notification.requestPermission().then((result) => {
            if (result === 'granted') {
                setNotificationGranted(true);
            }
        });
    }

    return Notification.permission === "granted";
}

export const isMobile = () => {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}