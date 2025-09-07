"use client"
interface AppbarClient {
    isSignedIn: boolean,
    onSignin: () => void,
    onSignout: () => {}
}

export const Appbar = ({ isSignedIn, onSignin, onSignout }: AppbarClient) => {
    return (
        <nav className="relative text-white bg-[#121212] flex justify-between items-center w-full " style={{ padding: "1rem" }}>
            <h1>Paytem</h1>
            {isSignedIn ? <button onClick={onSignout} color="secondary" className='p-2 md:px-3 cursor-pointer btn mr-4 rounded-md flex items-center justify-center'>
                <span className='text-sm'>sign out</span>
            </button>
                :
                <button color="primary" onClick={onSignin} className='p-2 md:px-4 cursor-pointer btn mr-4 rounded-md flex items-center justify-center'>
                    <span className='text-sm'>Login</span>
                </button>}
        </nav>
    )
}