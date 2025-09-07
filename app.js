// Documentação: Configuração da biblioteca tsParticles para o nosso fundo animado.

// Documentação: Configuração da biblioteca tsParticles para o nosso fundo animado.

tsParticles.load("tsparticles", {
    // Preset para um efeito de fundo legal
    preset: "links",

    // Configurações do fundo
    background: {
        color: {
            value: "#121212" // A mesma cor escura do nosso body
        }
    },

    // Configurações das partículas
    particles: {
        // Cor das partículas
        color: {
            value: "#ffffff" // Partículas brancas
        },
        // Linhas que conectam as partículas
        links: {
            color: "#00aaff", // Linhas azuis, nossa cor de destaque
            distance: 150,
            enable: true,
            opacity: 0.4,
            width: 1
        },
        // Como as partículas se movem
        move: {
            direction: "none",
            enable: true,
            outModes: {
                default: "bounce" // Elas quicam nas bordas da tela
            },
            random: false,
            speed: 1, // Velocidade bem sutil
            straight: false
        },
        // Quantidade de partículas
        number: {
            density: {
                enable: true,
                area: 800
            },
            value: 80 // Um número bom para não poluir a tela
        },
        // Opacidade e tamanho das partículas
        opacity: {
            value: 0.5
        },
        shape: {
            type: "circle"
        },
        size: {
            value: { min: 1, max: 3 } // Tamanho variado para um look mais natural
        }
    },
    // Configurações para o mouse
    interactivity: {
        events: {
            onHover: {
                enable: true, // Habilita a interação ao passar o mouse
                mode: "repulse" // O modo de repulsão
            }
        },
        modes: {
            repulse: {
                distance: 100 // Distância que as partículas se afastam do mouse
            }
        }
    },
    // Desliga a detecção de retina para manter a performance
    detectRetina: false
});

// --- CÓDIGO PARA ENVIAR FORMULÁRIO PARA O WHATSAPP ---

// Documentação: Esta função será executada quando a página carregar.
document.addEventListener('DOMContentLoaded', function() {

    // 1. Seleciona o formulário pelo ID que definimos no HTML.
    const form = document.getElementById('form-whatsapp');

    // 2. Adiciona um "escutador" que espera pelo evento de "submit" (envio) do formulário.
    form.addEventListener('submit', function(event) {
        
        // 3. Previne o comportamento padrão do formulário, que seria recarregar a página.
        event.preventDefault();

        // 4. Seu número de WhatsApp já está configurado aqui!
        // Formato: 55 (Brasil) + 65 (seu DDD) + 998105455 (seu número).
        const numeroWhatsapp = "5565998105455";

        // 5. Pega os valores que o usuário digitou nos campos de nome e mensagem.
        const nome = document.getElementById('nome').value;
        const mensagem = document.getElementById('mensagem').value;

        // 6. Monta o texto da mensagem que será enviada.
        const textoMensagem = `Olá! Meu nome é ${nome}. Gostaria de falar sobre: ${mensagem}`;

        // 7. Codifica a mensagem para um formato que a URL do WhatsApp entenda (troca espaços por %20, etc.).
        const textoCodificado = encodeURIComponent(textoMensagem);

        // 8. Cria o link final para a API do WhatsApp.
        const urlWhatsapp = `https://wa.me/${numeroWhatsapp}?text=${textoCodificado}`;

        // 9. Abre o WhatsApp em uma nova aba com a mensagem pronta.
        window.open(urlWhatsapp, '_blank');
    });
});