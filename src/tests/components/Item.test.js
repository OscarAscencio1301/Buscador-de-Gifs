import { shallow } from 'enzyme';
import React from 'react';
import { Item } from '../../components/Item';
describe('Pruebas al componente Item', () => {
    const objeto = {
        id: 12345,
        title: "Imagenes de Prueba en Jest",
        url:"htpps://pruebaJest.com"
    }
    const wrapper = shallow(<Item imagenes={objeto}/>)

    test('Realizando una snapshot', () => {
        expect(wrapper).toMatchSnapshot();
    })
    test('Probando que las imagenes contengan alt', () => {
        const imagen = wrapper.find('img').props().alt
        expect(imagen).toBe(objeto.title)
    })
    test('Probando que los div contenga la clase item', () => {
        const div = wrapper.find('div').at(0).props().className
        console.log(div)
        expect(div).toBe('item');
    })
    
        
        
  
    
    
});

