import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Home } from './pages/Home';

import './styles/global.scss';
import './styles/variables.scss';

function App() {
    return (
        <>
            <Header />
            <Home />
            <Footer />
        </>
    );
}

export default App;
