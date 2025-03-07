
import TopBar from '../components/TopBar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
function Login() {
  return (
    
    <div>
        <TopBar/>
        <Navbar/>
      <div className="flex flex-col justify-center items-center my-10 w-1/3 mx-auto bg-gray-100 px-10 py-2 rounded-lg ">
        <h1 className=" pacifico-regular text-center font-bold text-4xl mx-10 ">Login</h1>
        <input type="text" className=" rounded-lg w-full p-2 my-5 border-2 border-gray-300" name="email" placeholder="Email"/>
        <input type="password" className="rounded-lg w-full p-2 my-5 border-2 border-gray-300" name="password" placeholder="Password"/>
        <button type="submit" name="login" className="  rounded-lg w-full p-2 my-5 bg-blue-500 text-white font-bold hover:bg-orange-500 transition"> Login</button>

        <div className="my-5">
          <p className="text-center">
            Don`t have an account?<a href="/register" className="text-red-500 font-semibold hover:underline">Register Now</a>
          </p>
        </div>
      </div>
      <Footer/>
    </div>
   
  );
}

export default Login;
