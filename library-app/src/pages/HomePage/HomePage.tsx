import { LoginForm } from "../../features/authentication/components/LoginForm/LoginForm"



export default function HomePage(props:HomePageProps):JSX.Element{
    return(
        <div className="page">
            Home page
            {props.displayLogin ? <LoginForm /> : <></>}
        </div>
    )
}