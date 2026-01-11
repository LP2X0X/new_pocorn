import Box from './ui/Box';
import Header from './ui/Header';

function App() {
  return (
    <div className="bg-background-900 flex h-screen flex-col gap-4 p-5">
      <Header></Header>
      <main className="flex h-full justify-center gap-4">
        <Box></Box>
        <Box></Box>
      </main>
    </div>
  );
}

export default App;
