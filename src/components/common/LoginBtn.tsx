import { Link } from "react-router-dom"

const LoginBtn = () => {
  return (
      <div>
          <Link to={"/?login=true"} className="px-6 py-2 flex items-center justify-center rounded text-sm bg-primary-600 text-white">Login</Link>
    </div>
  )
}

export default LoginBtn