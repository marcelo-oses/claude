import { useState } from 'react';
import { auth, signInWithEmailAndPassword } from '../firebase';

export function Login({ onLogin }: { onLogin: () => void }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      await signInWithEmailAndPassword(auth, email, password);
      onLogin();
    } catch {
      setError('E-mail ou senha incorretos. Tente novamente.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="login-screen">
      <div className="login-card">
        <div style={{ fontSize: '2.5rem', marginBottom: '12px' }}>✈️</div>
        <div className="login-title">Planejador de Viagens</div>
        <div className="login-sub">Entre para planejar nossas viagens juntos ❤️</div>
        <form onSubmit={handleSubmit}>
          <div className="login-field">
            <label>E-mail</label>
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="seu@email.com"
              required
              autoCapitalize="none"
              autoCorrect="off"
            />
          </div>
          <div className="login-field">
            <label>Senha</label>
            <input
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="••••••••"
              required
            />
          </div>
          {error && <div className="login-error">{error}</div>}
          <button className="login-btn" type="submit" disabled={loading}>
            {loading ? 'Entrando...' : '→ Entrar'}
          </button>
        </form>
      </div>
    </div>
  );
}
