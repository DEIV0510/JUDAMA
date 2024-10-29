const form = document.getElementById('form-asistencia');
        const listaSolicitudes = document.getElementById('lista-solicitudes');
        let solicitudes = [];

        form.addEventListener('submit', function (e) {
            e.preventDefault();
            const evento = document.getElementById('evento').value;
            const fecha = document.getElementById('fecha').value;

            const nuevaSolicitud = { evento, fecha };
            solicitudes.push(nuevaSolicitud);
            renderizarSolicitudes();
            form.reset();
        });

        function renderizarSolicitudes() {
            listaSolicitudes.innerHTML = '';
            solicitudes.forEach((solicitud, index) => {
                const li = document.createElement('li');
                li.textContent = `${solicitud.evento} - ${solicitud.fecha}`;
                
                const btnEliminar = document.createElement('button');
                btnEliminar.textContent = 'Eliminar';
                btnEliminar.onclick = () => {
                    solicitudes.splice(index, 1);
                    renderizarSolicitudes();
                };

                li.appendChild(btnEliminar);
                listaSolicitudes.appendChild(li);
            });
        }