import { Layout } from '@/components/layout';
import { CreatePage } from '@/pages/create';
import { EditPage } from '@/pages/edit';
import { MainPage } from '@/pages/main';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<MainPage />} />
      <Route path="edit" element={<EditPage />} />
      <Route path="create" element={<CreatePage />} />
    </Route>,
  ),
);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
