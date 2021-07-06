import { shallow } from "enzyme";
import React from 'react';
import { consumirAPI } from "../../helpers/consumirAPI";

describe('Pruebas a la funcion helper', () => {
   test('Test asincrono', async() => {
    const funcionasinc = await consumirAPI();
    expect(funcionasinc.length).toBe(16);
   })
   
});
