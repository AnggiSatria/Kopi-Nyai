import React from 'react'
import NavbarAdmin from '../component/NavbarAdmin';
import NavbarAll from '../component/NavbarAll';
import NavbarUser from '../component/NavbarUser'
import IMG from "../Assets/all.module.css"
import Font from "../Assets/all.module.css"

function Hompage() {
  document.body.style.backgroundColor="rgba(97, 55, 23, 0.94)"
  return (
    <div>
        <nav>
             <NavbarAll/>
        </nav>
       
       <div className="All" style={{width : "100%"}}>
         <div className={IMG.page} style={{paddingTop : "150px"}}>
              <h4 className={Font.font} style={{textAlign : "center", color : "#fff"}}>Racikan Kopi Seni Dan Budaya</h4>
          </div>

          <div className="Down">

          </div>
       </div>
       
    </div>
  )
}

export default Hompage;