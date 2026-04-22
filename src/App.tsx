import { FC } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { ToastContainer, Flip } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'
import 'styles/normalize.scss'
import 'styles/toastify.scss'
import 'styles/themes.scss'
import 'styles/main.scss'
import 'styles/tailwind-output.css'

import { Router } from 'shared/Router'
import { store } from './store'

export const App: FC = () => (
   <Provider store={store}>
      <BrowserRouter>
         <Router />

         <ToastContainer
            limit={7}
            theme="dark"
            autoClose={5000}
            closeButton={false}
            transition={Flip}
         />
      </BrowserRouter>
   </Provider>
)
