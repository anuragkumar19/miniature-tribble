import { DefaultLayout } from './layouts/DefaultLayout'

export const AuthPage = () => {
    return (
        <DefaultLayout title='Login'>
            <div class='container flex justify-center items-center h-screen py-20'>
                <div class='card bg-slate-800  max-w-md shadow-lg'>
                    <div class='card-body'>
                        <h1 class='text-center text-3xl mb-4'>Twitter</h1>
                        <button id='login-btn' class='btn btn-primary w-full'>
                            Login
                        </button>
                        <button
                            id='signup-btn'
                            class='btn btn-secondary btn-outline w-full'
                        >
                            Create new account
                        </button>
                    </div>
                </div>
            </div>

            <script src='/public/js/auth.js'></script>
        </DefaultLayout>
    )
}
