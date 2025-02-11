import {Route, Routes } from 'react-router-dom'
import { publicRoutes } from './routes';
import Home from './pages/Home';
import Girls from './pages/Girls';
export default function AppRouter() {
    return (
        <Routes>
            {publicRoutes.map(({path , Component}) => 
                <Route key={path} path={path} element={<Component/>} exact/>
            )}
            <Route path="*" element={<Home />} />
            <Route path="/girls" element={<Girls />} />
        </Routes>
        
    )
}
