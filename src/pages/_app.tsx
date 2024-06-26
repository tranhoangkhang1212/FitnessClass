import '@/utils/string';

import { Provider } from 'react-redux';

import AppRouter from '@/components/Layout/Router';
import store from '@/redux/store';

const App = () => {
    return (
        <Provider store={store}>
            <AppRouter />
        </Provider>
    );
};

export default App;
