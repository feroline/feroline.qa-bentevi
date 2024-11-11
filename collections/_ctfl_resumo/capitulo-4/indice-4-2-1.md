---
capitulo: 4
indice: 4.2.1
order: 4
subcapitulo: true
title: Particionamento de Equivalência (EP)
---

<p>
    Divide os dados em partições (partições de equivalência), onde todos os elementos desta partição serão processados da mesma forma pelo objeto de teste, ou seja, se um defeito for detectado para um valor, o mesmo defeito também será detectado para outros valores da mesma partição.
</p>

<p>
    Qualquer elemento de dados pode ser particionado. Ex.: Entradas, saídas, itens de configuração, valores internos, relacionados ao tempo e parâmetros de interface.
</p>

<!-- TODO: Pesquisar o que seriam particições Contínuas ou discretas, ordenadas ou não ordernadas, finitas ou infinitas -->
<p>
    Podem ser divididas em <b>Partições Válidas</b> e <b>Partições inválidas</b>. As partições válidas contém valores válidos que devem ser processados pelo objeto de teste. As partições inválidas contém valores inválidos que devem ser ignorados ou rejeitados pelo objeto de teste.
</p>

<p>Each Choice Coverage (ECC): Cobertura de Cada Escolha, é um critério de cobertura simples, no qual exige que os casos de teste executem cada partição de cada conjunto de partições pelo menos uma vez. </p>

<!-- FIXME: Corrigir cálculo de porcentagem para a EP -->
<p>
    Os itens de <b>cobertura</b> são as partições de equivalência que foram identificadas.
    Para 100% de cobertura, os casos de teste devem executar todas as partições (válidas e inválidas), pelo menos 1 vez. O resultado é expresso em porcentagem, sendo a fórmula: O Número de Partições Executadas dividido pelo Número Total de Partições existentes, no qual o resultado representado pela letra 'Y', será convertido em porcentagem resultando na porcentagem de Cobertura alcançada pelo Particionamento de Equivalência, representado pela letra 'C'
</p>

<p>
<div class="d-flex flex-lg-row flex-md-row flex-sm-column justify-content-center">
    <div class="p-1"> 
        <math>
            <mfrac>
                <mrow>
                    <mn> Nº Executadas </mn>
                </mrow>
                <mn>Nº Total</mn>
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
            <mn>Nº Total</mn>
        </mfrac>
            <mo> = </mo> 
            <mn> C% </mn>
         </math>
  </div>
</div>
</p>
