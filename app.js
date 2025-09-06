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