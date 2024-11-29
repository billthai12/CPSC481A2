import '../App.css';
import BackButton from './BackButton';
import EndSessionButton from './EndSessionButton';

function NavigationBar() {
  return (
    <header className="NavBar">
      <div className="NavLeft">
        <BackButton />
      </div>
      <div className="NavRight">
        <EndSessionButton />
      </div>
    </header>
  );
}

export default NavigationBar;
