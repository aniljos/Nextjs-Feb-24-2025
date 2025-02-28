'use client'

type AppErrorPageProps = {
    error: Error
}

export default function AppErrorPage(props: AppErrorPageProps){

    return (
        <div className="alert alert-danger">
            Something went wrong!
            <p>Message: {props.error.message}</p>
            <p>Stack: {props.error.stack}</p>
        </div>
    )
}