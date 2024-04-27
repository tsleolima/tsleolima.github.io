let dictionary = {
    us: {
        About: "About Me",
        hi: "Hi,",
        bio: "Hi, my name is Leonardo Lima, nice to meet you! I'm an aspiring data scientist and musician! I currently work as a data scientist, but I also have experience as a web and mobile developer. This portfolio was developed using ReactJS and can be found on my github. Here you will find everything I'm working on, both personal projects and open source. Make yourself at home, Thank you!",
        projects: "PROJECTS",
        tech: "SKILLS",
        more: "MAIS: SCIKIT-LEARN, MATPLOTLIB, SEABORN, PYTEST.",
        experiences: [
            {
                description: `Participation in a project to identify legislative matters of interest to the bank, involving data scraping from the Chamber and Senate websites, data exploration, modeling, implementation, and iterative validation. 
      
                Development of RAG (Retrieval Augmented Generation) using databases of parliamentarians with Llama index to create indexed databases and prompts that seek information more effectively. Participation in a project using RAG (Retrieval Augmented Generation) with multiple agents, the purpose being to respond to client requests using the most suitable agent. 
                
                Creation of various APIs with FastAPI, monitoring in Argo, and deployment in production.`,
                name: "Machine Learning Engineer",
                detail: "Banco do Brasil · Full Time",
                keywords: [
                    "Python", 
                    "Sklearn", 
                    "FastAPI", 
                    "NLP", 
                    "Llama Index", 
                    "GPT", 
                    "Jenkins",
                    "Argo",
                    "PowerShift",
                  ],
                date: "04.2023 - present",
            },
            {
                description: `A partnership project with DELL EMC focused on data science using NLP, the project aims to analyze chats related to sales in order to find some factor that can boost them.`,
                name: "Machine Learning Researcher",
                details: "Dell EMC · Full Time",
                keywords: [
                  "Python", 
                  "C#", 
                  "Sklearn", 
                  "Hugging face", 
                  "Fastai",
                  "NLP",
                  "GIT & Pipeline deployment",
                  "Numpy",
                  "Matplotlib",
                  "TensorFlow/Keras",
                  "PyTorch",
                  "GPT",
                  "Llama",
                  "Llama Index",
                  "LangChain",
                ],
                date: "07.2020 - present",
            }
        ]
    },
    br: {
        About: "Sobre Mim",
        hi: "Olá,",
        bio: "Sou Leonardo Lima, me formei em Ciência da Computação pela UFCG em 2021 e desde então atuo como Cientista de Dados, também possuindo experiência como desenvolvedor web e mobile. Realizei pesquisa na área de Machine Learning pelo projeto LSD/UFCG desde 2020, tendo como empresa parceira a Dell. Além disso, também prestei serviços ao Banco do Brasil por meio da CapGemini, aprofundando os conhecimentos em Machine Learning e Back-End.",
        projects: "PROJETOS",
        tech: "TECNOLOGIAS",
        more: "MAIS: SCIKIT-LEARN, MATPLOTLIB, SEABORN, PYTEST.",
        experiences: [
            {
                description: `Participação em um projeto para identificar questões legislativas de interesse para o banco, envolvendo raspagem de dados dos sites da Câmara e do Senado, exploração de dados, modelagem, implementação e validação iterativa.

                Desenvolvimento de RAG (Geração Aumentada por Recuperação) usando bancos de dados de parlamentares com índice Llama para criar bancos de dados indexados e prompts que buscam informações de forma mais eficaz. Participação em um projeto usando RAG (Geração Aumentada por Recuperação) com múltiplos agentes, sendo o objetivo responder às solicitações dos clientes usando o agente mais adequado.
                
                Criação de diversas APIs com FastAPI, monitoramento no Argo e implantação em produção.`,
                name: "Engenheiro de Aprendizado de Máquina",
                details: "Banco do Brasil · Tempo integral",
                keywords: [
                    "Python", 
                    "Sklearn", 
                    "FastAPI", 
                    "NLP", 
                    "Llama Index", 
                    "GPT", 
                    "Jenkins",
                    "Argo",
                    "PowerShift",
                  ],
                date: "04.2023 - Atual",
            },
            {
                description: `Um projeto de parceria com a DELL EMC focado em ciência de dados usando PLN, o projeto visa analisar conversas relacionadas a vendas para encontrar algum fator que possa impulsioná-las.`,
                name: "Engenheiro de Aprendizado de Máquina",
                details: "Dell EMC · Tempo integral",
                keywords: [
                  "Python", 
                  "C#", 
                  "Sklearn", 
                  "Hugging face", 
                  "Fastai",
                  "NLP",
                  "GIT & Pipeline deployment",
                  "Numpy",
                  "Matplotlib",
                  "TensorFlow/Keras",
                  "PyTorch",
                  "GPT",
                  "Llama",
                  "Llama Index",
                  "LangChain",
                ],
                date: "07.2020 - Atual",
            }
        ]
    }
}

export { dictionary };