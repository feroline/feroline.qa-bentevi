---
capitulo: 5
indice: 5.1.4
order: 6
subcapitulo: true
title: Técnicas de estimativa
---

<p>
  É a previsão da quantidade de trabalho relacionada ao teste, é baseada em suposições e está sujeita a erros. Tarefas grandes devem ser decomposta em menores para poder ter uma estimativa mais precisa, entretanto são suposições sujeita a erros e todos os envolvidos devem estar cientes disso. Há 4 técnicas apresentadas aqui, são elas: 
</p>

<ol>
  <li><b>Estimativa baseada em índices: </b> Baseado em métricas. São usados Indicadores Padrão (números coletados de projetos anteriores) para estimar o esfoço do teste do novo projeto. </li>
  <li><b>Extrapolação:</b> Baseado em métricas. Medições são feitas o mais cedo possível no projeto para coleta de dados, e a estimativa é feita com base na extrapolação desses dados. Muito adequado para SDLC iterativo. </li>
  <li><b>Wideband Delphi:</b> Baseda em especialistas. São usadas as experiências dos especialistas para estimar o esforço, no qual chegam a um consenso em comum. O Planning Poker é uma variante, mais utilizada no desenvolvimento ágil.</li>
  <li><b>Estimativa de três pontos:</b> Baseada em especialistas. Onde três estimativas são feitas, são elas: 
    <ul>
      <li><b>o:</b> a mais otimista</li>
      <li><b>m:</b> a mais provável</li>
      <li><b>p:</b> a mais pessimista</li>
      <li><b>E:</b> estimativa final</li>
    </ul>
    Ela é calculada da seguinte forma: 
    <br>
    <br>
    <div class="text-center" >
      <math>
        <mn> E </mn>
        <mo> = </mo> 
        <mfrac>
            <mrow>
                <mn> o </mn>
                <mo> + </mo>
                <mn> 4m </mn>
                <mo> + </mo> 
                <mn> p </mn>
            </mrow>
            <mn>6</mn>
        </mfrac>
      </math>
    </div>
    <br>
    O erro de medição (SD) é cáculado da seguinte forma:
    <br>
    <div class="text-center" >
      <math>
        <mn> SD </mn>
        <mo> = </mo>
        <mfrac>
            <mrow>
                <mn> ( </mn>
                <mn> p </mn>
                <mo> - </mo>
                <mn> 0 </mn>
                <mo> ) </mo>
            </mrow>
            <mn>6</mn>
        </mfrac>
      </math>
    </div>
    <br>
    <b>Exemplo de Estimativa em homens/hora:</b> 
    <br>
      o=6, m=9, p=18, então E=10+-2 homens/hora (entre 8 e 12 homens hora (10-2 ou 10+2))
    <br>
    <br>
    <div class="text-center" >
      <math>
        <mn> E </mn>
        <mo> = </mo> 
        <mfrac>
            <mrow>
                <mn> 6 </mn>
                <mo> + </mo>
                <mn> 36 </mn>
                <mo> + </mo> 
                <mn> 18 </mn>
            </mrow>
            <mn>6</mn>
        </mfrac>
        <mo> = </mo> 
        <mn> 10 </mn>
      </math>
      e 
      <math>
        <mn> SD </mn>
        <mo> = </mo>
        <mfrac>
            <mrow>
                <mn> ( </mn>
                <mn> 18 </mn>
                <mo> - </mo>
                <mn> 6 </mn>
                <mo> ) </mo>
            </mrow>
            <mn>6</mn>
        </mfrac>
        <mo> = </mo> 
        <mn> 2 </mn>
      </math>
    </div>

  </li>
</ol>
