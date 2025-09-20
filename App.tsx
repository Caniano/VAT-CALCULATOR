
import React from 'react';
import { Header } from './components/Header';
import { useAuth } from './context/AuthContext';
import Auth from './components/Auth';
import Dashboard from './components/Dashboard';

const App: React.FC = () => {
    const { currentUser, loading } = useAuth();

    const renderContent = () => {
        if (loading) {
            return (
                <div className="flex flex-col items-center justify-center h-[calc(100vh-200px)]">
                   <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-primary"></div>
                   <p className="mt-4 text-lg font-semibold text-slate-600 dark:text-slate-300">Loading App...</p>
                </div>
            );
        }
        return currentUser ? <Dashboard /> : <Auth />;
    };
    
    const BackgroundPattern = () => (
         <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <pattern id="pattern-circles" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse" patternContentUnits="userSpaceOnUse">
                        <circle id="pattern-circle" cx="20" cy="20" r="1.5" className="text-slate-200 dark:text-slate-800" fill="currentColor"></circle>
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#pattern-circles)"></rect>
            </svg>
        </div>
    );

    return (
        <div className="min-h-screen font-sans text-slate-800 dark:text-slate-200 relative">
            <BackgroundPattern />
            <div className="relative z-10">
                <Header />
                <main className="container mx-auto p-4 md:p-8 max-w-5xl">
                    {renderContent()}
                </main>
                <footer className="text-center p-6 text-slate-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} VAT Invoice Extractor. All rights reserved.</p>
                </footer>
            </div>
        </div>
    );
};

export default App;