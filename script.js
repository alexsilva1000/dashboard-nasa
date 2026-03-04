async function carregarDados() {
    try {
        const response = await fetch('./GLB_Ts_dSST.csv');
        const data = await response.text();
        const rows = data.split('\n').slice(2); 
        
        // Pula as duas primeiras linhas de cabeçalho da NASA

        const anos = [];
        const anomalias = [];

        rows.forEach(row => {
            const cols = row.split(',');
            // cols[0] é o Ano, cols[1] é a anomalia (J-D)
            if (cols[0] && cols[1] && cols[1] !== '***') {
                anos.push(cols[0]);
                anomalias.push(parseFloat(cols[1]));
            }
        });

        desenharGraficos(anos, anomalias);
    } catch (erro) {
        console.error("Erro ao carregar o CSV:", erro);
    }
}

function desenharGraficos(labels, dados) {
    // Gráfico de Linha (Variação Anual)
    new Chart(document.getElementById('graficoLinha'), {
        type: 'line',
        data: {
            labels: labels,
            datasets: [{
                label: 'Anomalia de Temp (°C)',
                data: dados,
                borderColor: '#0d6efd',
                backgroundColor: 'rgba(13, 110, 253, 0.1)',
                fill: true,
                tension: 0.3
            }]
        },
        options: { responsive: true, maintainAspectRatio: false }
    });

    // Gráfico de Barras (Médias por Período) - Exemplo com os últimos 10 anos
    new Chart(document.getElementById('graficoBarras'), {
        type: 'bar',
        data: {
            labels: labels.slice(-10),
            datasets: [{
                label: 'Última Década',
                data: dados.slice(-10),
                backgroundColor: '#dc3545'
            }]
        }
    });

    // Gráfico Polar (Janeiro)
    new Chart(document.getElementById('graficoPolar'), {
        type: 'polarArea',
        data: {
            labels: ['Média Histórica', 'Anomalia Atual'],
            datasets: [{
                data: [0, dados[dados.length - 1]],
                backgroundColor: ['#6c757d', '#ffc107']
            }]
        }
    });
}

carregarDados();