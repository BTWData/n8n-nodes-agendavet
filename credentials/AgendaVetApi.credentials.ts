import type {
	IAuthenticateGeneric,
	ICredentialTestRequest,
	ICredentialType,
	INodeProperties,
} from 'n8n-workflow';

export class AgendaVetApi implements ICredentialType {
	name = 'agendaVetApi';

	displayName = 'Agenda Vet API';

	documentationUrl = 'https://agendamento.btwdata.tech/documentacao';

	properties: INodeProperties[] = [
		{
			displayName: 'API Key',
			name: 'apiKey',
			type: 'string',
			typeOptions: { password: true },
			default: '',
			required: true,
			description:
				'Chave gerada no app do Agenda Vet em Configurações > Agente de IA > Nova chave (formato vet_live_...).',
		},
		{
			displayName: 'Base URL',
			name: 'baseUrl',
			type: 'string',
			default: 'https://agendamento.btwdata.tech',
			description: 'URL base da instância do Agenda Vet.',
		},
	];

	// Toda chamada leva a chave no cabeçalho Authorization: Bearer <apiKey>.
	authenticate: IAuthenticateGeneric = {
		type: 'generic',
		properties: {
			headers: {
				Authorization: '=Bearer {{$credentials.apiKey}}',
			},
		},
	};

	// Valida a credencial listando os doutores da clínica.
	test: ICredentialTestRequest = {
		request: {
			baseURL: '={{$credentials.baseUrl}}',
			url: '/api/agent/doctors',
		},
	};
}
