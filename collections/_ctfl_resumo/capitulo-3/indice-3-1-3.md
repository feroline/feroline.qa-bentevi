---
capitulo: 3
indice: 3.1.3
order: 4
subcapitulo: true
title: Diferenças entre testes estáticos e testes dinâmicos
---

<p>
    Os testes dinâmicos e estáticos se complementam e visam detectar defeitos e avaliar a qualidade em produtos de trabalho. Mas suas difenças são:
</p>

<b>Testes Estáticos:</b>

<ul>
    <li>Há tipos de defeitos que só podem ser encontrados por testes estáticos, como código inacessível, padrões de projeto, defeitos em produtos de trabalho não executáveis.</li>
    <li>Encontra defeitos diretamente no produto de trabalho.</li>
    <li>É aplicado em produtos de trabalho que podem ou não ser executados.</li>
    <li>Encontra defeitos que podem nunca ser executados.</li>
    <li>Mede características de qualidade que não dependem da execução do código. Ex.: Capacidade de manutenção.</li>
</ul>

<b>Testes Dinâmicos:</b>

<ul>
    <li>Há tipos de defeitos que só podem ser encontrados por testes dinâmicos.</li>
    <li>O defeito será identificado apenas após uma análise da causa da falha provocada durante a execução do software.</li>
    <li>Só é aplicado a produtos de trabalho que podem ser executados.</li>
    <li>Mede características de qualidade que dependem da execução do código. Ex.: Eficiência de performance.</li>
</ul>

<b>Defeitos típicos dos testes estáticos: </b>

<ul>
    <li>Defeitos nos requisitos (incosistências, contradições, etc).</li>
    <li>Defeitos de projeto (estrutura de banco de dados, etc). </li>
    <li>Defeitos de codificação (variáveis não declaradas, código duplicado, etc).</li>
    <li>Desvios dos padrões (padrões de condificação, projeto, etc).</li>
    <li>Especificação incorreta da interface (número, tipo, ordem de parâmetros).</li>
    <li>Vulnerabilidade de segurança (estouro de buffer). </li>
    <li>Lacunas na cobertura da base de testes (testes ausentes para um critério de aceite, etc).</li>
</ul>
