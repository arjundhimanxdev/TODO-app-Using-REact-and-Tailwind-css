import { Suspense } from "react"
import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/Home";
import { PublicLayoutPage } from "./layout";

const AppRoutes = () => {
  return (
    <Suspense 
        fallback={<div className="text-black">loading......</div>}
        >
            <Routes>
                <Route element={<PublicLayoutPage />}>
                    <Route index element={<HomePage />} />
                </Route>

                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </Suspense>
  )
};

export default AppRoutes;