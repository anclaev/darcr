import { Provider } from 'react-redux'

import Background from '@Components/background'

import { store } from './store'

const App: React.FC = () => {
    return (
        <Provider store={store}>
            <Background>App</Background>
        </Provider>
    )
}

export default App
