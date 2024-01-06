import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./ui/navbar/NavBar";
import { Suspense } from "react";
import { routes } from "./routes";

const AppRouter = () => {
    return (
        <>
            <Suspense fallback={<>...Cargando..</>}>
                <BrowserRouter>
                    <NavBar />
                    <Routes>
                        <Route
                            path={routes.publicas.INDEX}
                        />
                    </Routes>
                </BrowserRouter>
            </Suspense>
        </>
    );
};

export default AppRouter;
