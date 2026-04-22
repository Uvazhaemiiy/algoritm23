import { Suspense, FC } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Page } from './Page'
import { Preloader } from 'shared/Preloader'
import { routes } from './routes'

export const Router: FC = () => (
   <Suspense fallback={<Preloader />}>
      <Routes>
         {routes.map(({ path, title, access, Element }) => (
            <Route path={path} key={path} element={
               <Page title={title} access={access}>
                  <Element />
               </Page>
            } />
         ))}
      </Routes>
   </Suspense>
)
