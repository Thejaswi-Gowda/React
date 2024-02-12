import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const err = useRouteError();
    // console.log(err);
    return (
        <div>
            <h1>Opps</h1>
            <h2>Something went wrong!!</h2>
            <h4>{err.data}</h4>
            <h4>{err.status}</h4>
            <h4>{err.statusText}</h4>
        </div>
    )
}

export default ErrorPage;