import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Services from './components/Services';
import { handleSearch } from './helpers/Search';
import * as notifications from './push-notification.js';

const App = () => {
    
    const [searchTerm, setSearchTerm] = useState("");
    const [notificationGranted, setNotificationGranted] = useState(false);

    const granted = notifications.notificationsGranted();
    
    return (
        <div>
            <Header handleSearch={(e) => handleSearch(e, setSearchTerm)} />
            <Services searchTerm={searchTerm} notificationGranted={granted} />
            <Footer />
        </div>
    )
}

export default App
