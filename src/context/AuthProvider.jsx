// import { createContext, useState, useEffect, useContext,} from "react";
// import Apidata from "../Api/Apidata";
// export const AuthContext = createContext()

// export default function AuthProvider({ Children }) {
//     let [loading, setLoading] = useState(false)
//     let [data, setdata] = useState([])
//     let [value, setvalue] = useState("New")



//     let fetchingdata = (query) => {
//         setvalue('new')
//        setLoading(true)
//         Apidata(`search/?q=${query}`).then((res) => {
//                 setdata(res)
//                 setLoading(false)
//             })
//     }
//     useEffect(() => {
//         fetchingdata(value)


//     }, [value])


//     return (
//         <AuthContext.Provider value={{ loading, data, value, setLoading }}>
//             {Children}
//         </AuthContext.Provider>
//     )
// }

// export const useAuth = () => {
//     return  useContext(AuthContext)
    
    
// }