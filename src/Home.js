import React, { useState } from 'react'
import ImageGrid from './comps/imageGrid';
import Modal from './comps/modal';
import Title from './comps/Title';
import Navbar from './comps/Navbar'
import UploadForm from './comps/uploadForm'


export default function Home() {
    const [selectedImg , setSelectedImg] = useState(null)
    // const [error, seterror] = useState("")
    // const {currentUser, logout } = useAuth() 
    // const history = useHistory()

    // async function handleLogout() {
    //     seterror('')

    //     try{
    //         await logout()
    //         history.push('/login')
    //     } catch {
    //         seterror('Failed to log out')
    //     }
    // }

    return (
        <div className="App">
        <Navbar/>
        <Title/>
        <UploadForm/>
        <ImageGrid setSelectedImg={setSelectedImg} />
        { selectedImg && <Modal selectedImg={ selectedImg } setSelectedImg={setSelectedImg} />}
        <div> 
            {/* {error && <Alert variant="danger" >{error}</Alert>  } */}
            {/* <strong>Email:</strong> {currentUser.email} */}
        </div>
        
        {/* <div className="w-100 text-center mt-2">
            <Button variant="link" onClick={handleLogout}>Log Out</Button>
        </div> */}
        </div>
    )
}
