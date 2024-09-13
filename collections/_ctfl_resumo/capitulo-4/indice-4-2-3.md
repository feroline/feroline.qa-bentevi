---
capitulo: 4
indice: 4.2.3
order: 6
subcapitulo: true
title: Tabela de Decisão
---

<p>
    É uma forma eficaz de registrar regras complexas como as Regras de Negócios. Nesta tabela são definidas condições e ações resultantes do sistema. Uma tabela completa cobre todas as combinações de condições, mas pode ser simplificada excluindo, fundindo condições inviáveis ou que não afetam o resultado.
</p>

<table class="table table-sm table-bordered">
  <thead>
    <tr>
      <th scope="col"></th>
      <th scope="col">Ação 1</th>
      <th scope="col">Ação 2</th>
    </tr>
  </thead>
  <tbody>
    <tr class="flex-row">
      <th scope="row">Condição 1</th>
      <td>Resultado 1.1</td>
      <td>Resultado 1.2</td>
    </tr>
    <tr>
      <th scope="row">Condição 2</th>
      <td>Resultado 2.1</td>
      <td>Resultado 2.2</td>
    </tr>
  </tbody>
</table>

<p>
    <b>Linha:</b> Condições e seus resultados de acordo com a ação, chamados de Ações Resultantes.
    <br>
    <b>Coluna:</b> Regra de decisão (combinação única de decisão) e Ações Associadas.
</p>

<p>Aqui serão tratados dois tipos de tabelas de decisão, são elas:
    <ul>
        <li><b>Entrada Limitada:</b> Todos os valores das Condições e Ações são mostrados como Verdadeiro e Falso (Booleano). Exceto os valores irrelevantes ou inviáveis. </li>
        <li><b>Entrada Estendida:</b> Alguns ou todos os valores das Condições e Ações podem apresentar valores múltiplos (ex.: intervalos).</li>
    </ul>
</p>

<p>
   As notações podem ser : 
    <table class="table table-sm table-bordered">
        <thead>
            <tr>
                <th scope="col">Notação</th>
                <th scope="col">Significado</th>
            </tr>
        </thead>
        <tbody>
            <tr class="flex-row">
                <th scope="row text-align-center"> V </th>
                <td>Verdadeiro. A ação foi satisfeita.</td>
            </tr>
            <tr class="flex-row">
                <th scope="row"> F </th>
                <td>Falso. A ação não foi satisfeita.</td>
            </tr>
            <tr class="flex-row">
                <th scope="row"> &mdash; </th>
                <td>O valor da condição é irrelevante para o resultado.</td>
            </tr>
            <tr class="flex-row">
                <th scope="row"> N/A </th>
                <td>Não Aplica. A condição é inviável para regra.</td>
            </tr>
            <tr class="flex-row">
                <th scope="row"> X </th>
                <td>A ação deve ocorrer.</td>
            </tr>
            <tr class="flex-row">
                <th scope="row">   </th>
                <td>Em branco. A ação não deve ocorrer.</td>
            </tr>
        </tbody>
    </table>
</p>

<p>A cobertura é feita nas colunas que tem combinações viáveis. Para atingir 100%, todas as colunas devem ser executadas, sendo medida da seguinte forma: O Número total de colunas executadas é dividido pelo total de colunas viáveis, sendo o resultado representado pela letra 'Y', e então espresso na forma de porcentagem, representado pela letra 'C'.</p>

<p>
    <div class="d-flex flex-lg-row flex-md-row flex-sm-column justify-content-center">
    <div class="p-1">
        <math>
            <mfrac>
                <mrow>
                    <mn> Nº Executados </mn>
                </mrow>
                <mn>Nº Total Viável</mn>
            </mfrac>
            <mo> = </mo> 
            <mn> Y </mn>
        </math>
    </div>
    <div class="p-1">
        &rarr;
    </div>
    <div class="p-1">
        <math>
            <mfrac>
                <mrow>
                    <mn> Y </mn>
                    <mo> *</mo>
                    <mn> 100 </mn> 
                </mrow>
                <mn>Nº Total Viável</mn>
            </mfrac>
            <mo> = </mo> 
            <mn> C% </mn>
        </math>
    </div>
  </div>
</p>
