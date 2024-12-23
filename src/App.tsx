import s from './App.module.scss';
import {Tables} from "./widgets";
import {UiInteractiveMenu} from "./shared";

function App() {
    return (
        <div className={s.app}>
            <UiInteractiveMenu/>
            <Tables/>
        </div>
    );
}

export default App;
