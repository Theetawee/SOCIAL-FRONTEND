import { useEffect, useRef } from "react";
import { useNavigate, useSearchParams } from "react-router-dom"
import useAuth from "../../hooks/Auth/useAuth";
import toast from "react-hot-toast";
const baseUrl = import.meta.env.VITE_BASE_URL



const GoogleLoginPage = () => {

    const [searchParams] = useSearchParams();
    const navigate = useNavigate();
    const code = searchParams.get('code');
    const {authenticateUser } = useAuth();
    const effectRan = useRef(false);

    useEffect(() => {
        const loginGoogle= async()=>{
            try{
                const response = await fetch(`${baseUrl}/accounts/google/`, {
                    method: 'POST',
                    credentials:"include",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        code
                    })

                })
                const data = await response.json();

                authenticateUser(data.access);
                navigate('/');
            } catch (error){
                toast.error('Unable to login, please try again.');
                navigate('/accounts/login');
            }
        }
        if (effectRan.current === false) {
            if (code) {
                loginGoogle();
            } else {
                navigate('/accounts/login');
            }
            effectRan.current = true;
        }
    },[authenticateUser, code, navigate])


const Loader = (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        viewBox="0 0 100 100"
        preserveAspectRatio="xMidYMid"
    >
        <circle cx="84" cy="50" r="10" fill="#1a1a1a">
            <animate
                attributeName="r"
                repeatCount="indefinite"
                dur="0.25s"
                calcMode="spline"
                keyTimes="0;1"
                values="10;0"
                keySplines="0 0.5 0.5 1"
                begin="0s"
            ></animate>
            <animate
                attributeName="fill"
                repeatCount="indefinite"
                dur="1s"
                calcMode="discrete"
                keyTimes="0;0.25;0.5;0.75;1"
                values="#1a1a1a;#ffffff;#1a1a1a;#0284c7;#ffffff"
                begin="0s"
            ></animate>
        </circle>
        <circle cx="16" cy="50" r="10" fill="#1a1a1a">
            <animate
                attributeName="r"
                repeatCount="indefinite"
                dur="1s"
                calcMode="spline"
                keyTimes="0;0.25;0.5;0.75;1"
                values="0;0;10;10;10"
                keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
                begin="0s"
            ></animate>
            <animate
                attributeName="cx"
                repeatCount="indefinite"
                dur="1s"
                calcMode="spline"
                keyTimes="0;0.25;0.5;0.75;1"
                values="16;16;16;50;84"
                keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
                begin="0s"
            ></animate>
        </circle>
        <circle cx="50" cy="50" r="10" fill="#0284c7">
            <animate
                attributeName="r"
                repeatCount="indefinite"
                dur="1s"
                calcMode="spline"
                keyTimes="0;0.25;0.5;0.75;1"
                values="0;0;10;10;10"
                keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
                begin="-0.25s"
            ></animate>
            <animate
                attributeName="cx"
                repeatCount="indefinite"
                dur="1s"
                calcMode="spline"
                keyTimes="0;0.25;0.5;0.75;1"
                values="16;16;16;50;84"
                keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
                begin="-0.25s"
            ></animate>
        </circle>
        <circle cx="84" cy="50" r="10" fill="#ffffff">
            <animate
                attributeName="r"
                repeatCount="indefinite"
                dur="1s"
                calcMode="spline"
                keyTimes="0;0.25;0.5;0.75;1"
                values="0;0;10;10;10"
                keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
                begin="-0.5s"
            ></animate>
            <animate
                attributeName="cx"
                repeatCount="indefinite"
                dur="1s"
                calcMode="spline"
                keyTimes="0;0.25;0.5;0.75;1"
                values="16;16;16;50;84"
                keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
                begin="-0.5s"
            ></animate>
        </circle>
        <circle cx="16" cy="50" r="10" fill="#1a1a1a">
            <animate
                attributeName="r"
                repeatCount="indefinite"
                dur="1s"
                calcMode="spline"
                keyTimes="0;0.25;0.5;0.75;1"
                values="0;0;10;10;10"
                keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
                begin="-0.75s"
            ></animate>
            <animate
                attributeName="cx"
                repeatCount="indefinite"
                dur="1s"
                calcMode="spline"
                keyTimes="0;0.25;0.5;0.75;1"
                values="16;16;16;50;84"
                keySplines="0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1;0 0.5 0.5 1"
                begin="-0.75s"
            ></animate>
        </circle>
    </svg>
);




  return (
      <section className="py-16 flex item justify-center">
          <div>
              <div className="w-24 overflow-hidden h-24 mx-auto">{Loader}</div>
              <p className="text-lg font-medium">Logging in</p>
          </div>
      </section>
  );
}

export default GoogleLoginPage
