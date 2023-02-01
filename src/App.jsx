import { BrowserRouter } from 'react-router-dom';
import { PaymentRouter } from './payment/router';

function App() {
	return (
		<BrowserRouter>
			<PaymentRouter />
		</BrowserRouter>
	);
}

export default App;
