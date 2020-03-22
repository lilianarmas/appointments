import React from 'react';

const Appointment = ({ appointment, deleteAppointmentForId }) => (
    <div className="appointment">
        <p>Mascota: <span>{appointment.pet}</span></p>
        <p>Propietario: <span>{appointment.owner}</span></p>
        <p>Fecha: <span>{appointment.date}</span></p>
        <p>Hora: <span>{appointment.time}</span></p>
        <p>Síntomas: <span>{appointment.symptom}</span></p>

        <button
            className="button delete u-full-width"
            onClick={ () =>  deleteAppointmentForId(appointment.id) }
        >Eliminar &times;</button>
    </div>
)
 
export default Appointment;
