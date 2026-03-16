export default function App() {
  return (
    <>
      <div className="truco-app">
        <div className="bg-image" />
        <div className="glow glow-left" />
        <div className="glow glow-right" />

        <header className="header">
          <div>
            <p className="header-subtitle">Rio Grande do Sul • Interior</p>
            <h1 className="header-title">TRUCO ESPANHOL</h1>
          </div>

          <div className="header-badges">
            <span className="badge">Modo clássico</span>
            <span className="badge">Partidas sérias</span>
          </div>
        </header>

        <main className="main">
          <section className="left">
            <div className="left-content">
              <p className="pill">
                <span className="ping" />
                Mesa aberta para quem conhece o jogo de verdade
              </p>

              <h2 className="hero-title">
                ENTRE NA <span>MESA</span>
              </h2>

              <p className="hero-text">
                Um truco com identidade gaúcha, clima de interior e presença de
                mesa grande. Visual forte, jogadas rápidas e respeito à tradição
                do truco espanhol.
              </p>

              <div className="info-grid">
                <div className="info-card">
                  <p className="info-label">Estilo</p>
                  <p className="info-value">Sério</p>
                </div>

                <div className="info-card">
                  <p className="info-label">Ambiente</p>
                  <p className="info-value">Interiorano</p>
                </div>

                <div className="info-card">
                  <p className="info-label">Ritmo</p>
                  <p className="info-value">Dinâmico</p>
                </div>
              </div>
            </div>
          </section>

          <section className="right">
            <div className="login-wrapper">
              <div className="decor-card decor-left">
                <div className="card-number">1</div>
                <div className="card-center">ESP</div>
                <div className="card-suit">♠</div>
              </div>

              <div className="decor-card decor-right">
                <div className="card-number">7</div>
                <div className="card-center">OURO</div>
                <div className="card-suit">◆</div>
              </div>

              <div className="login-card">
                <div className="login-overlay" />

                <div className="login-content">
                  <div className="login-header">
                    <p className="login-subtitle">Acesso à mesa</p>
                    <h3>Iniciar sessão</h3>
                    <p className="login-description">
                      Entre com sua conta ou siga como convidado.
                    </p>
                  </div>

                  <form className="form">
                    <div className="field">
                      <label>Usuário</label>
                      <input type="text" placeholder="Digite seu usuário" />
                    </div>

                    <div className="field">
                      <label>Senha</label>
                      <input type="password" placeholder="Digite sua senha" />
                    </div>

                    <button type="button" className="primary-btn">
                      Entrar na mesa
                    </button>
                  </form>

                  <div className="divider">
                    <div />
                    <span>ou</span>
                    <div />
                  </div>

                  <button type="button" className="secondary-btn">
                    Entrar como guest
                  </button>

                  <p className="footer-text">
                    Ao entrar, você acessa um ambiente competitivo com identidade
                    visual inspirada no truco espanhol tradicional.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>

      <style>{`
        * {
          box-sizing: border-box;
        }

        html, body, #root {
          margin: 0;
          width: 100%;
          min-height: 100%;
          font-family: Arial, Helvetica, sans-serif;
        }

        body {
          background: #120303;
        }

        .truco-app {
          min-height: 100vh;
          color: #f4f4f5;
          overflow: hidden;
          position: relative;
          background: radial-gradient(circle at top, #4a120f 0%, #220706 45%, #120303 100%);
        }

        .bg-image {
          position: absolute;
          inset: 0;
          background-image: url("https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1600&auto=format&fit=crop");
          background-size: cover;
          background-position: center;
          opacity: 0.07;
        }

        .glow {
          position: absolute;
          border-radius: 999px;
          filter: blur(60px);
          animation: pulseGlow 4s ease-in-out infinite;
        }

        .glow-left {
          top: -80px;
          left: -80px;
          width: 280px;
          height: 280px;
          background: rgba(251, 191, 36, 0.10);
        }

        .glow-right {
          right: 0;
          bottom: 0;
          width: 360px;
          height: 360px;
          background: rgba(185, 28, 28, 0.18);
        }

        .header {
          position: relative;
          z-index: 2;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 24px 32px;
          border-bottom: 1px solid rgba(253, 230, 138, 0.10);
          backdrop-filter: blur(8px);
          background: rgba(0, 0, 0, 0.10);
        }

        .header-subtitle {
          margin: 0 0 6px;
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 0.35em;
          color: rgba(253, 230, 138, 0.7);
        }

        .header-title {
          margin: 0;
          font-size: 32px;
          font-weight: 900;
          letter-spacing: 0.04em;
          color: #fef3c7;
        }

        .header-badges {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }

        .badge {
          padding: 8px 14px;
          border-radius: 999px;
          border: 1px solid rgba(253, 230, 138, 0.18);
          background: rgba(255, 255, 255, 0.05);
          color: #d4d4d8;
          font-size: 14px;
        }

        .main {
          position: relative;
          z-index: 2;
          display: grid;
          grid-template-columns: 1fr 1fr;
          min-height: calc(100vh - 93px);
        }

        .left {
          display: flex;
          align-items: center;
          padding: 48px 56px;
        }

        .left-content {
          max-width: 620px;
        }

        .pill {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          padding: 12px 16px;
          border-radius: 999px;
          border: 1px solid rgba(253, 230, 138, 0.18);
          background: rgba(255, 251, 235, 0.05);
          color: rgba(254, 243, 199, 0.85);
          font-size: 14px;
          margin: 0 0 24px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.25);
        }

        .ping {
          width: 10px;
          height: 10px;
          border-radius: 999px;
          background: #fcd34d;
          animation: pingDot 1.4s infinite;
        }

        .hero-title {
          margin: 0;
          font-size: 76px;
          line-height: 0.95;
          font-weight: 900;
          letter-spacing: -0.03em;
        }

        .hero-title span {
          color: #fcd34d;
          text-shadow: 0 0 18px rgba(252, 211, 77, 0.25);
        }

        .hero-text {
          margin-top: 24px;
          font-size: 22px;
          line-height: 1.6;
          color: #d4d4d8;
        }

        .info-grid {
          margin-top: 40px;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
          max-width: 560px;
        }

        .info-card {
          border-radius: 22px;
          border: 1px solid rgba(255,255,255,0.10);
          background: rgba(255,255,255,0.05);
          padding: 18px;
          backdrop-filter: blur(8px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.25);
        }

        .info-label {
          margin: 0;
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          color: #a1a1aa;
        }

        .info-value {
          margin: 10px 0 0;
          font-weight: 700;
          color: #fef3c7;
          font-size: 18px;
        }

        .right {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 48px 32px;
        }

        .login-wrapper {
          position: relative;
          width: 100%;
          max-width: 460px;
        }

        .decor-card {
          position: absolute;
          width: 112px;
          height: 160px;
          border-radius: 22px;
          background: linear-gradient(to bottom, #f4f4f5, #d4d4d8);
          color: #18181b;
          border: 1px solid rgba(253,230,138,0.18);
          box-shadow: 0 20px 50px rgba(0,0,0,0.35);
          padding: 16px;
          display: none;
        }

        .decor-left {
          left: -34px;
          top: 36px;
          transform: rotate(-14deg);
          animation: floatCard 6s ease-in-out infinite;
        }

        .decor-right {
          right: -24px;
          bottom: 28px;
          transform: rotate(12deg);
          animation: floatCard 5s ease-in-out infinite;
        }

        .card-number {
          font-size: 14px;
          font-weight: 700;
        }

        .card-center {
          margin-top: 42px;
          text-align: center;
          font-size: 28px;
          font-weight: 900;
        }

        .card-suit {
          position: absolute;
          right: 16px;
          bottom: 12px;
          font-size: 20px;
          font-weight: 700;
        }

        .login-card {
          position: relative;
          overflow: hidden;
          border-radius: 28px;
          border: 1px solid rgba(254, 243, 199, 0.15);
          background: rgba(0, 0, 0, 0.35);
          backdrop-filter: blur(16px);
          box-shadow: 0 20px 80px rgba(0,0,0,0.45);
          padding: 32px;
        }

        .login-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom right, rgba(252,211,77,0.10), transparent, rgba(185,28,28,0.10));
        }

        .login-content {
          position: relative;
          z-index: 1;
        }

        .login-header {
          text-align: center;
          margin-bottom: 32px;
        }

        .login-subtitle {
          margin: 0;
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 0.3em;
          color: #a1a1aa;
        }

        .login-header h3 {
          margin: 12px 0 8px;
          font-size: 36px;
          font-weight: 900;
          color: #fffbeb;
        }

        .login-description {
          margin: 0;
          font-size: 14px;
          color: #a1a1aa;
        }

        .form {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .field label {
          display: block;
          margin-bottom: 8px;
          font-size: 14px;
          color: #d4d4d8;
        }

        .field input {
          width: 100%;
          border-radius: 18px;
          border: 1px solid rgba(255,255,255,0.10);
          background: rgba(255,255,255,0.05);
          padding: 14px 16px;
          color: #f4f4f5;
          outline: none;
          font-size: 15px;
        }

        .field input::placeholder {
          color: #71717a;
        }

        .field input:focus {
          border-color: rgba(252, 211, 77, 0.5);
          box-shadow: 0 0 0 3px rgba(252, 211, 77, 0.12);
        }

        .primary-btn,
        .secondary-btn {
          width: 100%;
          border: none;
          border-radius: 18px;
          padding: 15px 16px;
          font-size: 16px;
          cursor: pointer;
          transition: transform 0.2s ease, background 0.2s ease, opacity 0.2s ease;
        }

        .primary-btn {
          margin-top: 4px;
          background: #fcd34d;
          color: #18181b;
          font-weight: 800;
          box-shadow: 0 10px 30px rgba(252, 211, 77, 0.25);
        }

        .primary-btn:hover {
          transform: scale(1.01);
        }

        .primary-btn:active {
          transform: scale(0.99);
        }

        .divider {
          display: flex;
          align-items: center;
          gap: 12px;
          margin: 24px 0;
        }

        .divider div {
          height: 1px;
          flex: 1;
          background: rgba(255,255,255,0.10);
        }

        .divider span {
          font-size: 12px;
          text-transform: uppercase;
          letter-spacing: 0.25em;
          color: #71717a;
        }

        .secondary-btn {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(253, 230, 138, 0.18);
          color: #fef3c7;
          font-weight: 700;
        }

        .secondary-btn:hover {
          background: rgba(255,255,255,0.10);
        }

        .footer-text {
          margin-top: 24px;
          text-align: center;
          font-size: 12px;
          line-height: 1.6;
          color: #71717a;
        }

        @keyframes floatCard {
          0%, 100% {
            translate: 0 0;
          }
          50% {
            translate: 0 -10px;
          }
        }

        @keyframes pingDot {
          0% {
            transform: scale(1);
            opacity: 1;
          }
          70% {
            transform: scale(1.8);
            opacity: 0.2;
          }
          100% {
            transform: scale(1);
            opacity: 1;
          }
        }

        @keyframes pulseGlow {
          0%, 100% {
            opacity: 0.9;
          }
          50% {
            opacity: 0.55;
          }
        }

        @media (min-width: 900px) {
          .decor-card {
            display: block;
          }
        }

        @media (max-width: 1024px) {
          .main {
            grid-template-columns: 1fr;
          }

          .left,
          .right {
            padding: 36px 24px;
          }

          .hero-title {
            font-size: 56px;
          }

          .hero-text {
            font-size: 18px;
          }

          .info-grid {
            grid-template-columns: 1fr;
            max-width: 100%;
          }
        }

        @media (max-width: 700px) {
          .header {
            padding: 20px;
          }

          .header-badges {
            display: none;
          }

          .header-title {
            font-size: 24px;
          }

          .left,
          .right {
            padding: 28px 18px;
          }

          .hero-title {
            font-size: 42px;
          }

          .pill {
            font-size: 13px;
          }

          .login-card {
            padding: 24px 18px;
          }

          .login-header h3 {
            font-size: 28px;
          }
        }
      `}</style>
    </>
  );
}