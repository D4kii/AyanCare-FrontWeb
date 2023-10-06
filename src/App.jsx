import AuthProvider from './authProvider'
import AppRoutes from './routes/index.jsx'

function App() {
    return (
      <AuthProvider>
        <AppRoutes />
      </AuthProvider>
    );
  }
  
  export default App;