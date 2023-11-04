import NavBar from '../../components/navBar/NavBar';
import './AddNewProgram.css';
import AddNewProgramForm from './AddNewProgramForm';

export default function AddNewProgram() {

    return <>
        <NavBar />        
        <div className="addnewprogram-canvas">
            <div className="addnewprogram-title">
                প্রোগ্রামের তথ্যসমূহ দিন
            </div>
            <AddNewProgramForm />
        </div>
    </>;

}