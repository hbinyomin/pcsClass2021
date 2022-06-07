import './App.css';
import BlogList from './BlogList';
import Header from './Header';
import Blog from './Blog';
import { useState } from 'react';

function App() {
  const [selectedBlog, setSelectedBlog] = useState();

  return (
    <div>
      <Header />
      <hr/>
      {/*{!selectedBlog
          ? <BlogList setSelectedBlog={setSelectedBlog}/>
          : <Blog selectedBlog={selectedBlog}/>}*/}

      <BlogList setSelectedBlog={setSelectedBlog}/>
      <hr/>
      {selectedBlog && <Blog selectedBlog={selectedBlog}/>}
    </div>
  );
}

export default App;
