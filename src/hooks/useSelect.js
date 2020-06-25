import React, {useState} from 'react';

const useSelect = (stateInicial, opciones) => {
    
    /**
     * State del custom hook
     * Al definir stateInicial (que es traido desde el formulario) carga por defecto el valor general
     * y es definido en el state que esta abajo
     */

    const [state, actualizarState] = useState(stateInicial);

    /* Recordar que los valores cargados (opcion) son traidos desde formulario 
     * En el caso que se quiera definir un valor por defecto (se tiene que definir en el formulario)
     * hay que agregar el "value" en el select.
     */
    const SelectNoticias = () => (
        <select 
        value={state} 
        className="browser-default"
        onChange={e => actualizarState(e.target.value)}
        >
            {opciones.map(opcion=>(
                <option key={opcion.value} value={opcion.value}>{opcion.label}</option>
            ))};
        </select>
    );

    return [state, SelectNoticias];
}
 
export default useSelect;
