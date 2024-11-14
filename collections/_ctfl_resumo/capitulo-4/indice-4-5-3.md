---
capitulo: 4
indice: 4.5.3
order: 19
subcapitulo: true
title: Desenvolvimento Orientado por Teste de Aceite (ATDD)
---

<p>É uma abordagem que prioriza os testes.</p>

<p>Os casos de teste são criados antes da implementação da história de usuário. Podem ser executados de forma manual ou automatizada. </p>

<p>
    As etapas são :
    <ol>
        <li>
            ª etapa: A história de usuário (se definida) e seus critérios de aceite são analisados, discutidos e escritos pelos membros da equipe. Lacunas, ambiguidades e defeitos são corrigidos nesta etapa. 
        </li>
        <li>
            ª etapa: Criação dos casos de teste, no qual são baseados nos critérios de aceite e podem ser visto como exemplo de como o software funciona. Ajudando a equipe a implementar corretamente a história de usuário.
        </li>
    </ol>
</p>

<p>
    Durante o projeto de teste, as técnicas de teste Caixa-preta, Caixa-branca e Baseada na Experiência podem ser utilizadas.
</p>

<p>
    No passo a passo, os primeiros casos de teste são positivos, confirmando o comportamento correto. Em seguida, a equipe deve realizar os testes negativos. Depois a equipe deve cobrir as características de qualidade não funcional.
    <div class="text-center">
        <!-- FIXME corrigir /feroline.qa-bentevi/ para usar relative_url -->
        <img class="img-fluid" src="/feroline.qa-bentevi/assets/images/atdd.png">
    </div>
</p>

<ul>
    <li>A linguagem utilizada normalmente é natural, para melhor compreensão dos stakeholders.</li>
    <li>Abrange todas as características das histórias de usuários, não indo além delas, mas podendo expor seus problemas.</li>
    <li>Dois casos de teste não devem descrever as mesmas características.</li>
    <li>Na automação os desenvolvedores escrevem o código de suporte a medida que implementam o recurso, tornando os testes requisitos executáveis.</li>
</ul>
