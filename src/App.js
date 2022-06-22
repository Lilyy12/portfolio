import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Project from './pages/Project';
import Experience from './pages/Experience';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProjectDisplay from './pages/ProjectDisplay';
import ContactForm from './components/ContactForm';
import Helmet from 'react-helmet';

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Lily's Portfolio</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/project" element={<Project/>}/>
          <Route path="/project/:id" element={<ProjectDisplay/>}/>
          <Route path="/experience" element={<Experience/>}/>
        </Routes>
        <Home/>
        <ContactForm />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
