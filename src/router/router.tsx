import { createBrowserRouter } from "react-router-dom";
import NotFound from '../pages/not_found';
import Main from '../pages/main';
import AllProducts from '../pages/all_products';
import DetailedProduct from '../pages/detailed_product';
import WishLists from '../pages/wish_lists';
import MyPage from '../pages/my_page';
import KakaoLogin from '../pages/kakao_login';
import SearchProducts from '../pages/search_products';
import App from '../App';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, path: "/", element: <Main /> },
      { path: "/category/:id", element: <AllProducts /> },
      { path: "/rooms/:id", element: <DetailedProduct /> },
      { path: "/wishlists", element: <WishLists /> },
      { path: `/members`, element: <MyPage /> },
      { path: "/auth/kakao/callback", element: <KakaoLogin /> },
      { path: "/:searchParams", element: <SearchProducts /> },
    ],
  },
]);

export default router;