
const Login = () => {
  return (
    <div>
        <div>
            <h1>Admin Panel</h1>
            <form action="">
                <div>
                    <p>Email Address</p>
                    <input type="email" placeholder="your@email.com" required />
                </div>
                <div>
                    <p>Password</p>
                    <input type="password" placeholder="Enter Your Password" required />
                </div>
                <button type="submit">Login</button>
               
            </form>
        </div>
    </div>
  )
}

export default Login