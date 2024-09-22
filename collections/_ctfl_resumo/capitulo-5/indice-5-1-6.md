---
capitulo: 5
indice: 5.1.6
order: 8
subcapitulo: true
title: Pirâmide de Teste
---

<p>
  A Pirâmide de Teste é um modelo no qual mostra que os teste podem ter diferentes níveis de minuciosidade, apoia a equipe na automação de testes e na alocação de esforços, mostrando que diferentes objetivos são apoiados por diferentes níveis.
</p>

<p>
  <b>Camadas:</b> representa grupos de teste. Quanto mais alta a camada menor será a granulariadade (minuciosidade), o isolamento e o tempo de execução do teste.
</p>

<p>
  Os testes da <b>camada inferior</b> são pequenos, isolados, rápidos e verificam uma pequena parte da funcionalidade. Para grandes coberturas é necessário executar muitos deles.
</p>

<p>
  Os testes da <b>camada superior</b> são complexos, de alto nível, lentos e de ponta a ponta. Para grandes coberturas não é necessário executar muitos deles.
</p>

<p>
  O modelo original (Cohn-2009) tem as camadas: Teste de Unidade, Teste de Serviço e Teste de Interface do Usuário.
</p>

<p>
  O modelo popular tem as camadas: Teste de Unidade (componente), Teste de Integração (Integração de componentes) e Teste de Ponta a Ponta (E2E).  
</p>

<div class="text-center">
<!-- TODO: Verificar porque o liquid não funciona dentro do md, nem mesmo com markdownify . Então corrigir o link da imagem passando realive_url-->
    <img class="img-fluid" src="/feroline.qa-bentevi/assets/images/piramide-de-teste-popular.png">
</div>

<p>
  Imagine a pirâmide como uma montanha, quanto mais alto você subir na montanha maior será a cobertura de visão ao seu redor, entretanto a dificuldade vai se tornando cada vez maior a cada passo que dá para o pico de mais alto nível. Já no pé da montanha, a dificuldade e esfoço são menores, entretanto a cobertura de visão também é menor. 
</p>
