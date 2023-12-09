import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

/* Template
 *   const pN = lazy(() => import('./pages/pN));
 */

const Capa = lazy(() => import("../pages/Home"));
const Page1 = lazy(() => import("../pages/Page1"));
const Page2 = lazy(() => import("../pages/Page2"));
const Page3 = lazy(() => import("../pages/Page3"));
const Page4 = lazy(() => import("../pages/Page4"));
const Pag5 = lazy(() => import("../pages/Page5"));
const Question1 = lazy(() => import("../pages/Atividade/Question1"));
const Question2 = lazy(() => import("../pages/Atividade/Question2"));
const Question3 = lazy(() => import("../pages/Atividade/Question3"));
const Question4 = lazy(() => import("../pages/Atividade/Question4"));

export default function Router() {
  return (
    <Suspense
      fallback={
        <div id="fallback" className="noRead">
          <div className="inner">
            <div className="bolas">
              <div />
              <div />
              <div />
            </div>
          </div>
        </div>
      }
    >
      <Routes>
        <Route path="/" element={<Capa />} />
        <Route path="/1" element={<Page1 />} />
        <Route path="/2" element={<Page2 />} />
        <Route path="/3" element={<Page3 />} />
        <Route path="/4" element={<Page4 />} />
        <Route path="/5" element={<Pag5 />} />
        <Route path="/atividade/1" element={<Question1 />} />
        <Route path="/atividade/2" element={<Question2 />} />
        <Route path="/atividade/3" element={<Question3 />} />
        <Route path="/atividade/4" element={<Question4 />} />
      </Routes>
    </Suspense>
  );
}
