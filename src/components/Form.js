import React, { Fragment, useState }  from 'react';
import uuid from 'uuid/v4';

const Form = ({ createAppointment }) => {

    // Crear State de Citas
    const [appointment, setAppointment] = useState({
        pet: '',
        owner: '',
        date: '',
        time: '',
        symptom: ''
    });

    const [error, setError] = useState(null);

    // Función que se ejecuta cuando el usuario escribe
    const handleChange = e => {
        setAppointment({
            ...appointment,
            [e.target.name]: e.target.value
        });
    }

    // Extraer los valores
    const { pet, owner, date, time, symptom } = appointment;

    const submitAppointment = e => {
        e.preventDefault();

        // Validar
        if(!pet || pet.trim() === '') {
            setError('Mascota');
            return;
        }

        if(!owner || owner.trim() === '') {
            setError('Propietario');
            return;
        }

        if(!date || date.trim() === '') {
            setError('Fecha');
            return;
        }

        if(!time || time.trim() === '') {
            setError('Hora');
            return;
        }

        if(!symptom || symptom.trim() === '') {
            setError('Síntomas');
            return;
        }

        //Eliminar mensaje previo
        setError(null);

        // Asignar un _id
        appointment.id = uuid();

        // Crear la cita
        createAppointment(appointment);

        // Reiniciar el form
        setAppointment({
            pet: '',
            owner: '',
            date: '',
            time: '',
            symptom: ''
        });
    }

    return ( 
        <Fragment>
            <h2>Crear Cita</h2>

            { error ? <p className="error-alert">El campo {error} es obligatorio</p>
            : null }

            <form
                onSubmit={submitAppointment}
            >
                <label>Nombre Mascota</label>
                <input
                    type="text"
                    name="pet"
                    className="u-full-width"
                    placeholder="Nombre Mascota"
                    onChange={handleChange}
                    value={pet}
                />
                <label>Nombre Propietario</label>
                <input
                    type="text"
                    name="owner"
                    className="u-full-width"
                    placeholder="Nombre Propietario de Mascota"
                    onChange={handleChange}
                    value={owner}
                />
                <label>Fecha</label>
                <input
                    type="date"
                    name="date"
                    className="u-full-width"
                    onChange={handleChange}
                    value={date}
                />
                <label>Hora</label>
                <input
                    type="time"
                    name="time"
                    className="u-full-width"
                    onChange={handleChange}
                    value={time}
                />
                <label>Síntomas</label>
                <textarea
                    name="symptom"
                    className="u-full-width"
                    onChange={handleChange}
                    value={symptom}
                >
                </textarea>

                <button
                    type="submit"
                    className="u-full-width button-primary"
                >
                    Agregar Cita
                </button>
            </form>
        </Fragment>
    );
}
 
export default Form;
