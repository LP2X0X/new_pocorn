import AppLayout from './ui/AppLayout';
import Header from './ui/Header';

function App() {
  return (
    <div className="bg-background-900 h-screen p-3.5">
      <AppLayout>
        <Header></Header>
      </AppLayout>
    </div>
  );
}

export default App;
