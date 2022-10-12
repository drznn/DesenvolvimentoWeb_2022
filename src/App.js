import Questao01 from "./components/Questao01";
import Questao01A from "./components/Questao01A";
import Questao01B from "./components/Questao01B";
import Questao02 from "./components/Questao02";
import Questao03 from "./components/Questao03";
import Questao04 from "./components/Questao04";
import Questao05 from "./components/Questao05";



function App() {
    return (
        <div>
            <Questao01>
                <Questao01A />
                <Questao01B />
            </Questao01>
            <Questao02 />
            <Questao03 />
            <Questao04 />
            <Questao05/>
        </div>
    );
}

export default App;