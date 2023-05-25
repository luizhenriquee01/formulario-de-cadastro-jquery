$(document).ready(function () {
  $('#telefone').mask('(00) 00000-0000');
  $('#cep').mask('00000-000');
  $('#cpf').mask('000.000.000-00');
  $('#nomeCompleto').mask('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA', {
    translation: { A: { pattern: /[a-zA-Z\s]/ } },
  });
  $('#cidade').mask('AAAAAAAAAAAAAAAAAAAAAAAAAAAA', {
    translation: { A: { pattern: /[a-zA-Z\s]/ } },
  });
  $('#estate').mask('AAAAAAAAAAAAAAAAAAAAAAAAAAAA', {
    translation: { A: { pattern: /[a-zA-Z\s]/ } },
  });
});
$('form').validate({
  rules: {
    nomeCompleto: {
      required: true,
    },
    cpf: {
      required: true,
      minlength: 12,
    },
    email: {
      required: true,
      email: true,
    },
    telefone: {
      required: true,
    },
    address: {
      required: true,
      minlength: 5,
    },
    cep: {
      required: true,
      minlength: 8,
    },
    cidade: {
      required: true,
    },
    estate: {
      required: true,
    },
  },
  messages: {
    nomeCompleto: 'Por favor, insira o seu Nome completo',
    email: {
      required: 'Por favor, insira seu e-mail.',
      email: 'Por favor, insira um e-mail válido.',
    },
    cpf: {
      required: 'Por favor, insira seu CPF.',
    },
    telefone: 'Por favor, insira o seu Telefone',
    address: 'Por favor, insira o seu Endereço',
    cidade: 'Por favor, insira a sua Cidade',
    estate: 'Por favor, insira o seu Estado',
    cep: {
      required: 'Por favor, insira seu CEP.',
    },
  },

  invalidHandler: function (evento, validador) {
    let camposIncorretos = validador.numberOfInvalids();
    if (camposIncorretos) {
      alert(
        `Existem ${camposIncorretos} campos que está faltando preenchimento`
      );
    }
  },
});
