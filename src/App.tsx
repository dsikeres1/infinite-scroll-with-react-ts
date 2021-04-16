import React from 'react';
import './App.css';
// import ScrollEventListenerInfiniteScroll from './components/scroll_event_listener/InfiniteScroll';
import IntersectionObserverInfiniteScroll from './components/intersection_observer/InfiniteScroll';

function App() {
  // return <ScrollEventListenerInfiniteScroll />;
  return <IntersectionObserverInfiniteScroll />;
}

export default App;
