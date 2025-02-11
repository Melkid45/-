import Home from './pages/Home.jsx'
import Firma from './pages/Firma.jsx'
import Salon from './pages/Salon.jsx'
import Girls from './pages/Girls.jsx'
import Girl from './pages/Girl.jsx'
import Guy from './pages/Guy.jsx'
import Registration__Company from './pages/RegistCompany.jsx'
import Registration__User from './pages/RegistUser.jsx'
import Auth from './pages/Auth.jsx'
import Favorite from './pages/Favorite.jsx'
import UserAccount from './pages/UserAccount.jsx'
import CompanyAccount from './pages/CompanyAccount.jsx'



import {Firma_Route , Girls_Route, Salon_Route, Girl_Route, Guy_Route, Registration__Company_Route, Registration__User_Route, Auth_Route, Favorite_Route, Home_Route, User_Account_Route , Company_Account_Route} from "./utils/const";

// export const authRoutes = [
//     {
//         path: Auth_Route,
//         Component: Auth
//     },
//     {
//         path: Blog_Route,
//         Component: Blog
//     },
// ]
export const publicRoutes = [
    {
        path: Home_Route,
        Component: Home
    },
    {
        path: Firma_Route,
        Component: Firma
    },
    {
        path: Girls_Route,
        Component: Girls
    },
    {
        path: Salon_Route,
        Component: Salon
    },
    {
        path: Girl_Route,
        Component: Girl
    },
    {
        path: Guy_Route,
        Component: Guy
    },
    {
        path: Registration__Company_Route,
        Component: Registration__Company
    },
    {
        path: Registration__User_Route,
        Component: Registration__User
    },
    {
        path: Auth_Route,
        Component: Auth
    },
    {
        path: Favorite_Route,
        Component: Favorite
    },
    {
        path: User_Account_Route,
        Component: UserAccount
    },
    {
        path: Company_Account_Route,
        Component: CompanyAccount
    },
    
]