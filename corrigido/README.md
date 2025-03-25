Refatoração e Qualidade em Desenvolvimento Web: Débito Técnico e Erros Comuns
Descrição do Projeto
Este projeto tem como objetivo a refatoração de um código legado, focando na melhoria da manutenção, escalabilidade, organização e sustentabilidade do código. A refatoração foi realizada com base em uma análise crítica de um código que apresenta diversos problemas de subsídio técnico e erros comuns. As soluções propostas abordam questões de código duplicado , uso excessivo de estilos inline , layout quebrado , acessibilidade , modularização do JavaScript , padrões de nomenclatura , entre outros.

Passos para Rodar o Projeto
Clone o repositório para o seu computador:

bater

Copiar

Editar
git clone https://github.com/seu-usuario/refatoracao-web.git
Abra o arquivo HTML no seu navegador para visualizar as páginas.

Problemas Encontrados e Soluções Propostas
1. Uso excessivo de estilos inline e internos
Problema : O código legado utilizava muitos estilos inline e internos, o que dificultava a manutenção e a reutilização do código. Solução : Aplique a regra de utilizar um arquivo CSS externo para centralizar a estilização, promovendo maior organização e modularidade.

2. Código Duplicado
Problema : O código continha funções repetidas, o que comprometia a manutenção e tornava o código mais difícil de modificar. Solução : Refatorei o código para remover duplicidades, criando funções reutilizáveis ​​e mais legíveis.

3. Layout Quebrado e Fora dos Padrões de UI/UX
Problema : O layout não segue boas práticas de UI/UX, o que resultou em uma experiência ruim para o usuário. Solução : Ajustei o layout, garantindo que o design estivesse mais alinhado aos padrões de boas práticas, como alinhamento adequado e espaçamento.

4. Falta de Boas Práticas de Acessibilidade
Problema : O código não segue boas práticas de acessibilidade, o que poderia dificultar a navegação para usuários com deficiência. Solução : Adicione atributos altnas imagens e utilize tags semânticas de HTML5 para melhorar a acessibilidade.

5. Código JavaScript Pouco Modular
Problema : O JavaScript não era modular, o que dificultava a manutenção e escalabilidade. Solução : Refatorei o JavaScript para torná-lo mais modular, dividindo o código em funções menores e mais específicas.

6. Sem Padrões de Nomenclaturas
Problema : O código não segue convenções de nomenclatura, o que tornava o entendimento do código mais difícil. Solução : Adote padrões consistentes de nomenclatura para variáveis, funções e arquivos, garantindo maior clareza e legibilidade.

7. Validações de JavaScript Não Funcionais
Problema : As validações feitas pelo JavaScript não funcionaram corretamente, causando erros na interação com o formulário. Solução : Corrigi as validações e melhorei a interação com os formulários, garantindo que as informações fossem validadas corretamente antes do envio.

O que será feito após a correção:
O código agora está mais limpo e modular, facilitando a manutenção futura.

Será realizada a validação de todas as funcionalidades, como validação de campos do formulário e remoção de usuários da lista.

Os testes serão realizados para garantir que todas as melhorias funcionem corretamente.


Conclusão
Este projeto busca aplicar boas práticas de Código Limpo e qualidade no desenvolvimento de software, tornando o código mais sustentável, modular e fácil de manter. Ao seguir os padrões de nomenclatura, modularização e boas práticas de UI/UX e acessibilidade, conseguimos melhorar significativamente a qualidade do sistema.