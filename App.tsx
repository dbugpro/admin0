import React from 'react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-slate-100">
      <main className="max-w-xl w-full text-center space-y-6">
        <h1 className="text-5xl font-bold tracking-tight text-brand-400">
          Index Page
        </h1>
        <p className="text-xl text-slate-400">
          A simple, clean starting point for your application.
        </p>
      </main>
    </div>
  );
};

export default App;