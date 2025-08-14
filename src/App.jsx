import './App.css'
import '../public/avatar-jessica.jpeg'

export default function App () {
  return (
    <>
  <div className="card">
    <img src="../public/avatar-jessica.jpeg" alt="jessica-avatar" />
  <h2>Jessica Randall</h2>
  <h3>London, United Kingdom</h3>
  <p>"Front-end developer and avid reader."</p>

  <a className="a">GitHub</a>
  <a className="a">Frontend Mentor</a>
  <a className="a">LinkedIn</a>
  <a className="a">Twitter</a>
  <a className="a">Instagram</a>
  </div>

  <div className="attribution">
   Challenge by <a href="https://www.frontendmentor.ioref=challenge" target="_blank">Frontend Mentor</a>. 
   Coded by <a href="#">Musa Umar Adisa</a>.
  </div>
    </>
  )
};
