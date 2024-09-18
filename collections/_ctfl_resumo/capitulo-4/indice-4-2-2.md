---
capitulo: 4
indice: 4.2.2
order: 5
subcapitulo: true
title: Análise de Valor Limite (BVA)
---

<p>
    É baseada na execução dos limites de valor das partições de equivalência. Os valores mínimo e máximo de uma partição são seus valores de limite, onde os desenvolvedores tem maior probabilidade de cometer erros. Existe a BVA de 2 valores e a BVA de 3 valores.
</p>

<p>
    <span><b>BVA de 2 valores:</b></span>
    <ul>
        <li>Para cada valor limite há dois itens de cobertura, sendo o valor limite e seu vizinho mais próximo pertencente a partição seguinte (vizinha).</li>
        <li>Para atingir 100% de cobertura todos os valores limites identificados devem ser executados.</li>
    </ul> 
</p>

<p>A cobertura é medida da seguinte forma e expressa em porcentagem (C): Número de Valores limites executados, dividido pelo número total de valor limite identificado (Y). </p>

<p>
    <div class="d-flex flex-lg-row flex-md-row flex-sm-column justify-content-center">
    <div class="p-1">
        <math>
            <mfrac>
                <mrow>
                    <mn> Nº Executados </mn>
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
        <math>
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

<p>
    <span><b>BVA de 3 valores:</b></span>
    <ul>
        <li>Para cada valor limite há três itens de cobertura, sendo o valor limite, seu vizinho da partição seguinte e seu vizinho da mesma partição.</li>
        <li>Para atingir 100% de cobertura todos os valores limites e seus vizinhos devem ser executados.</li>
    </ul> 
</p>

<p>A cobertura é medida da seguinte forma e expressa em porcentagem (C): Número de Valores limites executados mais seus vizinhos, dividido pelo número total de valor limite identificado mais seus vizinhos (Y) </p>

<p>
 <div class="row justify-content-center">
    <div class="col-lg-4 col-sm-12 text-center">
        <math>
            <mfrac>
                <mrow>
                    <mn> Nº Executados + vizinhos Executados</mn>
                </mrow>
                <mn>Nº Total + vizinhos Totais</mn>
            </mfrac>
            <mo> = </mo> 
            <mn> Y </mn>
        </math>
    </div>
    <div class="col-lg-1 col-sm-12 text-center">
        &rarr;
    </div>
    <div class="col-lg-4 col-sm-12 text-center">
        <math>
            <mfrac>
                <mrow>
                    <mn> Y </mn>
                    <mo> *</mo>
                    <mn> 100 </mn> 
                </mrow>
                <mn>Nº Total + vizinhos Totais</mn>
            </mfrac>
            <mo> = </mo> 
            <mn> C% </mn>
         </math>
    </div>
  </div>
</p>

<p>
    O exemplo a seguir mostra como o BVA de 3 valores tem uma cobertura maior que o BVA de 2 valores, pois abrange não apenas seu vizinho adjacente da próxima partição, mas também seu vizinho da mesma partição:
    <br>
    <div class="text-center">
        <!-- TODO corrigir /feroline.qa-bentevi/ para usar relative_url -->
        <img class="img-fluid" src="/feroline.qa-bentevi/assets/images/bva.png">
    </div>
</p>
