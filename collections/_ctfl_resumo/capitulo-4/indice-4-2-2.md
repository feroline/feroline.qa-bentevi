---
capitulo: 4
indice: 4.2.2
order: 5
subcapitulo: true
title: Análise de Valor Limite (BVA)
---

<p>
    É baseada na execução dos valores de limites das partições de equivalência. <b> Os valores mínimo e máximo de uma partição são seus valores de limite</b>, onde os desenvolvedores tem maior probabilidade de cometer erros. Existe a BVA de 2 valores e a BVA de 3 valores.
</p>

<p> 
    <ul>
        <li>
            <span><b>BVA de 2 valores:</b></span>
            Para cada valor limite há dois itens de cobertura, sendo o valor limite e seu vizinho mais próximo.
        </li>
        <br>
        <li>
            <span><b>BVA de 3 valores:</b></span>
            Para cada valor limite há três itens de cobertura, sendo o valor limite, seu vizinho da partição seguinte e seu vizinho da mesma partição.
        </li>
    </ul> 
    <span>
        Para atingir 100% de cobertura todos itens de cobertura (valor limite e seus vizinhos) devem ser executados.
    </span>
</p>

<p>A cobertura é medida da seguinte forma e expressa em porcentagem (C%): Número de valores de limite e vizinhos que foram executados, multiplicado por 100 e então o resultado é dividido pelo número total de valores de limite e seus vizinhos que foram identificados.</p>

<p>
 <div class="row justify-content-center">
    <div class="col-lg-4 col-sm-12 text-center">
        <math>
            <mfrac>
                <mrow>
                    <mn> Nº Executado * 100 </mn>
                </mrow>
                <mn>Nº Total </mn>
            </mfrac>
            <mo> = </mo> 
            <mn> C% </mn>
        </math>
    </div>
  </div>
</p>

<p>
    O exemplo a seguir mostra como o BVA de 3 valores tem uma cobertura maior do que o BVA de 2 valores, pois abrange o valor limite(3), o vizinho mais próximo (4), e o vizinho da mesma partição (2):
    <br>
    <div class="text-center">
        <!-- FIXME corrigir /feroline.qa-bentevi/ para usar relative_url -->
        <img class="img-fluid" src="/feroline.qa-bentevi/assets/images/bva.png">
    </div>
</p>
