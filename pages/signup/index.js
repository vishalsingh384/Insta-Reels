import React, { useContext, useEffect } from 'react'
import TextField from '@mui/material/TextField'
import Image from 'next/image'
import logo from '../../assets/Instagram.jpeg'
import Button from '@mui/material/Button'
import CloudUploadIcon from '@mui/icons-material/CloudUpload'
import IconButton from '@mui/material/IconButton'
import Link from 'next/link'
import { useRouter} from 'next/router'
import { AuthContext } from '../../context/auth'
import {storage} from '../../firebase'
import { ref, uploadBytesResumable } from 'firebase/storage'


function index() {
  const[email,setEmail]=React.useState('');
  const[fullName,setfullName]=React.useState('');
  const[file,setFile]=React.useState('');
  const[password,setPassword]=React.useState('');
  const[error,setError]=React.useState('');
  const[loading,setLoading]=React.useState(false);
  const router=useRouter();
  const {signup,user}=useContext(AuthContext);


  // useEffect(()=>{
  //   if(user){
  //     router.push("/");
  //   }
  // },[user]);

  let handleClick=async()=>{
    console.log(email);
    console.log(password);
    console.log(fullName);
    console.log(file);
    try{
      setLoading(true);
      setError('');
      const userInfo=await signup(email,password);
      // const metadata = {
      //   contentType: 'image/jpeg'
      // };
      // Upload file and metadata to the object 'images/mountains.jpg'
    const storageRef = ref(storage, `${userInfo.user.uid}/Profile`);
    const uploadTask = uploadBytesResumable(storageRef, file);

        // Register three observers:
    // 1. 'state_changed' observer, called any time the state changes
    // 2. Error observer, called on failure
    // 3. Completion observer, called on successful completion
    uploadTask.on('state_changed',
      (snapshot) => {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
      }, 
      (error) => {
        // A full list of error codes is available at
        // https://firebase.google.com/docs/storage/web/handle-errors
        console.log(error);
      }, 
      () => {
        // Upload completed successfully, now we can get the download URL
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log('File available at', downloadURL);
        });
      }
    );
    }
    catch(err){
      console.log(err);
    }
    setLoading(false);
  }

  return (
    <div className='signup-container'>
        <div className='signup-card'>
            <Image src={logo}/>
            <TextField id="outlined-basic" 
            size="small" fullWidth 
            margin="dense" 
            label="Email" variant="outlined" 
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            />

            <TextField id="outlined-basic" 
            size="small" fullWidth 
            margin="dense" 
            label="FullName" variant="outlined" 
            value={fullName}
            onChange={(e)=>setfullName(e.target.value)}
            />

            <TextField id="outlined-basic" 
            size="small" fullWidth 
            margin="dense" 
            label="Password" variant="outlined"
            type="password" 
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            />

            <Button size="small" color="secondary" variant="outlined" component="label" fullWidth>
            {/* <IconButton size="small" color="secondary" aria-label="add an alarm">< CloudUploadIcon/></IconButton> */}
            Upload Profile Image
            <input hidden accept="image/*" type="file" onChange={(e)=>{
              setFile(e.target.files[0]);
            }}/>
            </Button>

            <Button style={{marginTop:"0.8rem"}}variant="contained" 
            component="label" fullWidth size="small"
            onClick={handleClick}>
            Sign Up
            </Button>
            {error!=''&&<div style={{color:"red"}}>{error}</div>}
            <div className='tnc'>By signing up, you agree to our Terms, Conditions and Cookies policy</div>
        </div>
        <div className='bottom-card'>Already have an account?<Link href='/login'><span style={{color:"purple"}}>Login</span></Link></div>
    </div>
  )
}

export default index