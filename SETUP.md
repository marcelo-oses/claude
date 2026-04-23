# Planejador de Viagens — Guia de Configuração

## O que você vai precisar
- Conta Google (gratuita) para criar o projeto Firebase
- ~20 minutos para configurar tudo

---

## 1. Criar o projeto Firebase

1. Acesse **console.firebase.google.com**
2. Clique em **"Criar um projeto"**
3. Nome: `planejador-viagens` (ou qualquer nome)
4. Desative Google Analytics (opcional) → Criar projeto

---

## 2. Configurar Autenticação

1. No menu lateral → **Authentication** → **Começar**
2. Aba **"Sign-in method"** → ativar **E-mail/senha**
3. Aba **"Users"** → **"Adicionar usuário"**
   - Crie UM usuário que vocês dois vão compartilhar:
   - E-mail: `sua-familia@gmail.com` (qualquer e-mail)
   - Senha: escolha uma senha forte

---

## 3. Configurar Firestore

1. No menu lateral → **Firestore Database** → **Criar banco de dados**
2. Selecione **"Iniciar no modo de produção"**
3. Escolha a região: `southamerica-east1` (São Paulo)
4. Após criar, vá em **Regras** e cole:

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

## 4. Obter as credenciais do app

1. No console Firebase → ícone de engrenagem → **Configurações do projeto**
2. Role até **"Seus apps"** → clique em **"</>"** (Web app)
3. Nome do app: `planejador-viagens` → Registrar app
4. Copie o objeto `firebaseConfig` que aparece

---

## 5. Colar credenciais no código

Abra o arquivo `src/firebase.ts` e substitua:

```typescript
const firebaseConfig = {
  apiKey: "COLE_AQUI_SUA_API_KEY",
  authDomain: "SEU_PROJETO.firebaseapp.com",
  ...
};
```

Pelos valores reais que você copiou no passo 4.

---

## 6. Instalar dependências e buildar

```bash
npm install
npm run build
```

---

## 7. Fazer o deploy (Vercel — gratuito)

### Opção A: Via Vercel CLI
```bash
npx vercel
```
Siga as instruções → vai gerar uma URL como `https://seu-app.vercel.app`

### Opção B: Via GitHub + Vercel (recomendado)
1. Crie um repositório privado no GitHub e faça push deste código
2. Acesse **vercel.com** → New Project → importe o repo
3. Deploy automático ✓

---

## 8. Instalar no iPhone

1. Abra o Safari no iPhone (deve ser o Safari — não funciona no Chrome)
2. Acesse a URL do app (ex: `https://seu-app.vercel.app`)
3. Faça login com o e-mail e senha que criou no Firebase
4. Toque no ícone **"Compartilhar"** (quadrado com seta para cima)
5. Role e toque **"Adicionar à Tela de Início"**
6. Confirme → o ícone do app aparece na tela inicial!

Repita os passos 1–6 no celular da sua esposa com as mesmas credenciais.

---

## Adicionar a viagem Orlando 2027

Quando quiser adicionar a viagem de Orlando, envie o HTML para o Claude e ele vai criar o arquivo `src/data/orlando2027.ts` e adicioná-lo em `src/data/tripConfigs.ts`.

---

## Sincronização em tempo real

- Qualquer mudança feita em um celular aparece automaticamente no outro em ~1 segundo
- Funciona com WiFi e dados móveis
- Se offline: as mudanças ficam salvas localmente e sincronizam quando voltar a internet

---

## Custos

- Firebase Firestore: **gratuito** para uso pessoal (limite de 50k leituras/dia — muito mais que suficiente)
- Vercel Hosting: **gratuito** para projetos pessoais
- **Custo total: R$ 0,00** ✓
