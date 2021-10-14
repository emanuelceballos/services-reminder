import { useState } from 'react';
import Header from './components/Header';
import Services from './components/Services';
import { handleSearch } from './helpers/Search';

const App = () => {
    
    const [searchTerm, setSearchTerm] = useState("");
    
    return (
        <div>
            <Header handleSearch={(e) => handleSearch(e, setSearchTerm)} />
            <Services searchTerm={searchTerm} />
        </div>
    )
}

export default App
