
import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Card from './components/Card';
import Button from './components/Button';

// Icon components defined outside App to prevent re-creation on re-renders for performance.
const CodeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
);

const RocketIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
);


function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col min-h-screen font-sans bg-gray-900 text-gray-100">
      <Header title="React Starter App" />

      <main className="flex-grow container mx-auto px-4 py-8 md:py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Modern Web App Template</h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto">
            A ready-to-use starter kit built with React, TypeScript, and Tailwind CSS. Click, edit, and deploy with ease.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card
            title="Interactive Component"
            icon={<RocketIcon className="w-8 h-8 text-indigo-400" />}
          >
            <p className="text-gray-300 mb-6">
              This card demonstrates state management with React's `useState` hook. Click the button to see the count increase.
            </p>
            <div className="flex items-center justify-center space-x-6 p-4 bg-gray-900/50 rounded-lg">
              <span className="text-3xl font-mono font-bold text-white w-16 text-center">{count}</span>
              <Button onClick={() => setCount(count + 1)}>
                Increment
              </Button>
            </div>
          </Card>
          
          <Card
            title="Getting Started"
            icon={<CodeIcon className="w-8 h-8 text-indigo-400" />}
          >
            <p className="text-gray-300 mb-4">
              Start by editing <code className="bg-gray-700 text-indigo-300 px-2 py-1 rounded-md text-sm font-mono">App.tsx</code>. All components are designed to be reusable and easy to customize.
            </p>
             <ul className="space-y-3 text-gray-400">
                <li className="flex items-start"><span className="text-indigo-400 mr-2 mt-1">&#10003;</span>Reusable components in <code className="bg-gray-700 text-indigo-300 px-1 py-0.5 rounded-md text-sm font-mono">/components</code></li>
                <li className="flex items-start"><span className="text-indigo-400 mr-2 mt-1">&#10003;</span>Styled with Tailwind CSS utility classes.</li>
                <li className="flex items-start"><span className="text-indigo-400 mr-2 mt-1">&#10003;</span>Powered by Vite for a fast development experience.</li>
            </ul>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
