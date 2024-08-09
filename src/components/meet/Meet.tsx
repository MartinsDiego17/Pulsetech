import { TimeInput } from '@nextui-org/react';
import React, { useEffect, useState } from 'react';

interface Dia {
  dia: number;
  diaSemana: number;
  opacity: boolean;
}

const Calendar: React.FC = () => {
  const [dias, setDias] = useState<Dia[]>([]);
  const [mes, setMes] = useState<number>(new Date().getMonth());
  const [year, setYear] = useState<number>(new Date().getFullYear());
  const [fechaSeleccionada, setFechaSeleccionada] = useState<number | null>(null);
  const [horarioSeleccionado, setHorarioSeleccionado] = useState<string | null>(null);

  const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
  const diasSemana = ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'];
  const horarios = ["10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00", "22:00", "23:00", "00:00"];

  const handleDayClick = (dia: number) => {
    setFechaSeleccionada(dia);
  };

  const handleHoraOnclick = (horario: string) => {
    setHorarioSeleccionado(horario);
  };

  useEffect(() => {
    const days: Dia[] = [];
    const listaCompleta = new Date(year, mes, 1).getDay();
    const calendarioInicial = new Date(year, mes, 0).getDate();
    const diasAntes = new Date(year, mes + 1, 0).getDate();

    for (let i = 1; i <= listaCompleta; i++) {
      days.unshift({ dia: calendarioInicial - i + 1, diaSemana: listaCompleta - i, opacity: true });
    }

    for (let i = 1; i <= diasAntes; i++) {
      let fecha = new Date(year, mes, i);
      let diaSemana = fecha.getDay();
      days.push({ dia: i, diaSemana, opacity: false });
    }

    const diasMesProximo = days[days.length - 1].diaSemana;
    for (let i = 1; i <= 6 - diasMesProximo; i++) {
      days.push({ dia: i, diaSemana: diasMesProximo + i, opacity: true });
    }

    setDias(days);
  }, [mes, year]);

  const nextMonth = () => {
    if (mes === 11) {
      setYear(year + 1);
      setMes(0);
    } else {
      setMes(mes + 1);
    }
  }

  const prevMonth = () => {
    const currentMonth = new Date().getMonth();
    const currentYear = new Date().getFullYear();
    if (mes === 0) {
      if (year !== currentYear) {
        setYear(year - 1);
        setMes(11);
      }
    } else {
      if (!(year === currentYear && mes === currentMonth)) {
        setMes(mes - 1);
      }
    }
  }

  return (
    <>
      <div className='text-white flex md:mt-24 md:w-[100%] justify-evenly'>
        <div className="bg-neutral-900 flex flex-col items-center w-[27vw] rounded-2xl">
          <h1 className="text-2xl font-bold mt-2 mb-4">Año: {year}</h1>
          <h1 className="text-2xl font-bold -mb-8">{meses[mes]}</h1>
          <div>
            <button onClick={prevMonth} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-20">
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="m277.46-461.73 229.12 229.11L480-206.15 206.15-480 480-753.85l26.58 26.47-229.12 228.73h476.39v36.92H277.46Z" /></svg>
            </button>
            <button onClick={nextMonth} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-20">
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M682.54-461.73H206.15v-36.92h476.39L453.81-727.38 480-753.85 753.85-480 480-206.15l-26.19-26.47 228.73-229.11Z" /></svg>
            </button>
          </div>
          <div className="bg-black grid grid-cols-7 mt-4 px-1 pb-6 rounded-b-2xl">
            {diasSemana.map((dia, index) => (
              <div key={index} className="text-center font-bold px-2 py-1">
                {dia}
              </div>
            ))}
            {dias.map((dia, index) => (
              <div key={index} className={`text-center flex ${dia.opacity ? 'opacity-50' : ''}`}>
                <button
                  className="hover:bg-sky-600 rounded-[60%] mx-auto py-1 px-2"
                  onClick={() => handleDayClick(dia.dia)}
                >
                  {dia.dia.toString().padStart(2, '0')}
                </button>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="bg-black py-1 px-1.5 md:w-[30vw] rounded-2xl relative z-40 h-[51vh]">
            <h2 className="text-center text-2xl md:mt-2">Selecciona un Horario</h2>
            <div className="grid grid-cols-3 gap-4 p-4">
              {horarios.map((horario, index) => (
                <button
                  key={index}
                  onClick={() => handleHoraOnclick(horario)}
                  className={`bg-neutral-900 hover:bg-blue-500 rounded-2xl py-1 ${horarioSeleccionado === horario ? 'bg-blue-500' : ''}`}
                >
                  {horario}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* <button className='bg-blue-800 flex mx-auto md:mt-5 py-1 px-16 rounded-2xl'>Ir a pagar</button> */}
    </>
  )
}

export default Calendar;
