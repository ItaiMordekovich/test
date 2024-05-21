import { useRouteError } from "react-router-dom";
import { ErrorType } from "../@types/types";
import './Error.scss'


const Error = () => {
    const { data, status, statusText } = useRouteError() as ErrorType;

    return (
        <div id="errorDiv">
            <h1>Error!</h1>
            <p>oops.. something went wrong</p>
            <p>{status}</p>
            <p id="errorStatusText">{statusText}</p>
            <p>{data}</p>
        </div>
    )
}

export default Error