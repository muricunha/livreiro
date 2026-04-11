---
trigger: always_on
---

# React Workspace — Padrões e Boas Práticas

> Este documento define os padrões obrigatórios para todo código produzido neste projeto React.
> O agente **deve** consultar e seguir estas diretrizes antes de criar, editar ou refatorar qualquer arquivo.

---

## 1. Estrutura de Pastas

```
src/
├── assets/               # Imagens, fontes, ícones estáticos
├── components/           # Componentes reutilizáveis (sem lógica de negócio)
│   └── Button/
│       ├── Button.tsx
│       ├── Button.styles.ts   # ou Button.module.css
│       └── index.ts           # re-export
├── pages/                # Páginas/rotas da aplicação
│   └── Home/
│       ├── Home.tsx
│       └── index.ts
├── features/             # Módulos de domínio (lógica + UI acoplada a um contexto)
│   └── Auth/
│       ├── components/
│       ├── hooks/
│       ├── services/
│       └── index.ts
├── hooks/                # Custom hooks globais e reutilizáveis
├── services/             # Chamadas de API e integrações externas
├── store/                # Estado global (Redux / Zustand / Context)
├── utils/                # Funções utilitárias puras
├── types/                # Tipos e interfaces TypeScript globais
├── constants/            # Constantes e enums
├── styles/               # Estilos globais e tokens de design
├── App.tsx
└── main.tsx
```

**Regras de organização:**
- Cada componente fica em sua própria pasta com `index.ts` exportando-o.
- Nunca misturar lógica de negócio em componentes de `components/` — use `features/` para isso.
- Arquivos de teste ficam junto ao arquivo testado: `Button.test.tsx`.

---

## 2. Convenções de Nomenclatura

| Artefato | Convenção | Exemplo |
|---|---|---|
| Componentes | PascalCase | `UserCard.tsx` |
| Hooks | camelCase prefixado com `use` | `useAuthUser.ts` |
| Serviços | camelCase sufixado com `Service` | `authService.ts` |
| Utilitários | camelCase | `formatDate.ts` |
| Tipos/Interfaces | PascalCase, Interface prefixada com `I` opcionalmente | `UserProfile`, `IApiResponse` |
| Constantes | UPPER_SNAKE_CASE | `MAX_RETRY_COUNT` |
| Arquivos de estilo | mesmo nome do componente | `Button.module.css` |
| Variáveis/funções | camelCase | `fetchUserData` |

---

## 3. Padrões de Componentes

### 3.1 Estrutura obrigatória de um componente

```tsx
// ✅ Correto
import type { FC } from 'react'

interface ButtonProps {
  label: string
  onClick: () => void
  disabled?: boolean
  variant?: 'primary' | 'secondary'
}

const Button: FC<ButtonProps> = ({ label, onClick, disabled = false, variant = 'primary' }) => {
  return (
    <button
      className={`btn btn--${variant}`}
      onClick={onClick}
      disabled={disabled}
      type="button"
    >
      {label}
    </button>
  )
}

export default Button
```

**Regras:**
- Sempre tipar as props com interface explícita.
- Sempre definir valores padrão para props opcionais.
- Preferir `FC<Props>` com arrow function.
- Nunca usar `any` — use `unknown` ou tipos específicos.
- Exportar o componente como `default` e re-exportar via `index.ts`.

### 3.2 Componentes devem ser pequenos e com uma única responsabilidade

- Máximo ~150 linhas por componente.
- Se crescer além disso, extraia sub-componentes ou hooks.

---

## 4. Hooks Customizados

```tsx
// ✅ Correto
import { useState, useEffect } from 'react'
import { fetchUser } from '@/services/userService'
import type { User } from '@/types'

interface UseUserReturn {
  user: User | null
  isLoading: boolean
  error: string | null
}

const useUser = (userId: string): UseUserReturn => {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (!userId) return

    setIsLoading(true)
    fetchUser(userId)
      .then(setUser)
      .catch((err: Error) => setError(err.message))
      .finally(() => setIsLoading(false))
  }, [userId])

  return { user, isLoading, error }
}

export default useUser
```

**Regras:**
- Sempre tipar o retorno do hook.
- Nunca colocar lógica de UI dentro de hooks.
- Hooks lidam apenas com estado e efeitos colaterais.

---

## 5. Serviços e Chamadas de API

```tsx
// ✅ Correto — src/services/userService.ts
import api from './api' // instância configurada do axios/fetch
import type { User } from '@/types'

export const fetchUser = async (userId: string): Promise<User> => {
  const { data } = await api.get<User>(`/users/${userId}`)
  return data
}

export const updateUser = async (userId: string, payload: Partial<User>): Promise<User> => {
  const { data } = await api.put<User>(`/users/${userId}`, payload)
  return data
}
```

**Regras:**
- Toda chamada de API fica em `services/`.
- Nenhum `fetch` ou `axios` direto dentro de componentes ou hooks — sempre via service.
- Sempre tipar request e response.
- Tratar erros no nível do hook ou feature, não dentro do service.

---

## 6. TypeScript

- **`strict: true`** obrigatório no `tsconfig.json`.
- Nunca usar `any`. Alternativas: `unknown`, `Record<string, unknown>`, tipos específicos.
- Preferir `interface` para objetos e `type` para unions, intersections e aliases.
- Exportar todos os tipos públicos via `src/types/index.ts`.

```ts
// ✅ Correto
export interface User {
  id: string
  name: string
  email: string
  role: 'admin' | 'user' | 'guest'
}

// ❌ Nunca
const user: any = {}
```

---

## 7. Segurança — Regras Obrigatórias

| Vulnerabilidade | Regra |
|---|---|
| XSS | Nunca usar `dangerouslySetInnerHTML`. Se necessário, sanitizar com `DOMPurify`. |
| Dados sensíveis | Nunca logar tokens, senhas ou dados pessoais no console. |
| Variáveis de ambiente | Todas as envs ficam em `.env`. Nunca hard-codar secrets. |
| Dependências | Manter atualizadas e rodar `npm audit` regularmente. |
| Validação de input | Sempre validar inputs de formulários (ex: Zod, Yup) antes de processar. |
| CORS e chamadas externas | Toda configuração de CORS fica no backend. Nunca confiar apenas no frontend. |
| Rotas protegidas | Sempre proteger rotas privadas com guard de autenticação. |

```tsx
// ❌ Nunca
<div dangerouslySetInnerHTML={{ __html: userInput }} />

// ✅ Correto
import DOMPurify from 'dompurify'
<div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(userInput) }} />
```

---

## 8. Clean Code — Princípios Aplicados

### Funções
- Uma função faz **uma coisa** apenas.
- Nome da função descreve **o que ela faz**, não como.
- Máximo de 3 parâmetros. Se precisar de mais, use um objeto.

```ts
// ❌ Ruim
const d = (u: User, r: boolean, t: string) => { ... }

// ✅ Bom
interface SendNotificationParams {
  user: User
  isUrgent: boolean
  template: string
}

const sendNotification = ({ user, isUrgent, template }: SendNotificationParams) => { ... }
```

### Variáveis
- Nomes descritivos e sem abreviações crípticas.
- Evitar variáveis mágicas — usar constantes nomeadas.

```ts
// ❌ Ruim
if (status === 3) { ... }

// ✅ Bom
const ORDER_STATUS_SHIPPED = 3
if (status === ORDER_STATUS_SHIPPED) { ... }
```

### Comentários
- Código deve ser autoexplicativo.
- Comentar **por quê**, nunca **o quê**.
- Remover código comentado — use Git para histórico.

---

## 9. Imports e Path Aliases

Configurar `@/` como alias para `src/`:

```json
// tsconfig.json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  }
}
```

**Ordem de imports:**
```tsx
// 1. Bibliotecas externas
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

// 2. Módulos internos (features, pages, components)
import UserCard from '@/components/UserCard'
import { useAuth } from '@/hooks/useAuth'

// 3. Tipos
import type { User } from '@/types'

// 4. Estilos
import styles from './Page.module.css'
```

---

## 10. Gerenciamento de Estado

- **Estado local** (`useState`): para estado de UI isolado no componente.
- **Estado compartilhado entre componentes próximos**: `useContext` com `useReducer`.
- **Estado global de aplicação**: Zustand (preferido) ou Redux Toolkit.
- **Estado de servidor**: React Query / TanStack Query.

```
Estado de UI local → useState
Estado entre irmãos → elevar ao pai (lift state up)
Estado global de app → Zustand
Dados do servidor (cache, loading, refetch) → TanStack Query
```

---

## 11. Estilo e Formatação de Código

- **Prettier** configurado e obrigatório.
- **ESLint** com regras de React, TypeScript e hooks.
- Aspas simples para strings JS/TS, aspas duplas para JSX attributes.
- Ponto e vírgula: **sem** ponto e vírgula (configurado no Prettier).
- Indentação: **2 espaços**.

`.prettierrc`:
```json
{
  "semi": false,
  "singleQuote": true,
  "jsxSingleQuote": false,
  "tabWidth": 2,
  "trailingComma": "es5",
  "printWidth": 100
}
```

---

## 12. Checklist do Agente

Antes de entregar qualquer alteração, verificar:

- [ ] A pasta e o nome do arquivo seguem as convenções deste documento?
- [ ] As props do componente estão tipadas com interface explícita?
- [ ] Não há uso de `any`?
- [ ] Chamadas de API estão em `services/`, não em componentes?
- [ ] Não há `dangerouslySetInnerHTML` sem sanitização?
- [ ] Não há dados sensíveis hard-codados ou logados?
- [ ] O componente tem menos de ~150 linhas? Se não, foi refatorado?
- [ ] Os imports seguem a ordem definida?
- [ ] Nomes de variáveis, funções e componentes são descritivos?
- [ ] Valores mágicos foram substituídos por constantes nomeadas?