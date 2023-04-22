import React from 'react';
import "../css/nav.css"

const Navbars = () => {
  return (
    <div className='body1'>
      <header>
        <div className="container">
          <h1 id="logo">siva</h1>
          <nav>
            <ul>

              <li>
                <a href="#">About Me</a>
              </li>

              <li>
                <a href="#">Portfolio</a>
              </li>

              <li>
                <a href="#">Contact me</a>
              </li>

            </ul>

          </nav>
        </div>

      </header>



    </div >
  );
}

export default Navbars;
