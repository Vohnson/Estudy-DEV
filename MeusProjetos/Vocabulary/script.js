// Dados da planilha (exemplo)
const vocabData = [
  { english: "achieving", portuguese: "alcançar" },
  { english: "their", portuguese: "deles" },
  { english: "mission", portuguese: "missão" },
  { english: "I", portuguese: "eu" },
  { english: "meant", portuguese: "significou" },
  { english: "people", portuguese: "pessoas" },
  { english: "on", portuguese: "sobre" },
  { english: "planes", portuguese: "aviões" },
  { english: "that", portuguese: "que" },
  { english: "was", portuguese: "era" },
  { english: "something", portuguese: "algo" },
  { english: "you", portuguese: "você" },
  { english: "described", portuguese: "descrito" },
  { english: "in", portuguese: "em" },
  { english: "your", portuguese: "seu" },
  { english: "book", portuguese: "livro" },
  { english: "yes", portuguese: "sim" },
  { english: "a", portuguese: "um" },
  { english: "new", portuguese: "novo" },
  { english: "virus", portuguese: "vírus" },
  { english: "say", portuguese: "dizer" },
  { english: "could", portuguese: "poderia" }
];

// Função para carregar os dados na tabela
function loadTableData(items) {
  const tableBody = document.getElementById('vocabBody');
  tableBody.innerHTML = '';

  items.forEach(item => {
      let row = `<tr>
                      <td>${item.english}</td>
                      <td>${item.portuguese}</td>
                 </tr>`;
      tableBody.innerHTML += row;
  });
}

// Carregar os dados ao iniciar a página
document.addEventListener('DOMContentLoaded', function() {
  loadTableData(vocabData);
});
