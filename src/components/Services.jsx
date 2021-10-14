import { useState, useReducer, useEffect } from 'react';
import { AgendaReducer } from '../reducers/AgendaReducer';
import AddService from './AddService';
import Service from './Service';

const Services = ({ searchTerm }) => {

    // Localstorage
    const storageName = "matech.agenda";

    const init = () => {
        const agenda = localStorage.getItem(storageName);
        return agenda ? JSON.parse(agenda) : [];
    }

    const agenda = [];

    const [state, dispatch] = useReducer(AgendaReducer, agenda, init);

    const [frmServiceVisible, setFrmServiceVisible] = useState(false);
    const [addServiceText, setAddServiceText] = useState("Agregar servicio");
    const [servicesList, setServicesList] = useState(state);

    const handleToggleForm = () => {
        setFrmServiceVisible(!frmServiceVisible);

        const newText = frmServiceVisible ? "Agregar servicio" : "Cerrar";
        setAddServiceText(newText);
    }

    const handleDelete = (serviceId) => {
        const removeAgendaElement = {
            type: "agenda/delete",
            payload: {
                id: serviceId
            }
        }

        dispatch(removeAgendaElement);
    }

    useEffect(() => {
        localStorage.setItem(storageName, JSON.stringify(state));
        setServicesList(state);
    }, [state]);

    useEffect(() => {
        if (searchTerm === "") {
            setServicesList(state);
        }

        const filteredServices =
            state.filter(agenda =>
                agenda.name.toLowerCase().indexOf(searchTerm) >= 0);
        setServicesList(filteredServices);

    }, [searchTerm]);

    return (

        <>
            <div className="container m-2">
                <button type="button" className="btn btn-primary" onClick={handleToggleForm}>{addServiceText}</button>
            </div>
            {frmServiceVisible && <AddService dispatch={dispatch} />}

            <div className="table-responsive">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col" className="text-center">Horario</th>
                            <th scope="col" className="text-center">Lunes</th>
                            <th scope="col" className="text-center">Martes</th>
                            <th scope="col" className="text-center">Miércoles</th>
                            <th scope="col" className="text-center">Jueves</th>
                            <th scope="col" className="text-center">Viernes</th>
                            <th scope="col" className="text-center">Sábado</th>
                            <th scope="col" className="text-center">Domingo</th>
                        </tr>
                    </thead>
                    <tbody>

                        {servicesList.map((service) => <Service key={service.id} service={service} handleDelete={handleDelete} />)}

                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Services;
