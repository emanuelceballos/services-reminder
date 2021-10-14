import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const Service = ({ service, handleDelete }) => {
    return (
        <tr data-id={service.id}>
            <td className="text-center">{`${service.hours}:${service.minutes}`}</td>
            <td className="text-center">{service.days.includes('Lunes') ? service.name : '-'}</td>
            <td className="text-center">{service.days.includes('Martes') ? service.name : '-'}</td>
            <td className="text-center">{service.days.includes('Miércoles') ? service.name : '-'}</td>
            <td className="text-center">{service.days.includes('Jueves') ? service.name : '-'}</td>
            <td className="text-center">{service.days.includes('Viernes') ? service.name : '-'}</td>
            <td className="text-center">{service.days.includes('Sábado') ? service.name : '-'}</td>
            <td className="text-center">{service.days.includes('Domingo') ? service.name : '-'}</td>
            <td className="text-center" onClick={() => handleDelete(service.id)}><FontAwesomeIcon className="text-danger" icon={faTrashAlt} /></td>
        </tr>
    )
}

export default Service
