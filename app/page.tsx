import { Provider } from "@/node_modules/react-redux/dist/react-redux";
import Banner from "./components/home/Banner";
import Category from "./components/home/Category";
import Products from "./components/home/Products";
import {store} from '../lib/redux/store'
export default function Home() {
  return (
    <Provider store ={store}>
      <div>
     <Category/>
     <Banner/>
     <Products/>
    </div>
    </Provider>
  );
}
