import React, { useContext, useEffect } from 'react'
import TextField from '@mui/material/TextField'
import Image from 'next/image'
import logo from '../assets/Instagram.jpeg'
import Button from '@mui/material/Button'
import { Carousel } from 'react-responsive-carousel'
import bg1 from '../assets/bg1.jpg'
import bg2 from '../assets/bg2.jpg'
import bg3 from '../assets/bg3.jpg'
import bg4 from '../assets/bg4.jpg'
import bg5 from '../assets/bg5.jpg'
import { AuthContext } from '../context/auth'
import { useRouter } from 'next/router'
import Link from 'next/link'

function forgot() {
  const[email,setEmail]=React.useState('');
  const[error,setError]=React.useState('');
  const[loading,setLoading]=React.useState(false);
  const router=useRouter();
  const {forgotPass,user}=useContext(AuthContext);

  useEffect(()=>{
    if(user){
      //route to feed page
      router.push("/");
    }
  },[user])
  
  let handleClick=async()=>{
    try{
        setLoading(true);//ye true karne ka matlab ye hai ki ek baar click kar diya log in pe 
        // to jab tak result nahi aa jata tab tak mai fir click nahi kar paaunga. Isse multiple faaltu calls nahi lagengi. Isliye jab sab ho jaaye to LAST me isko false kiya hai.
        setError('');
        await forgotPass(email);
        console.log("email sent");
    }
    catch(err){
        console.log(err);
        setError(err.code);
        setTimeout(() => {
            setError('');
        }, 2000);
    }
    setLoading(false);
  }

  return (
<div className="login-container">
      <div className="insta-mob-bg">
        <div className="carousel-container">
          <Carousel
            width="247px"
            autoPlay
            interval={2000}
            infiniteLoop
            showArrows={false}
            showThumbs={false}
            showIndicators={false}
            stopOnHover
            showStatus={false}
          >
            <Image src={bg1} style={{height:"436px"}}/>
            <Image src={bg2} style={{height:"436px"}}/>
            <Image src={bg3} style={{height:"436px"}}/>
            <Image src={bg4} style={{height:"436px"}}/>
            <Image src={bg5} style={{height:"436px"}}/>

          </Carousel>
        </div>
      </div>
        <div>
            <div className='login-card'>
                <Image src={logo}/>
                <TextField id="outlined-basic" 
                size="small" fullWidth 
                margin="dense" 
                label="Email" 
                variant="outlined" 
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                />

                <Button style={{marginTop:"0.8rem"}}
                variant="contained" component="label" 
                fullWidth size="small" onClick={handleClick}>
                Send Email
                </Button>

                {/* this mean if error is present then show error div */}
                {error!=''&&
                <div style={{color:"red"}}>{error}</div>
                }
            </div>
            <div className='bottom-card'>Don't have an account? <Link href='/signup'><span style={{color:"purple"}}>Sign Up</span></Link></div>
        </div>
    </div>
  )
}

export default forgot


