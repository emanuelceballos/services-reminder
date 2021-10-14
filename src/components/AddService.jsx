import '../styles/AddService.css';
import { v4 as uuid } from "uuid";

const AddService = ({ dispatch }) => {

    const handleAddService = (e) => {
        e.preventDefault();

        let hasErrors = false;

        const serviceName = document.getElementById("txtServiceName");
        const allCheckboxes = [...document.getElementsByClassName('form-check-input')];
        const hours = document.getElementById("txtHours");
        const minutes = document.getElementById("txtMinutes");

        serviceName.classList.remove("required-field");
        allCheckboxes.map((el) => el.classList.remove("required-field"));
        hours.classList.remove("required-field");
        minutes.classList.remove("required-field");

        if (!serviceName.value) {
            serviceName.placeholder = "Requerido";
            serviceName.classList.add("required-field");

            hasErrors = true;
        }

        const checkboxes = [...document.querySelectorAll('input[class=form-check-input]:checked')];

        if (checkboxes.length === 0) {
            allCheckboxes.map((el) => el.classList.add("required-field"));

            hasErrors = true;
        }

        if (!hours.value || isNaN(hours.value) || parseInt(hours.value) < 0 || parseInt(hours.value) > 23) {
            hours.classList.add("required-field");

            hasErrors = true;
        }

        if (!minutes.value || isNaN(minutes.value) || parseInt(minutes.value) < 0 || parseInt(minutes.value) > 59) {
            minutes.classList.add("required-field");

            hasErrors = true;
        }

        if (hasErrors) {
            return;
        }

        const days = checkboxes.map((el) => el.value);

        const addAgendaElement = {
            type: "agenda/add",
            payload: {
                id: uuid(),
                name: serviceName.value,
                days,
                hours: pad(hours.value),
                minutes: pad(minutes.value)
            }
        }

        dispatch(addAgendaElement);
    }

    return (
        <>
            <div className="container my-2">
                <form>

                    <div className="container">
                        <div className="row">
                            <div className="col"></div>
                            <div className="col-sm-6">
                                <input type="text" id="txtServiceName" className="form-control" placeholder="Nuevo servicio" aria-label="Nuevo servicio" required />
                            </div>
                            <div className="col"></div>
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="row m-2">
                            <div className="col form-check form-switch">
                                <input className="form-check-input" type="checkbox" role="switch" id="lunes" value="Lunes" />
                                <label className="form-check-label" htmlFor="lunes">Lunes</label>
                            </div>
                            <div className="col form-check form-switch">
                                <input className="form-check-input" type="checkbox" role="switch" id="martes" value="Martes" />
                                <label className="form-check-label" htmlFor="martes">Martes</label>
                            </div>
                            <div className="col form-check form-switch">
                                <input className="form-check-input" type="checkbox" role="switch" id="miercoles" value="Miércoles" />
                                <label className="form-check-label" htmlFor="miercoles">Miércoles</label>
                            </div>
                            <div className="col form-check form-switch">
                                <input className="form-check-input" type="checkbox" role="switch" id="jueves" value="Jueves" />
                                <label className="form-check-label" htmlFor="jueves">Jueves</label>
                            </div>
                            <div className="col form-check form-switch">
                                <input className="form-check-input" type="checkbox" role="switch" id="viernes" value="Viernes" />
                                <label className="form-check-label" htmlFor="viernes">Viernes</label>
                            </div>
                            <div className="col form-check form-switch">
                                <input className="form-check-input" type="checkbox" role="switch" id="sabado" value="Sábado" />
                                <label className="form-check-label" htmlFor="sabado">Sábado</label>
                            </div>
                            <div className="col form-check form-switch">
                                <input className="form-check-input" type="checkbox" role="switch" id="domingo" value="Domingo" />
                                <label className="form-check-label" htmlFor="domingo">Domingo</label>
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col"></div>
                            <div className="col-sm-6">
                                <div className="text-center my-2">Horario</div>
                                <div className="input-group mb-3 container-sm">
                                    <input type="number" id="txtHours" min="0" max="23" className="form-control" placeholder="00" aria-label="Username" />
                                    <span className="input-group-text">:</span>
                                    <input type="number" id="txtMinutes" min="0" max="59" className="form-control" placeholder="00" aria-label="Server" />
                                </div>
                            </div>
                            <div className="col"></div>
                        </div>
                    </div>
                    <div className="container text-center">
                        <button type="submit" onClick={handleAddService} className="btn btn-primary">Agregar</button>
                    </div>
                </form>
            </div>
        </>
    )
}

function pad(d) {
    const padResult = '0' + d.toString();
    return (d < 10) ? padResult.slice(padResult.length - 2) : d.toString();
}

export default AddService;
