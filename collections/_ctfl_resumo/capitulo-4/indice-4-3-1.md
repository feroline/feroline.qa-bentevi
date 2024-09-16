---
capitulo: 4
indice: 4.3.1
order: 9
subcapitulo: true
title: Teste de Instrução e Cobertura de Instrução
---

<p>
    O objetivo é criar casos de teste que executem as instruções do código até um nível aceitável de cobertura.
    Uma instrução isolada em um caso de teste pode não detectar alguns defeitos associados que dependam de dados específicos, por exemplo, um defeito somente é detectado com o valor de entrada '1', mas o caso de teste referente a essa instrução tem como valor de entrada 2.  
</p>

<p>
    100% de cobertura de Instrução significa que todas as intruções do código foram executadas ao menos uma vez, mas não garante que toda a lógica de decisão tenha sido testada.
</p>

<p>
 A cobertura é equivalente ao número de instruções executadas pelos casos de teste, dividida pelo número total de instruções executáveis no código, é representada em porcentagem:

<div class="d-flex flex-lg-row flex-md-row flex-sm-column justify-content-center">
    <div class="p-1"> 
        <math>
            <mfrac>
                <mrow>
                    <mn> Nº de Instrução nos TC </mn>
                </mrow>
                <mn>Nº Total de Instrução no Código</mn>
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
            <mn>Nº Total de Instrução no Código</mn>
        </mfrac>
            <mo> = </mo> 
            <mn> C% </mn>
         </math>
  </div>
</div>
</p>
