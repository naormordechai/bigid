import { AppProvider,  } from './contexts/AppContext';
import Main from './Components/Main/Main'


const App = () => {
  return (
		<AppProvider>
			<Main />
		</AppProvider>
  ); 
}

export default App;
