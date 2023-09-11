import './App.css';
import icon from './assets/images/icon-music.svg';
import heroImage from './assets/images/illustration-hero.svg';

function App() {
	return (
		<div className="App">
			<div className="container" role="main contentinfo">
				<img
					src={heroImage}
					alt="Girl with headphones"
					className="icon-image"
				/>
				<div className="card-summary">
					<h1>Order Summary</h1>
					<p className="order-text">
						You can now listen to millions of songs, audiobooks, and
						podcasts on any device anywhere you like!
					</p>
				</div>
				<div className="card-price">
					<img src={icon} alt="musical note" className="music-note" />
					<ul className="price">
						<li>Annual Plan</li>
						<li>$59.99/year</li>
					</ul>

					<button className="change-btn">Change</button>
				</div>
				<button className="payment-btn">Proceed to Payment</button>
				<button className="cancel-btn">Cancel Order</button>
			</div>

			<footer role="contentinfo" className="attribution">
				Challenge by{' '}
				<a
					href="https://www.frontendmentor.io?ref=challenge"
					target="_blank"
					rel="noreferrer"
				>
					Frontend Mentor
				</a>
				. Coded by{' '}
				<a href="https://github.com/indigorose">Karen Robertson</a>.
			</footer>
		</div>
	);
}

export default App;
