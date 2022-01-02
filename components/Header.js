import { useMoralis } from "react-moralis"
import Image from "next/image"
import Avatar from "./Avatar"
import ChangeUserName from "./ChangeUserName"

function Header() {
    const {user, getUsername } = useMoralis()

    return (
        <div className=" sticky top-0 z-50 bg-black shadow-sm border-2 border-pink-700 text-pink-500">
           <div className="grid grid-cols-5 lg:grid-cols-6 items-end lg:items-center">
               <div className="relative h-24 w-24 mx-auto hidden lg:inline-grid">
                   <Image
                   layout="fill"
                   objectFit="cover"
                   className="rounded-full"
                   src="https://links.papareact.com/3pi"

                   />
               </div>

               <div className="col-span-4 text-left lg:text-center">
                <div className="relative h-48 w-48 lg:mx-auto border-pink-500 border-8 rounded-full">
                <Avatar logoutOnPress/>
                </div> 


                <h1 className="text-3xl "> Welcome to the Metaverse! </h1>

                <h2 className="text-5xl font-bold truncate"> {user.getUsername()}</h2>

                   {/* username */}

                  <ChangeUserName />
               </div>
           </div>
        </div>
    )
}

export default Header
