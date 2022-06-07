import './App.css';
import BlogList from './BlogList';
import Header from './Header';
import Blog from './Blog';
import { useState } from 'react';
import { Outlet, Routes, Route, Navigate, Link } from 'react-router-dom';
import Test from './Test';

function App() {
  return (
    <div>
      <Header />
      <hr />

      <Routes>
        <Route index element={
          <BlogList />
        } />

        <Route path="/test" element={
          <Test />
        } />

        <Route path="*" element={
          <>
            <div style={{ color: 'red', textAlign: 'center' }}>
              This is not the page you are looking for</div>
            <Link to="/blogs">Go to Blogs</Link>
          </>
        } />

        <Route path="/blog/:blogId" element={<Blog />} />
      </Routes>

      <Outlet />
    </div>
  );
}

export default App;
