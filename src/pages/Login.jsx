
import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { RiEyeLine, RiEyeOffFill } from 'react-icons/ri';
import { useState } from 'react';
import { API_URL } from '../constants/apiConstant';
import axios from 'axios';
function Login() {
  const [showPassword ,setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [success , setSuccess] = useState('');

    const handleEmailChange = (e) => {
      setEmail(e.target.value);
      console.log(e.target.value);
    }
    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
      //handle logic here
      console.log(e.target.value);
    }
    const handleSubmit = async (e) => { 
      e.preventDefault();
      //login logic here
      const res = await axios.post(`${API_URL}/login`,{
        email:email,
        password:password
      })

      if(res.status == 200){
        //Handle successful login
        setSuccess('Login successful,Redirecting ...')
       setTimeout(() => {
        localStorage.setItem('token', res.data.token)
        localStorage.setItem('user', JSON.stringify(res.data.user))
        location.href = '/'
       }, 1500);
      } else {
        //handle login error
        console.error('Login failed')
      }
    }


   const handleShowPassword = () => {
      setShowPassword (!showPassword);
   }

   //redirect to home page if user is already logged in
   const logintoken = localStorage.getItem('token')
   if (logintoken){
    location.href='/'
   }

   

  return (
    
    <div>
        <TopBar/>
        <Navbar/>
      <div className="flex flex-col justify-center items-center my-10 w-1/3 mx-auto bg-gray-100 px-10 py-2 rounded-lg ">
        <h1 className=" pacifico-regular text-center font-bold text-4xl mx-10 ">Login</h1>
        <p className='text-green-600 text-sm m-5'>{success}</p>
        <form onClick={handleSubmit}>
        <input type="text" className=" rounded-lg w-full p-2 my-5 border-2 border-gray-300" name="email" placeholder="Email" value={email} required onChange={handleEmailChange}/>
        
        <div className='relative w-full' >
        <input type={showPassword ? "text" : "password"} value={password} className="rounded-lg w-full p-2 my-5 border-2 border-gray-300" name="password" placeholder="Password" required onChange={handlePasswordChange}/>
        <div onClick={handleShowPassword}>
          { showPassword ?
        <RiEyeLine className='absolute top-9 right-3 text-gray-500 cursor-pointer '/> :
        <RiEyeOffFill className='absolute top-9 right-3 text-gray-500 cursor-pointer '/>
          }
        </div>
        </div>
        
        <button type="submit" name="login" className="  rounded-lg w-full p-2 my-5 bg-blue-500 text-white font-bold hover:bg-orange-500 transition"> Login</button>

        <div className="my-5">
          <p className="text-center">
            Don`t have an account? <a href="/register" className="text-blue-500 font-semibold hover:underline hover:text-red-500">Register Now</a>
          </p>
        </div>
        </form>
      </div>
      <Footer/>
    </div>
   
  );
}

export default Login;
