import logo from '../../logo.jpg';

export default function Header() {
  return (
    <header className="container">
      <h1>
        <img id="logo" src={logo} className="img-fluid" alt="logo"/>
      </h1>
    </header>
  );
}
