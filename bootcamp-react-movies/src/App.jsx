import "./App.css";
import AppRouter from "./AppRouter";
import ShiftList from "./ui/shift/ShiftList";
import AttendedShift from "./ui/shift/AttendedShift.jsx";
import { AppStore } from "./architecture/redux/store.js";
import { Provider } from "react-redux";
import CreateShift from "./ui/shift/CreateShift/CreateShift.jsx";

function App() {
    return (
        <>
            <Provider store={AppStore}>
                <AppRouter />
                <CreateShift/>
                <div className="main-container">
                    <ShiftList />
                    <AttendedShift />
                </div>
            </Provider>
        </>
    );
}

export default App;
