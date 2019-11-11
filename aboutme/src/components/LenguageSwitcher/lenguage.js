const language = [
    // Português
    {   
        "menu": {
            "item1": "Quem sou eu",
            "item2": "Publicações",
            "item3": "Experiência",
            "item4": "Educação",
            "item5": "Habilidades",
            "item6": "Portfolio",
        },
        "section1":{
            "title": "QUEM SOU EU?",
            "paragraph1": "Oi, sou o Rian. Sou desenvolvedor web nascido e criado no Rio de Janeiro. E também já morei na Alemanha, sabia? Durante um ano como bolsista do DAAD e CAPES eu estudei alemão, informática na Ulm Universität e até fui estagiário em uma grande empresa alemã de tecnologia.",        
            "paragraph2": "Bom, eu sou um entusiasta quando o assunto é criar novas soluções e muito otimista. Amo a computação e sonho em fazer a diferença e ajudar as pessoas utilizando meu conhecimento. Atualmente, estou focado no estudo das tecnologias do ecossistema JavaScript.",
            "phrase": '"E pensar diferente é a unica coisa em nós que acredito que deve permanecer sempre a mesma."',
            "followme": "Você pode me encontrar nas redes sociais abaixo."
        },
        "section2": {
            "title": "POSTS NA WEB",
            "description": "Aqui você encontra conteúdos aleatórios interessantes ou não, sobre tecnologia ou não, produzidos por lazer e com muito carinho por mim :) ",
            "button": "Leia Mais",
            "pub1": {
                "pubTitle": "Matéria no Techtudo sobre o RM Mini 3",
                "pubText": "O RM Mini 3 é um minicontrolador infravermelho da fabricante chinesa Broadlink, focada em soluções de casa inteligente. O modelo promete ser uma solução barata para quem busca automação residencial...",
                "url": "https://www.techtudo.com.br/noticias/2019/06/broadlink-rm-mini-3-vale-a-pena-conheca-aparelho-para-deixar-a-casa-smart.ghtml"
            },
            "pub2": {
                "pubTitle": "Viagem com minha família, Corsica, França 2016",
                "pubText": "Em 2016 enquanto morava na Alemanha viajei com minha família de carro da Alemanha até Corsica, uma ilha francesa, e lá acampamos em diversos pontos. Foi uma viagem maravilhosa e fiz questão de registrar...",
                "url": "https://www.youtube.com/watch?v=zoNSb307Ub0"
            },
            "pub3": {
                "pubTitle": "Matéria no Techtudo sobre a lâmpada com câmera espiã",
                "pubText": "A lâmpada com câmera espiã Yoosee é um produto que oferece vigilância de forma discreta. Com o formato e funcionalidades de uma lâmpada LED tradicional, o dispositivo se destaca pelos recursos nada convencionais...",
                "url": "https://www.techtudo.com.br/listas/2019/07/lampada-com-camera-espia-vale-a-pena-veja-pros-e-contras-do-aparelho.ghtml"
            }
        },
        "section3": {
            "title": "EXPERIÊNCIA",
            "job1": {
                "time":"12.2018 - Hoje",
                "details":"Hoje como desenvolver web atuo principalmente como Front-end. Participei da entrega de um novo portal chamado Beauty Tudo (revistamarieclaire.globo.com/Beauty-Tudo), do novo site Marie Claire e no momento faço parte do time responsável pelo fluxo de pagamento do cliente, vitrine de ofertas, entre outras funcionalidades de todos os produtos da Editora Globo. Em diversos momentos atuo também na geração de soluções para processos e sistemas internos. As tecnologias que trabalho principalmente são ReactJs e NodeJs",
                "location":"Rio de Janeiro, Brasil"
            },
            "job2": {
                "time":"06.2017 - 12.2018",
                "details":'Como estagiário da equipe denominada "Efficiency Team", atuei principalmente como fullstack de aplicações web para uso interno de equipes do Brasil, Atlanta e Canadá. Lá Trabalhei principalmente com VueJs e NodeJs',
                "location":"Rio de Janeiro, Brasil"            
            },
            "job3": {
                "time":"02.2017 - 06.2017",
                "details":"Como estagiário na central de comunicações dos maiores portais de notícias do Brasil, atuei principalmente como fullstack dos portais O Globo (oglobo.globo.com) e Extra (extra.com.br)",
                "location":"Rio de Janeiro, Brasil"            
            },
            "job4": {
                "time":"03.2018 - 07.2016",
                "details":"Atuei como estagiário na manutenção do software de gerenciamento interno, tester de novas funcionalidades e na otimização de processos internos",
                "location":"Boxberg, Alemanha"           
            }
        },
        "section4": {
            "title": "EDUCAÇÃO"
        },
        "section5": {
            "title": "HABILIDADES",
            "skill1": {
                "skill": "Javascript",
                "level": "hardcore",
                "label": "Avançado"
            },
            "skill2": {
                "skill": "React",
                "level": "hardcore",
                "label": "Avançado"
            },
            "skill3": {
                "skill": "Node.js",
                "level": "medium",
                "label": "Intermediário"
            },
            "skill4": {
                "skill": "Python",
                "level": "basic",
                "label": "Iniciante"
            },
            "skill5": {
                "skill": "NoSQL",
                "level": "hardcore",
                "label": "Avançado"
            }
        },
        "section6": {
            "title": "PORTFÓLIO",
            "portfolio1": {
                "title": "Rodobravo Tranportes",
                "text": "A Rodobravo estava em processo de reformulação de seus negócios e me confiou a tarefa de criar uma nova apresentação da empresa ao mercado e seus clientes. Este projeto trouxe um embasamento visual focado na identidade do cliente e no que há de novo no mundo do desenvolvimento web para proporcionar a melhor experiência possível aos usuários, tornando assim a comunicação da empresa clara e assertiva com seus clientes.",
                "url": "https://github.com/RianTavares/rodobravotransportes",
                "button": "Veja no Github",
                "fotoOrder": "1",
                "textOrder": "2"
            },
            "portfolio2": {
                "title": "Marvel Catalog",
                "text": "Este projeto nasceu com intuito de estudo e treinamento e foi desenvolvido em ReactJS no front-end e NodeJs no back-end. Ele consiste em uma página web que lista revistas em quadrinhos (comics) da Marvel e para tal utilizamos uma api da Marvel para desenvolvedores. Com auxílio de meu colega de profissão Márcio Sardou, desenvolvemos funcionalidades como paginação para visualizar mais itens, busca pelo nome desejado e também maiores detalhes sobre qualquer comic da página.",
                "url": "https://github.com/RianTavares/marvel-catalog",
                "button": "Veja no Github",
                "fotoOrder": "2",
                "textOrder": "1"
            },
            "portfolio3": {
                "title": "About Me",
                "text": "Esse projeto surgiu de um grande desejo meu de criar um currículo web onde eu possa descrever melhor meus trabalhos e projetos pessoais, agrupar as informações sobre mim, postar conteúdos legais que tenho grande prazer em criar como os posts sobre tecnologia e vídeos que produzo, disponibilizar meus contatos e quem sabe conhecer mais amantes de tecnologia e desenvolver grandes projetos em parceria.",
                "url": "https://github.com/RianTavares/riantavares.github.io",
                "button": "Veja no Github",
                "fotoOrder": "1",
                "textOrder": "2"
            }
        },
        "footer": {
            "textStart": "Desenvolvido com",
            "textEnd": "por mim"
        }
               
        
    },
    // English
    {   
        "menu": {
            "item1": "Quem sou eu",
            "item2": "Publicações",
            "item3": "Experiência",
            "item4": "Educação",
            "item5": "Habilidades",
            "item6": "Portfolio",
        },
        "section1":{
            "title": "QUEM SOU EU?",
            "paragraph1": "Oi, sou o Rian. Sou desenvolvedor web nascido e criado no Rio de Janeiro. E também já morei na Alemanha, sabia? Durante um ano como bolsista do DAAD e CAPES eu estudei alemão, informática na Ulm Universität e até fui estagiário em uma grande empresa alemã de tecnologia.",        
            "paragraph2": "Bom, eu sou um entusiasta quando o assunto é criar novas soluções e muito otimista. Amo a computação e sonho em fazer a diferença e ajudar as pessoas utilizando meu conhecimento. Atualmente, estou focado no estudo das tecnologias do ecossistema JavaScript.",
            "phrase": '"E pensar diferente é a unica coisa em nós que acredito que deve permanecer sempre a mesma."',
            "followme": "Você pode me encontrar nas redes sociais abaixo."
        },
        "section2": {
            "title": "POSTS NA WEB",
            "description": "Aqui você encontra conteúdos aleatórios interessantes ou não, sobre tecnologia ou não, produzidos por lazer e com muito carinho por mim :) ",
            "button": "Leia Mais",
            "pub1": {
                "pubTitle": "Matéria no Techtudo sobre o RM Mini 3",
                "pubText": "O RM Mini 3 é um minicontrolador infravermelho da fabricante chinesa Broadlink, focada em soluções de casa inteligente. O modelo promete ser uma solução barata para quem busca automação residencial...",
                "url": "https://www.techtudo.com.br/noticias/2019/06/broadlink-rm-mini-3-vale-a-pena-conheca-aparelho-para-deixar-a-casa-smart.ghtml"
            },
            "pub2": {
                "pubTitle": "Viagem com minha família, Corsica, França 2016",
                "pubText": "Em 2016 enquanto morava na Alemanha viajei com minha família de carro da Alemanha até Corsica, uma ilha francesa, e lá acampamos em diversos pontos. Foi uma viagem maravilhosa e fiz questão de registrar...",
                "url": "https://www.youtube.com/watch?v=zoNSb307Ub0"
            },
            "pub3": {
                "pubTitle": "Matéria no Techtudo sobre a lâmpada com câmera espiã",
                "pubText": "A lâmpada com câmera espiã Yoosee é um produto que oferece vigilância de forma discreta. Com o formato e funcionalidades de uma lâmpada LED tradicional, o dispositivo se destaca pelos recursos nada convencionais...",
                "url": "https://www.techtudo.com.br/listas/2019/07/lampada-com-camera-espia-vale-a-pena-veja-pros-e-contras-do-aparelho.ghtml"
            }
        },
        "section3": {
            "title": "EXPERIÊNCIA",
            "job1": {
                "time":"12.2018 - Hoje",
                "details":"Hoje como desenvolver web atuo principalmente como Front-end tanto na entrega de novos portais como o Beauty Tudo, fluxo de pagamento do cliente, vitrine de ofertas, como também na geração de soluções para processos e sistemas internos.",
                "location":"Rio de Janeiro, Brasil"
            },
            "job2": {
                "time":"06.2017 - 12.2018",
                "details":'Como estagiário da equipe denominada "Efficiency Team", atuei principalmente como fullstack de aplicações web para uso interno de equipes do Brasil, Atlanta e Canadá.',
                "location":"Rio de Janeiro, Brasil"            
            },
            "job3": {
                "time":"02.2017 - 06.2017",
                "details":"Como estagiário na central de comunicações dos maiores portais de notícias do Brasil, atuei principalmente como fullstack dos portais O Globo e Extra.",
                "location":"Rio de Janeiro, Brasil"            
            },
            "job4": {
                "time":"03.2018 - 07.2016",
                "details":"Atuei como estagiário na manutenção do software de gerenciamento interno, tester de novas funcionalidades e na otimização de processos internos.",
                "location":"Boxberg, Alemanha"           
            }
        },
        "section4": {
            "title": "EDUCAÇÃO"
        },
        "section5": {
            "title": "HABILIDADES",
            "skill1": {
                "skill": "Javascript",
                "level": "hardcore",
                "label": "Avançado"
            },
            "skill2": {
                "skill": "React",
                "level": "hardcore",
                "label": "Avançado"
            },
            "skill3": {
                "skill": "Node.js",
                "level": "medium",
                "label": "Intermediário"
            },
            "skill4": {
                "skill": "Python",
                "level": "basic",
                "label": "Iniciante"
            },
            "skill5": {
                "skill": "NoSQL",
                "level": "hardcore",
                "label": "Avançado"
            }
        },
        "section6": {
            "title": "PORTFÓLIO",
            "portfolio1": {
                "title": "Rodobravo Tranportes",
                "text": "A Rodobravo estava em processo de reformulação de seus negócios e me confiou a tarefa de criar uma nova apresentação da empresa ao mercado e seus clientes. Este projeto trouxe um embasamento visual focado na identidade do cliente e no que há de novo no mundo do desenvolvimento web para proporcionar a melhor experiência possível aos usuários, tornando assim a comunicação da empresa clara e assertiva com seus clientes.",
                "url": "https://github.com/RianTavares/riantavares.github.io",
                "button": "Veja no Github",
                "fotoOrder": "1",
                "textOrder": "2"
            },
            "portfolio2": {
                "title": "Marvel Catalog",
                "text": "Este projeto nasceu com intuito de estudo e treinamento e está sendo desenvolvido em ReactJS no front-end e NodeJs no back-end, e também consumindo dados de uma api da Marvel para desenvolvedores. Com auxílio de meu colega de profissão Márcio Sardou, estamos desenvolvendo uma página de HQ's da Marvel, onde o usuário possa paginar para visualizar mais itens, buscar pelo nome desejado e também ler maiores detalhes sobre qualquer HQ da página.",
                "url": "https://github.com/RianTavares/riantavares.github.io",
                "button": "Veja no Github",
                "fotoOrder": "2",
                "textOrder": "1"
            },
            "portfolio3": {
                "title": "About Me",
                "text": "Esse é o nome de batismo deste projeto. Ele surgiu de um grande desejo meu de criar um currículo web onde eu possa descrever melhor meus trabalhos e projetos pessoais, agrupar as informações sobre mim, postar conteúdos legais que tenho grande prazer em criar como os posts sobre tecnologia e vídeos que produzo e também o mais legal, disponibilizar tudo isso nas línguas que mais tenho domínio que são o português, que é minha língua materna, o inglês e o alemão.",
                "url": "https://github.com/RianTavares/riantavares.github.io",
                "button": "Veja no Github",
                "fotoOrder": "1",
                "textOrder": "2"
            }
        },
        "footer": {
            "textStart": "Desenvolvido com",
            "textEnd": "por mim"
        }
               
        
    },
    // Deutsch
    {   
        "menu": {
            "item1": "Quem sou eu",
            "item2": "Publicações",
            "item3": "Experiência",
            "item4": "Educação",
            "item5": "Habilidades",
            "item6": "Portfolio",
        },
        "section1":{
            "title": "QUEM SOU EU?",
            "paragraph1": "Oi, sou o Rian. Sou desenvolvedor web nascido e criado no Rio de Janeiro. E também já morei na Alemanha, sabia? Durante um ano como bolsista do DAAD e CAPES eu estudei alemão, informática na Ulm Universität e até fui estagiário em uma grande empresa alemã de tecnologia.",        
            "paragraph2": "Bom, eu sou um entusiasta quando o assunto é criar novas soluções e muito otimista. Amo a computação e sonho em fazer a diferença e ajudar as pessoas utilizando meu conhecimento. Atualmente, estou focado no estudo das tecnologias do ecossistema JavaScript.",
            "phrase": '"E pensar diferente é a unica coisa em nós que acredito que deve permanecer sempre a mesma."',
            "followme": "Você pode me encontrar nas redes sociais abaixo."
        },
        "section2": {
            "title": "POSTS NA WEB",
            "description": "Aqui você encontra conteúdos aleatórios interessantes ou não, sobre tecnologia ou não, produzidos por lazer e com muito carinho por mim :) ",
            "button": "Leia Mais",
            "pub1": {
                "pubTitle": "Matéria no Techtudo sobre o RM Mini 3",
                "pubText": "O RM Mini 3 é um minicontrolador infravermelho da fabricante chinesa Broadlink, focada em soluções de casa inteligente. O modelo promete ser uma solução barata para quem busca automação residencial...",
                "url": "https://www.techtudo.com.br/noticias/2019/06/broadlink-rm-mini-3-vale-a-pena-conheca-aparelho-para-deixar-a-casa-smart.ghtml"
            },
            "pub2": {
                "pubTitle": "Viagem com minha família, Corsica, França 2016",
                "pubText": "Em 2016 enquanto morava na Alemanha viajei com minha família de carro da Alemanha até Corsica, uma ilha francesa, e lá acampamos em diversos pontos. Foi uma viagem maravilhosa e fiz questão de registrar...",
                "url": "https://www.youtube.com/watch?v=zoNSb307Ub0"
            },
            "pub3": {
                "pubTitle": "Matéria no Techtudo sobre a lâmpada com câmera espiã",
                "pubText": "A lâmpada com câmera espiã Yoosee é um produto que oferece vigilância de forma discreta. Com o formato e funcionalidades de uma lâmpada LED tradicional, o dispositivo se destaca pelos recursos nada convencionais...",
                "url": "https://www.techtudo.com.br/listas/2019/07/lampada-com-camera-espia-vale-a-pena-veja-pros-e-contras-do-aparelho.ghtml"
            }
        },
        "section3": {
            "title": "EXPERIÊNCIA",
            "job1": {
                "time":"12.2018 - Hoje",
                "details":"Hoje como desenvolver web atuo principalmente como Front-end tanto na entrega de novos portais como o Beauty Tudo, fluxo de pagamento do cliente, vitrine de ofertas, como também na geração de soluções para processos e sistemas internos.",
                "location":"Rio de Janeiro, Brasil"
            },
            "job2": {
                "time":"06.2017 - 12.2018",
                "details":'Como estagiário da equipe denominada "Efficiency Team", atuei principalmente como fullstack de aplicações web para uso interno de equipes do Brasil, Atlanta e Canadá.',
                "location":"Rio de Janeiro, Brasil"            
            },
            "job3": {
                "time":"02.2017 - 06.2017",
                "details":"Como estagiário na central de comunicações dos maiores portais de notícias do Brasil, atuei principalmente como fullstack dos portais O Globo e Extra.",
                "location":"Rio de Janeiro, Brasil"            
            },
            "job4": {
                "time":"03.2018 - 07.2016",
                "details":"Atuei como estagiário na manutenção do software de gerenciamento interno, tester de novas funcionalidades e na otimização de processos internos.",
                "location":"Boxberg, Alemanha"           
            }
        },
        "section4": {
            "title": "EDUCAÇÃO"
        },
        "section5": {
            "title": "HABILIDADES",
            "skill1": {
                "skill": "Javascript",
                "level": "hardcore",
                "label": "Avançado"
            },
            "skill2": {
                "skill": "React",
                "level": "hardcore",
                "label": "Avançado"
            },
            "skill3": {
                "skill": "Node.js",
                "level": "medium",
                "label": "Intermediário"
            },
            "skill4": {
                "skill": "Python",
                "level": "basic",
                "label": "Iniciante"
            },
            "skill5": {
                "skill": "NoSQL",
                "level": "hardcore",
                "label": "Avançado"
            }
        },
        "section6": {
            "title": "PORTFÓLIO",
            "portfolio1": {
                "title": "Rodobravo Tranportes",
                "text": "A Rodobravo estava em processo de reformulação de seus negócios e me confiou a tarefa de criar uma nova apresentação da empresa ao mercado e seus clientes. Este projeto trouxe um embasamento visual focado na identidade do cliente e no que há de novo no mundo do desenvolvimento web para proporcionar a melhor experiência possível aos usuários, tornando assim a comunicação da empresa clara e assertiva com seus clientes.",
                "url": "https://github.com/RianTavares/riantavares.github.io",
                "button": "Veja no Github",
                "fotoOrder": "1",
                "textOrder": "2"
            },
            "portfolio2": {
                "title": "Marvel Catalog",
                "text": "Este projeto nasceu com intuito de estudo e treinamento e está sendo desenvolvido em ReactJS no front-end e NodeJs no back-end, e também consumindo dados de uma api da Marvel para desenvolvedores. Com auxílio de meu colega de profissão Márcio Sardou, estamos desenvolvendo uma página de HQ's da Marvel, onde o usuário possa paginar para visualizar mais itens, buscar pelo nome desejado e também ler maiores detalhes sobre qualquer HQ da página.",
                "url": "https://github.com/RianTavares/riantavares.github.io",
                "button": "Veja no Github",
                "fotoOrder": "2",
                "textOrder": "1"
            },
            "portfolio3": {
                "title": "About Me",
                "text": "Esse é o nome de batismo deste projeto. Ele surgiu de um grande desejo meu de criar um currículo web onde eu possa descrever melhor meus trabalhos e projetos pessoais, agrupar as informações sobre mim, postar conteúdos legais que tenho grande prazer em criar como os posts sobre tecnologia e vídeos que produzo e também o mais legal, disponibilizar tudo isso nas línguas que mais tenho domínio que são o português, que é minha língua materna, o inglês e o alemão.",
                "url": "https://github.com/RianTavares/riantavares.github.io",
                "button": "Veja no Github",
                "fotoOrder": "1",
                "textOrder": "2"
            }
        },
        "footer": {
            "textStart": "Desenvolvido com",
            "textEnd": "por mim"
        }
               
        
    }
]
export default language;