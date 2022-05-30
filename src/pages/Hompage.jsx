import * as React from 'react';
import NavbarAdmin from '../component/NavbarAdmin';
import NavbarAll from '../component/NavbarAll';
import NavbarUser from '../component/NavbarUser'
import IMG from "../Assets/all.module.css"
import Font from "../Assets/all.module.css"
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';
import Login from '../component/Login';

const labels = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
};

function getLabelText(value) {
  return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}

function Hompage() {
  document.body.style.backgroundColor="rgba(97, 55, 23, 0.94)"

  const [value, setValue] = React.useState(2);
  const [hover, setHover] = React.useState(-1);

  return (
    <div style={{height : "120vh"}}>
        <nav style={{position : "sticky"}}>
             <NavbarAll/>
        </nav>

        
       
       <div className="All" style={{width : "100%"}}>
         
         <div className={IMG.page} style={{paddingTop : "150px"}}>
              <h1 className={Font.font} style={{textAlign : "center", color : "#000"}}>Racikan Kopi Seni Dan Budaya</h1>
         </div>

          

          <div className="Down" style={{paddingTop : "50px"}}>
              <h4 className={Font.font} style={{textAlign : "center", color : "#fff"}}>Rate Us</h4>

              <Box
              sx={{
                width: 200,
                display: 'flex',
                alignItems: 'center',
                margin : "auto",
                marginTop : "50px",
                color : "#fff"
              }}
            >
              <Rating
                name="hover-feedback"
                value={value}
                precision={0.5}
                getLabelText={getLabelText}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
                onChangeActive={(event, newHover) => {
                  setHover(newHover);
                }}
                emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
              />
              {value !== null && (
                <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
              )}
            </Box>
                  </div>
              </div>
              
            </div>
  )
}

export default Hompage;