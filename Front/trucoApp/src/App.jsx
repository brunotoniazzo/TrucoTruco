import { useState, useEffect } from 'react';
import { criarBaralho, calcularForcaTruco } from './logic/trucoLogic';
import './App.css';
import './Login.css';
import './Lobby.css';
import './Table.css';

export default function App() {
  const [user, setUser] = useState(null);
  const [view, setView] = useState('login');
  const [game, setGame] = useState({
    playerHand: [],
    botHand: [],
    amostra: null,
    playedCards: { player: null, bot: null },
    points: { player: 0, bot: 0 },
    turn: 'player', // 'player' ou 'bot'
    roundHistory: [] // Para saber quem ganhou a 1ª, 2ª e 3ª vasa
  });

  const iniciarPartida = () => {
    const baralho = criarBaralho();
    const pHand = baralho.splice(0, 3);
    const bHand = baralho.splice(0, 3);
    const amostraCard = baralho.splice(0, 1)[0];

    setGame({
      playerHand: pHand,
      botHand: bHand,
      amostra: amostraCard,
      playedCards: { player: null, bot: null },
      points: { player: 0, bot: 0 },
      turn: 'player',
      roundHistory: []
    });
    setView('table');
  };

  const jogarCarta = (index) => {
    if (game.playedCards.player || game.turn !== 'player') return;

    const carta = game.playerHand[index];
    const novaMao = [...game.playerHand];
    novaMao.splice(index, 1);

    setGame(prev => ({
      ...prev,
      playerHand: novaMao,
      playedCards: { ...prev.playedCards, player: carta },
      turn: 'bot'
    }));
  };

  // Efeito para a jogada do Bot
  useEffect(() => {
    if (game.turn === 'bot' && view === 'table') {
      const timer = setTimeout(() => {
        const indexMelhorCarta = 0; // IA Simplificada: joga a primeira disponível
        const cartaBot = game.botHand[indexMelhorCarta];
        const novaMaoBot = [...game.botHand];
        novaMaoBot.splice(indexMelhorCarta, 1);

        setGame(prev => ({
          ...prev,
          botHand: novaMaoBot,
          playedCards: { ...prev.playedCards, bot: cartaBot },
          turn: 'evaluating'
        }));
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [game.turn, view]);

  // Efeito para avaliar quem ganhou a vasa
  useEffect(() => {
    if (game.turn === 'evaluating') {
      const timer = setTimeout(() => {
        const fPlayer = calcularForcaTruco(game.playedCards.player, game.amostra);
        const fBot = calcularForcaTruco(game.playedCards.bot, game.amostra);

        let vencedorVasa = '';
        if (fPlayer > fBot) vencedorVasa = 'player';
        else if (fBot > fPlayer) vencedorVasa = 'bot';
        else vencedorVasa = 'empate';

        setGame(prev => ({
          ...prev,
          playedCards: { player: null, bot: null },
          roundHistory: [...prev.roundHistory, vencedorVasa],
          turn: vencedorVasa === 'bot' ? 'bot' : 'player'
        }));

        // Aqui depois entra a lógica de quem ganha a rodada (melhor de 3)
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [game.turn]);

  if (view === 'table') {
    return (
      <div className="game-table">
        <div className="opponent-area">
          {game.botHand.map((_, i) => (
            <div key={i} className="card back" />
          ))}
        </div>

        <div className="center-table">
          <div className="amostra-container">
            <p className="label-amostra">AMOSTRA</p>
            <div className="amostra-card">
              <span className="card-val">{game.amostra?.valor}</span>
              <span className="card-suit">{game.amostra?.naipe}</span>
            </div>
          </div>

          <div className="table-arena">
            {game.playedCards.bot && (
              <div className="card played bot-card">
                <span>{game.playedCards.bot.valor}</span>
                <span className="suit-mid">{game.playedCards.bot.naipe}</span>
              </div>
            )}

            {game.playedCards.player && (
              <div className="card played player-card">
                <span>{game.playedCards.player.valor}</span>
                <span className="suit-mid">{game.playedCards.player.naipe}</span>
              </div>
            )}
          </div>

          <div className="hud">
            <div className="score-board">
              <p>VOCÊ: {game.points.player}</p>
              <p>BOT: {game.points.bot}</p>
              <div className="vasas">
                {game.roundHistory.map((res, i) => (
                  <span key={i} className={`dot ${res}`}>{res === 'empate' ? 'P' : ''}</span>
                ))}
              </div>
            </div>
            <button className="badge btn-leave" onClick={() => setView('lobby')}>Abandonar</button>
          </div>
        </div>

        <div className="player-area">
          {game.playerHand.map((card, i) => (
            <div key={i} className="card" onClick={() => jogarCarta(i)}>
              <span>{card.valor}</span>
              <span className="suit-mid">{card.naipe}</span>
              <span className="val-rev">{card.valor}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Lógica de Lobby simplificada
  if (view === 'lobby') {
    return (
      <div className="truco-app">
        <div className="bg-image" />
        <header className="header">
          <div><p className="header-subtitle">Lobby</p><h1 className="header-title">{user?.name}</h1></div>
          <button onClick={() => setView('login')} className="badge">Sair</button>
        </header>
        <main className="main-lobby">
          <div className="lobby-card">
            <h2>MESA DE TREINO</h2>
            <button className="primary-btn" onClick={iniciarPartida}>Jogar contra Bot</button>
          </div>
        </main>
      </div>
    );
  }

  // Tela de Login
  return (
    <div className="truco-app">
      <div className="bg-image" />
      <main className="main" style={{ gridTemplateColumns: '1fr', padding: '100px' }}>
        <section className="right">
          <div className="login-card">
            <h3>Truco de Amostra</h3>
            <button className="primary-btn" onClick={() => { setUser({ name: 'Gaudério' }); setView('lobby'); }}>
              Entrar como Convidado
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}