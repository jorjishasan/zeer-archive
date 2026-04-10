import NavBar from './components/NavBar';
import Hero from './components/Hero';
import VideoBackground from './components/VideoBackground';

function App() {
  return (
    <div className="relative flex min-h-dvh w-full flex-col overflow-x-hidden selection:bg-black selection:text-white supports-[min-height:100dvh]:min-h-dvh">
      <VideoBackground />
      <div className="relative z-10 flex min-h-dvh w-full flex-1 flex-col pb-[max(1rem,env(safe-area-inset-bottom))] supports-[min-height:100dvh]:min-h-dvh">
        <NavBar />
        <main className="flex flex-1 flex-col justify-center">
          <Hero />
        </main>
      </div>
    </div>
  );
}

export default App;
