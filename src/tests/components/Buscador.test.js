import { shallow } from "enzyme";
import React from 'react';
import { Buscador } from "../../components/Buscador";

describe('Probando el componente Buscador', () => {
    const setelementos = jest.fn();
    const wrapper = shallow(<Buscador setelementos={setelementos}/>)
    test('Prueba al input con el onChange', () => {
        const value= "Hola,soy una prueba"
        const texto = wrapper.find('input')
        texto.simulate('change',{
            target:{
                value
            }
        })
             
    })
    test('Prueba al form con el OnSubmit', () => {
        const form = wrapper.find('form')
        form.simulate('submit', {
            preventDefault: () => {}
        })
    })
    
    
});
