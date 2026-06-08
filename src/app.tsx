import { PlatformProvider, usePlatform } from './context/PlatformContext';
import { AppLayout } from './components/AppLayout';
import { Onboarding } from './components/Onboarding';
import { Toast } from './components/Toast';
import { ODSGrid } from './components/ODSGrid';
import { ODSRandomizer } from './components/ODSRandomizer';
import { ProjectPlanner } from './components/ProjectPlanner';
import { ImpactCalculator } from './components/ImpactCalculator';
import { ODSMap } from './components/ODSMap';
import { Dashboard } from './components/Dashboard';
import { AnimatePresence, motion } from 'framer-motion';

function AppContent() {
  const { state } = usePlatform();

  // Render view depending on the selected tab
  const renderTabContent = () => {
    switch (state.currentTab) {
      case 'selection':
        return <ODSGrid />;
      case 'shuffler':
        return <ODSRandomizer />;
      case 'planner':
        return <ProjectPlanner />;
      case 'calculator':
        return <ImpactCalculator />;
      case 'map':
        return <ODSMap />;
      case 'dashboard':
        return <Dashboard />;
      default:
        return <ODSGrid />;
    }
  };

  return (
    <AppLayout>
      {/* Step-by-step introduction onboarding tutorial */}
      <Onboarding />

      {/* Global alert toasts */}
      <Toast />

      {/* Page Transitions */}
      <AnimatePresence mode="wait">
        <motion.div
          key={state.currentTab}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.22, ease: 'easeInOut' }}
        >
          {renderTabContent()}
        </motion.div>
      </AnimatePresence>
    </AppLayout>
  );
}

export function App() {
  return (
    <PlatformProvider>
      <AppContent />
    </PlatformProvider>
  );
}
export default App;
