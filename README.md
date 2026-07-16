# n8n-nodes-agendavet

Node e tools do **Agenda Vet** para o [n8n](https://n8n.io): a agenda veterinária da clínica (doutores, horários livres, agendamentos) e o envio de mensagens no WhatsApp da clínica, prontos para usar em **agentes de IA**.

[Agenda Vet](https://agendamento.btwdata.tech) é um sistema de agendamento para clínicas veterinárias com uma API para agentes de IA marcarem/editarem/cancelarem consultas e conversarem pelo WhatsApp.

## Instalação

No n8n (self-hosted): **Settings → Community Nodes → Install** e informe:

```
n8n-nodes-agendavet
```

> Para usar o node como ferramenta de um AI Agent, o servidor precisa da variável de ambiente `N8N_COMMUNITY_PACKAGES_ALLOW_TOOL_USAGE=true`.

## Credencial

**Agenda Vet API** — informe a `API Key` (gerada no app em *Configurações → Agente de IA → Nova chave*, formato `vet_live_...`) e, se necessário, a `Base URL` (padrão `https://agendamento.btwdata.tech`).

## Operações

**Agenda**
- Listar Doutores · Horários Livres · Buscar Paciente · Listar Consultas
- Marcar Consulta · Confirmar · Remarcar · Mudar Status · Cancelar

**Mensagem** (WhatsApp da clínica, passa pelo Inbox e respeita o atendente humano)
- Enviar Texto · Enviar Imagem · Enviar Áudio · Enviar Vídeo · Enviar Documento

**Inbox**
- Status da IA (ver se um humano assumiu) · Ligar Atendente Humano

## Uso com AI Agent

O node é `usableAsTool`, então cada operação vira uma ferramenta que o agente preenche sozinho. Dê ao agente a operação certa e ele monta os parâmetros a partir da conversa.

## Documentação da API

https://agendamento.btwdata.tech/documentacao

## Licença

[MIT](LICENSE)
