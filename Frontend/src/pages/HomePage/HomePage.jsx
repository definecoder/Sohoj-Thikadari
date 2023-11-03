import { useLocation } from "react-router-dom";
import NavBar from "../../components/navBar/NavBar";

export default function HomePage() {

    // getting uid from login or signup :v
    //console.log(useLocation().state?.user);

    return <>
        <NavBar />
        <h1>hello</h1>
    </>;

}