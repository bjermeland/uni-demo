import { SecurePage } from './SecurePage'
import { AppContainer } from './components/AppContainer'
import { ContactsPage } from './pages/contacts/Loadable'
import { NotFoundPage } from './pages/not-found/Loadable'

import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom'

export const App = () => {
  return (
    <Router>
      <SecurePage>
        <AppContainer>
          <Routes>
            <Route path={'/'} element={<Navigate to="/contacts" />} />
            <Route path="/authentication/callback" element={<Navigate to="/" />} />
            <Route path={'/contacts'} element={<ContactsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </AppContainer>
      </SecurePage>
    </Router>
  )
}
