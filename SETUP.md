# Planejador de Viagens — Guia de Configuração

## O que você vai precisar
- Conta Google para fazer login no Firebase Console
- ~20 minutos para configurar tudo

---

## 1. Ativar Google Sign-In no Firebase

1. Acesse **console.firebase.google.com** → projeto `trip-planner-cde86`
2. Menu lateral → **Authentication** → **Sign-in method**
3. Clique em **Google** → ative o toggle → **Salvar**
4. Vá na aba **Settings** → role até **Authorized domains**
5. Confirme que `localhost` está na lista (já vem por padrão)
6. Depois do deploy no Vercel, volte aqui e adicione o domínio `seu-app.vercel.app`

---

## 2. Criar o Firestore

1. Menu lateral → **Firestore Database** → **Criar banco de dados**
2. Selecione **"Iniciar no modo de produção"**
3. Escolha a região: `southamerica-east1` (São Paulo) → **Avançar** → **Criar**
4. Após criar, clique em **Regras** e cole:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /trips/{tripId} {
      allow read, write: if request.auth != null;
    }
  }
}
```

Clique em **Publicar**.

---

## 3. Buildar o app localmente (opcional — só para testar)

```bash
npm install
npm run build
npm run preview
```

Acesse `http://localhost:4173` e teste o login com Google.

---

## 4. Deploy no Vercel (gratuito)

### Via GitHub (recomendado — deploy automático a cada commit)

1. Acesse **vercel.com** → faça login com GitHub
2. Clique em **"New Project"** → importe o repositório `claude`
3. Deixe as configurações padrão (Vercel detecta Vite automaticamente)
4. Clique em **Deploy**
5. Após o deploy, copie a URL gerada (ex: `https://claude-xxx.vercel.app`)

---

## 5. Adicionar domínio do Vercel no Firebase

1. Volte ao **console.firebase.google.com** → **Authentication** → **Settings** → **Authorized domains**
2. Clique em **Add domain**
3. Cole a URL do Vercel (ex: `claude-xxx.vercel.app`) — **sem o `https://`**
4. Salvar

Sem isso, o login com Google vai dar erro de `auth/unauthorized-domain`.

---

## 6. Instalar no iPhone

1. Abra o **Safari** no iPhone (deve ser o Safari — não funciona no Chrome)
2. Acesse a URL do Vercel
3. Faça login com sua conta Google
4. Toque no ícone **"Compartilhar"** (quadrado com seta para cima)
5. Role e toque **"Adicionar à Tela de Início"**
6. Confirme → o ícone do app aparece na tela inicial!

Repita os passos no celular da sua esposa. Cada um faz login com a própria conta Google — os dados são compartilhados em tempo real via Firestore.

---

## 7. Sincronização em tempo real

- Qualquer mudança feita em um celular aparece automaticamente no outro em ~1 segundo
- Funciona com WiFi e dados móveis
- Se offline: as mudanças ficam salvas localmente e sincronizam quando voltar a internet

---

## Adicionar a viagem Orlando 2027

Quando quiser adicionar Orlando, me mande os detalhes da viagem (voos, hotel, itinerário) e eu crio o arquivo `src/data/orlando2027.ts` e adiciono em `src/data/tripConfigs.ts` automaticamente.

---

## Custos

- Firebase: **gratuito** (50k leituras/dia — muito mais que suficiente)
- Vercel: **gratuito** para projetos pessoais
- **Total: R$ 0,00** ✓
