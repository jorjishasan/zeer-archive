import NavBar from './components/NavBar';
import Hero from './components/Hero';
import VideoBackground from './components/VideoBackground';

function App() {
  return (
    <div className="relative w-full min-h-screen overflow-hidden selection:bg-black selection:text-white">
      <VideoBackground />
      <div className="relative z-10 w-full min-h-screen flex flex-col">
        <NavBar />
        <main className="flex-grow flex flex-col">
          <Hero />
        </main>
      </div>
    </div>
  );
}

export default App;
