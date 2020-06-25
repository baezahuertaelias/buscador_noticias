import React from 'react';
import styles from './Formulario.module.css';
import PropTypes from 'prop-types';
import useSelect from '../hooks/useSelect';
/**
 * Comentarios respecto a css
 * Se importa el modulo
 * Para ocupar variables y los css desde materialize se debe usar el formato de los string templates
 * Esta agregado aqui para usarlo como ejemplo
 * Y cuando aparece una propiedad css con "-" se tiene que acceder como si fuera un objeto
 */

const Formulario = ({guardarCategoria}) => {

    /* Categorias que tiene la API */
    const OPCIONES = [
        {value: 'general', label: 'General'},
        {value: 'business', label: 'Negocios'},
        {value: 'entertainment', label: 'Entretenimiento'},
        {value: 'health', label: 'Salud'},
        {value: 'science', label: 'Ciencia'},
        {value: 'sports', label: 'Deportes'},
        {value: 'technology', label: 'Tecnologia'}
    ];

    /* Utilizar custom hook */
    const [categoria, SelectNoticias] = useSelect('general', OPCIONES);

    /* Accion del submit para pasar la categoria escogida al App.js */
    const buscarNoticias = e => {
        e.preventDefault();

        /* Recordar que categoria es el contiene la categoria seleccionada */
        guardarCategoria(categoria);
    };

    return ( 
        <div className={`${styles.buscador} row`}>
            <div className="col s12 m8 offset-m2">
                <form
                    onSubmit={buscarNoticias}
                >
                    <h2 className={styles.heading}>Encuentra noticias por categoria</h2>

                    <SelectNoticias/>

                    <div className="input-field col s12">
                        <input
                            type="submit"
                            className={`${styles['btn-block']}  btn-large amber darken-2`}
                            value="Buscar"
                        />
                    </div>
                </form>
            </div>
        </div>
     );
}

Formulario.propTypes = {
    guardarCategoria : PropTypes.func.isRequired
};

export default Formulario;