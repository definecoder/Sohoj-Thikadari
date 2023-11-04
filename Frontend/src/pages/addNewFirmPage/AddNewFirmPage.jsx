import NavBar from '../../components/navBar/NavBar';
import AddNewFirmForm from './AddNewFirmForm';
import './AddNewFirmPage.css';

export default function AddNewFirmPage() {

    return <>
        <NavBar />        
        <div className="addnewfirm-canvas">
            <div className="addnewfirm-title">
                ফার্মের তথ্যসমূহ দিন
            </div>
            <AddNewFirmForm />
        </div>
    </>;

}