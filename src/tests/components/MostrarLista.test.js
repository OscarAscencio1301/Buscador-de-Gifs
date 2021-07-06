import { shallow } from "enzyme";
import { MostrarLista } from "../../components/MostrarLista";

describe('Pruebas al componente MostrarLista', () => {
    test('Realizando un snapshot', () => {
        const wrapper = shallow(<MostrarLista />)
        expect(wrapper).toMatchSnapshot();
    })

    test('Realizando un snapshot', () => {
        const elm = ["Batman" ,"goku"]
        const wrapper = shallow(<MostrarLista elements={elm}/>)
        expect(wrapper).toMatchSnapshot();
    })
    
});
