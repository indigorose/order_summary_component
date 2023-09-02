import './App.css';
import icon from './assets/images/icon-music.svg';
import heroImage from './assets/images/illustration-hero.svg';

function App() {
	return (
		<div className="App">
			<div className="container">
				<img
					src={heroImage}
					alt="Girl with headphones"
					className="icon-image"
				/>
				<div className="card-summary">
					<h1>Order Summary</h1>
					<p className="order-text">
						You can now listen to millions of songs, audiobooks, and
						podcasts on any device anywhere you like.
					</p>
				</div>
				<div className="card-price">
					<img src={icon} alt="musical note" className="music-note" />
					<h4>Annual Plan</h4>
					<span>$59.99/year</span>
					<button>Change</button>
				</div>
				<button className="payment-btn">Proceed to Payment</button>
				<button className="cancel-btn">Cancel Order</button>
			</div>
		</div>
	);
}

export default App;
