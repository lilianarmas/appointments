import React, { Fragment, useState, useEffect } from 'react';
import Form from './components/Form';
import Appointment from './components/Appointment';

function App() {

    // Citas inciales
    let appointmentsInit = JSON.parse(localStorage.getItem('appointments'));
    if (!appointmentsInit) {
        appointmentsInit = [];
    }

    const [appointments, setAppointments] = useState(appointmentsInit);

    useEffect(() => {
        if (appointmentsInit) {
            localStorage.setItem('appointments', JSON.stringify(appointments));
        } else {
            localStorage.setItem('appointments', JSON.stringify([]));
        }
    }, [appointments, appointmentsInit]);

    const createAppointment = appointment => {
        setAppointments([
            ...appointments,
            appointment
        ]);
    }

    const deleteAppointmentForId = id => {
        const newAppointments = appointments.filter(appointment => appointment.id !== id);

        setAppointments(newAppointments);
    }

    const title = appointments.length === 0 ? 'No hay citas' : 'Administra tus Citas';

    return (
        <Fragment>
            <h1>Administrador de Pacientes</h1>
            <div className="container">
                <div className="row">
                    <div className="one-half column">
                        <Form createAppointment={createAppointment}/>
                    </div>
                    <div className = "one-half column" >
                        <h2>{title}</h2>
                        {appointments.map(appointment => (
                            <Appointment key={appointment.id}
                                appointment={appointment}
                                deleteAppointmentForId={deleteAppointmentForId}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default App;
