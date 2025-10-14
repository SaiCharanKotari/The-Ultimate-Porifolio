
import { Routes, Route } from 'react-router-dom';
import About from './pages/about.jsx';
import Projects from './pages/projects.jsx';
import ProjectsCerti from './pages/ProfielsCerti.jsx';
import Contact from './pages/contact.jsx';

function App() {

  return (
    <>
      <Routes>
        <Route path={'/'} element={<About />} />
        <Route path={'/Projects'} element={<Projects />} />
        <Route path={'/ProfileCertificates'} element={<ProjectsCerti />} />
        <Route path={'/Contact'} element={<Contact />} />
      </Routes>
    </>
  )
}

export default App
