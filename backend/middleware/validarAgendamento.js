module.exports = function validarAgendamento(req, res, next) {
    const { nome_pet, raca_pet, servico, data, horario } = req.body;
    const dataAtual = new Date();
    const dataAgendada = new Date(data);
    const limiteFinal = new Date('2025-12-31');

    if (!nome_pet || nome_pet.trim() === '') {
        return res.status(400).json({ mensagem: 'O nome do pet é obrigatório.' });
    }

    if (!raca_pet || raca_pet.trim() === '') {
        return res.status(400).json({ mensagem: 'A raça do pet é obrigatória.' });
    }

    if (!servico || servico.trim() === '') {
        return res.status(400).json({ mensagem: 'O serviço é obrigatório.' });
    }

    const feriados = {
        '12-24': 'Véspera de Natal',
        '12-25': 'Natal',
        '12-31': 'Véspera de Ano Novo',
        '01-01': 'Ano Novo'
    };

    if (isNaN(dataAgendada.getTime())) {
        return res.status(400).json({ mensagem: 'Data inválida.' });
    }

    const mesDia = (dataAgendada.getMonth() + 1).toString().padStart(2, '0') + '-' +
                     dataAgendada.getDate().toString().padStart(2, '0');

    if (feriados[mesDia]) {
        return res.status(400).json({
            mensagem: `Não atendemos no feriado de ${feriados[mesDia]}. Por favor, escolha outra data.`
        });
    }

    const dataAtualSemHora = new Date(dataAtual.setHours(0, 0, 0, 0));
    if (dataAgendada < dataAtualSemHora) {
        return res.status(400).json({ mensagem: 'Não é possível agendar para datas passadas.' });
    }

    if (dataAgendada > limiteFinal) {
        return res.status(400).json({ mensagem: 'Não aceitamos agendamentos após dezembro de 2025.' });
    }

    if (!horario || !/^([0-9]{2}):([0-9]{2})$/.test(horario)) {
        return res.status(400).json({ mensagem: 'Horário inválido. Use o formato HH:MM.' });
    }

    const [hora, minuto] = horario.split(':').map(Number);

    if (hora < 9 || hora > 17 || (hora === 17 && minuto > 0)) {
        return res.status(400).json({
            mensagem: 'Atendimento apenas das 09:00 às 17:00. Escolha um horário dentro deste intervalo.'
        });
    }

    if (minuto < 0 || minuto >= 60 || (minuto % 15 !== 0)) {
        return res.status(400).json({
            mensagem: 'Os agendamentos devem ser feitos em intervalos de 15 minutos (00, 15, 30, 45).'
        });
    }

    if (dataAgendada.getDay() === 0) {
        return res.status(400).json({ mensagem: 'Não atendemos aos domingos.' });
    }

    next();
};