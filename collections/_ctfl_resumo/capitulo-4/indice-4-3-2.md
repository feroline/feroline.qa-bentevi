---
capitulo: 4
indice: 4.3.2
order: 10
subcapitulo: true
title: Teste de Ramificação e Cobertura de Ramificação
---

<p>
    <b>Ramificação:</b> É a transferência de controle entre dois nós no gráfico de fluxo de controle, ou seja, mostra as possíveis sequências nos quais as instruções do código-fonte são executadas. Cada transferência pode ser incondicional ou condicional.
</p>

<p>Uma ramificação executada pode não detectar defeitos em casos que exijam a execução de caminho especifico no código.</p>

<p>
    100% de cobertura de Ramificação é igual a 100% de cobertura de instrução, mas não o contrário.
    Os itens de cobertura são ramificações, e o objetivo é criar casos de teste para executar todas até um nível aceitável de cobertura. A cobertura é medida da seguinte forma, onde o número total de ramificações executadas pelos casos de teste é dividido pelo número total de ramificações, sendo expressa em porcentagem.
</p>

<p>
<div class="d-flex flex-lg-row flex-md-row flex-sm-column justify-content-center">
    <div class="p-1"> 
        <math>
            <mfrac>
                <mrow>
                    <mn> Nº de Ramificações nos TC </mn>
                </mrow>
                <mn>Nº Total de Ramificações no Código</mn>
            </mfrac>
            <mo> = </mo> 
            <mn> Y </mn>
        </math>
    </div>
  <div class="p-1">
        &rarr;
  </div>
  <div class="p-1">
  <math >
        <mfrac>
            <mrow>
                <mn> Y </mn>
                <mo> *</mo>
                <mn> 100 </mn> 
            </mrow>
            <mn>Nº Total de Ramificações no Código</mn>
        </mfrac>
            <mo> = </mo> 
            <mn> C% </mn>
         </math>
  </div>
</div>
</p>
