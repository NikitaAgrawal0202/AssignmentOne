import { useRouteError } from "react-router";

const ErrorPage = () => {
    const err = useRouteError();
    console.log(err);
    return (
        <div>
            <h1>Opps!!</h1>
            <h3>{err?.status}</h3>
            <h4>{err?.error?.message}</h4>
        </div>
    )
}

export default ErrorPage;