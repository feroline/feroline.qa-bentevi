---
capitulo: 4
indice: 4.2.4
order: 7
subcapitulo: true
title: Teste de Transição de Estado
---

<p>
    <span>
     Modela o comportamento de um sistema, mostrando seus possíveis estados e suas transições. A transição é acionada por um evento, qualificada por uma Condição de Proteção que pode ou não existir.
    </span>
    <div class="d-flex flex-lg-row flex-md-row flex-sm-column justify-content-center">
        <div class="p-1">
            <math>
                <mfrac>
                    <mrow>
                        <mn> Evento [Condição de Proteção] </mn>
                    </mrow>
                    <mn>Ação</mn>
                </mfrac>
                <mo> = </mo> 
                <mn> Transição </mn>
            </math>
        </div>
    </div>
</p>

<p>
 Podemos utilizar um diagrama ou uma tabela para representar os testes de transição de estado, ele representa uma sequência de eventos, que pode resultar em uma sequência de alterações. Um caso de teste pode abranger várias transições entre estados.

 <ul>
    <li>
        <span>
            <b>Diagrama de Transição de Estado:</b> Mostra apenas as transições válidas em forma de diagrama.
        </span>
        <!-- TODO Corrigir src -->
        <div class="text-center">
            <img class="img-fluid" src="/feroline.qa-bentevi/assets/images/diagrama-de-estado-explicacao.png">
        </div>
    </li>
    <li>
        <span>
            <b>Tabela de Transição de Estado:</b> Baseada no Diagrama mostra as transições válidas e inválidas em forma de tabela. 
        </span>
        <table class="table table-sm table-bordered">
            <thead>
                <tr>
                <th scope="col"></th>
                <th scope="col">Evento 1</th>
                <th scope="col">Evento 2</th>
                </tr>
            </thead>
            <tbody>
                <tr class="flex-row">
                <th scope="row">Estado 1</th>
                <td>Resultado 1.1</td>
                <td>Resultado 1.2</td>
                </tr>
                <tr>
                <th scope="row">Estado 2</th>
                <td>Resultado 2.1</td>
                <td>Resultado 2.2</td>
                </tr>
            </tbody>
        </table>
        <span>
            <b>Coluna:</b> Eventos e Condição de Proteção (se existir);
            <br>
            <b>Linha:</b> Estados;
            <br> 
            <b>Célula:</b> transição, estado de destino e ações resultantes; 
        </span>
    </li>
 </ul>
</p>

<p>
    <span>
    <b>Exemplo:</b> Uma lâmpada que evolui entre os estados “acesa” e “apagada”, conforme se liga e desliga um interruptor. "N/A" ou "Não se Aplica", representa os estados inválidos.</span>
    <br>
    No Diagrama:
          <!-- TODO Corrigir src -->
        <div class="text-center">
            <img class="img-fluid" src="/feroline.qa-bentevi/assets/images/diagrama-de-estado-exemplo.png">
        </div>
    <br>
    Na Tabela:
    <table class="table table-sm table-bordered">
        <thead>
            <tr>
            <th scope="col"></th>
            <th scope="col">Desligar</th>
            <th scope="col">Ligar</th>
            </tr>
        </thead>
        <tbody>
            <tr class="flex-row">
                <th scope="row">Desligada</th>
                <td>N/A</td>
                <td>Ligada</td>
            </tr>
            <tr>
                <th scope="row">Ligada</th>
                <td>Desligada</td>
                <td>N/A</td>
            </tr>
        </tbody>
    </table>
</p>

<p>
    A cobertura pode ser abordada de diferentes formas, aqui iremos falar de três, são elas:
    <ul>
        <li>
            <span>
                <b>Cobertura de todos os estados:</b> Os itens de cobertura são os estados. Para garantir 100% de cobertura, todos os estados devem ser visitados. A fórmula é:
            </span>
            <br>
            <div class="d-flex flex-lg-row flex-md-row flex-sm-column justify-content-center">
                <div class="p-1">
                    <math>
                        <mfrac>
                            <mrow>
                                <mn> Nº Estados Visitados </mn>
                            </mrow>
                            <mn>Nº Total de Estados</mn>
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
                            <mn>Nº Total de Estados</mn>
                        </mfrac>
                        <mo> = </mo> 
                        <mn> C% </mn>
                    </math>
                </div>
            </div>
            <br>
        </li>
        <li>
            <span>
                <b>Cobertura de transições válidas (0-switch):</b> Os itens de cobertura são todas as transições válidas. Para garantir 100% de cobertura, todas as transições válidas devem ser executadas. A fórmula é: 
            </span>
            <br>
            <br>
            <div class="d-flex flex-lg-row flex-md-row flex-sm-column justify-content-center">
                <div class="p-1">
                    <math>
                        <mfrac>
                            <mrow>
                                <mn> Nº Transições Válidas Executadas</mn>
                            </mrow>
                            <mn>Nº Total Transições Válidas</mn>
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
                            <mn>Nº Total Transições Válidas</mn>
                        </mfrac>
                        <mo> = </mo> 
                        <mn> C% </mn>
                    </math>
                </div>
            </div>
            <br>
        </li>
        <li>
            <span>
                <b>Cobertura de todas as transições:</b> Os itens de cobertura são todas as transições (válidas e inválidas), mostradas em uma tabela de estado. Para garantir 100% da cobertura, todas as transições devem ser executadas.A fórmula é:
            </span>
            <br>
            <br>
            <div class="d-flex flex-lg-row flex-md-row flex-sm-column justify-content-center">
                <div class="p-1">
                    <math>
                        <mfrac>
                            <mrow>
                                <mn> Nº Transições Executadas</mn>
                            </mrow>
                            <mn>Nº Total Transições</mn>
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
                            <mn>Nº Total Transições</mn>
                        </mfrac>
                        <mo> = </mo> 
                        <mn> C% </mn>
                    </math>
                </div>
            </div>
        </li>
    </ul>
    
    <br>
    <span>
        A cobertura mais abrangente é a cobertura de todos as transições, logo em seguida a de transições válidas, após ela a de todos os estados. Isso se deve ao fato de que alguns estados podem ser alcançados sem necessariamente executar todas as transições, e ao executar todas as transições, tanto válidas quanto as inválidas, posso evitar o mascaramento de falhas.
    </span>
</p>
