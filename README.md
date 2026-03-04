Relatório Técnico: Dashboard NASA
Estratégia de Dados
Os dados foram processados via JavaScript para garantir que o arquivo original da NASA não sofresse alterações manuais. O script localiza o início dos dados reais, ignora metadados e valida cada valor com parseFloat, tratando inclusive campos vazios ou nulos (como o marcador '***') para evitar erros nos dashboards.

Escolhas Técnicas
Utilizei Bootstrap para criar um layout limpo e responsivo de forma ágil, e a biblioteca Chart.js para renderizar três visualizações: linha (série histórica), barras (comparativo recente) e área polar (estatísticas de média). Essa combinação garante performance e uma interface profissional para o usuário final.

Diferencial e Execução
Implementei um filtro dinâmico de anos que atualiza as informações em tempo real sem recarregar a página. Nota: Por restrições de segurança de arquivos locais (CORS), o projeto deve ser aberto via servidor local (Live Server) ou hospedado em um serviço como o GitHub Pages para que os gráficos funcionem corretamente.