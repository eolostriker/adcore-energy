
import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export const Contact: React.FC = () => {
  const [isSent, setIsSent] = useState(false);
  const [data, setData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    city: '',
    estado: '',
    tipoImovel: '',
    conta: '',
    consumo: '',
    padrao: '',
    telhado: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    const numero = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;

    const mensagem = encodeURIComponent(`
☀️ NOVO LEAD - ADCORE ENERGY

👤 Nome: ${data.name}
📱 WhatsApp: ${data.whatsapp}
📧 E-mail: ${data.email}

📍 Cidade: ${data.city}/${data.estado}

🏠 Tipo do imóvel: ${data.tipoImovel}

⚡ Conta média: ${data.conta}

🔋 Consumo: ${data.consumo}

🔌 Padrão: ${data.padrao}

🏡 Telhado: ${data.telhado}

📝 Observações:
${data.message}
`);

    window.open(
      `https://wa.me/${numero}?text=${mensagem}`,
      "_blank"
    );

    setIsSent(true);

    setTimeout(() => setIsSent(false), 4000);

    e.currentTarget.reset();

    setData({
      name: '',
      email: '',
      whatsapp: '',
      city: '',
      estado: '',
      tipoImovel: '',
      conta: '',
      consumo: '',
      padrao: '',
      telhado: '',
      message: '',
    });
  };

  return (
    <section className="py-32 bg-slate-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 space-y-6 text-left"
        >
          <h2 className="text-emerald-400 font-bold tracking-[0.3em] uppercase text-xs">Fale Conosco</h2>
          <h3 className="text-5xl font-extrabold text-white">Solicite seu Projeto</h3>
          <p className="text-lg text-slate-400 max-w-xl font-medium">
            Estamos prontos para analisar seu perfil de consumo e propor a melhor estratégia de economia com tecnologia solar.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-slate-900 p-12 md:p-16 rounded-[3.5rem] shadow-2xl text-left border border-slate-800"
        >
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid sm:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-xs font-extrabold uppercase tracking-widest text-slate-500 ml-1">Seu Nome</label>
                <input
                  type="text"
                  name='name'
                  required
                  placeholder="Nome completo"
                  value={data.name}
                  onChange={handleChange}
                  className="w-full bg-slate-950 border-2 border-slate-800 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-emerald-500 transition-all placeholder:text-slate-700"
                />
              </div>
              <div className="space-y-3">
                <label className="text-xs font-extrabold uppercase tracking-widest text-slate-500 ml-1">E-mail</label>
                <input
                  type="email"
                  name='email'
                  required
                  placeholder="seu@email.com"
                  value={data.email}
                  onChange={handleChange}
                  className="w-full bg-slate-950 border-2 border-slate-800 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-emerald-500 transition-all placeholder:text-slate-700"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-xs font-extrabold uppercase tracking-widest text-slate-500 ml-1">WhatsApp</label>
                <input
                  type="tel"
                  name='whatsapp'
                  required
                  placeholder="(00) 00000-0000"
                  value={data.whatsapp}
                  onChange={handleChange}
                  className="w-full bg-slate-950 border-2 border-slate-800 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-emerald-500 transition-all placeholder:text-slate-700"
                />
              </div>
              <div className="space-y-3">
                <label className="text-xs font-extrabold uppercase tracking-widest text-slate-500 ml-1">Conta Média (R$)</label>
                <input
                  type="text"
                  name='conta'
                  placeholder="Ex: R$ 500,00"
                  value={data.conta}
                  onChange={handleChange}
                  className="w-full bg-slate-950 border-2 border-slate-800 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-emerald-500 transition-all placeholder:text-slate-700"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-xs font-extrabold uppercase tracking-widest text-slate-500 ml-1">Cidade</label>
                <input
                  type="text"
                  name='city'
                  required
                  placeholder="Cidade"
                  value={data.city}
                  onChange={handleChange}
                  className="w-full bg-slate-950 border-2 border-slate-800 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-emerald-500 transition-all placeholder:text-slate-700"
                />
              </div>
              <div className="space-y-3">
                <label className="text-xs font-extrabold uppercase tracking-widest text-slate-500 ml-1">Estado</label>
                <select
                  name="estado"
                  value={data.estado}
                  onChange={handleChange}
                  className="w-full bg-slate-950 border-2 border-slate-800 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-emerald-500 transition-all placeholder:text-slate-700"
                >
                  <option value="">Estado</option>
                  <option value="SP">São Paulo</option>
                  <option value="SC">Santa Catarina</option>
                  {/* <option value="PR">Paraná</option>
                  <option value="MG">Minas Gerais</option>
                  <option value="RJ">Rio de Janeiro</option> */}
                </select>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-xs font-extrabold uppercase tracking-widest text-slate-500 ml-1">Tipo do Imóvel</label>
                <select
                  name="tipoImovel"
                  value={data.tipoImovel}
                  onChange={handleChange}
                  className="w-full bg-slate-950 border-2 border-slate-800 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-emerald-500 transition-all placeholder:text-slate-700"
                >
                  <option value="">Tipo do imóvel</option>
                  <option>Residência</option>
                  <option>Empresa</option>
                  <option>Indústria</option>
                  <option>Fazenda</option>
                  <option>Condomínio</option>
                </select>
              </div>
              <div className="space-y-3">
                <label className="text-xs font-extrabold uppercase tracking-widest text-slate-500 ml-1">Padrão de Entrada</label>
                <select
                  name="padrao"
                  value={data.padrao}
                  onChange={handleChange}
                  className="w-full bg-slate-950 border-2 border-slate-800 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-emerald-500 transition-all placeholder:text-slate-700"
                >
                  <option value="">Padrão de entrada</option>
                  <option>Monofásico</option>
                  <option>Bifásico</option>
                  <option>Trifásico</option>
                  <option>Não sei</option>
                </select>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-xs font-extrabold uppercase tracking-widest text-slate-500 ml-1">Tipo de Telhado</label>
                <select
                  name="telhado"
                  value={data.telhado}
                  onChange={handleChange}
                  className="w-full bg-slate-950 border-2 border-slate-800 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-emerald-500 transition-all placeholder:text-slate-700"
                >
                  <option value="">Tipo de telhado</option>
                  <option>Cerâmica</option>
                  <option>Metálico</option>
                  <option>Fibrocimento</option>
                  <option>Laje</option>
                  <option>Solo</option>
                  <option>Outro</option>
                </select>
              </div>
              <div className="space-y-3">
                <label className="text-xs font-extrabold uppercase tracking-widest text-slate-500 ml-1">Consumo Médio (Kwh)</label>
                <input
                  type="text"
                  name="consumo"
                  placeholder="Consumo médio (kWh)"
                  value={data.consumo}
                  onChange={handleChange}
                  className="w-full bg-slate-950 border-2 border-slate-800 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-emerald-500 transition-all placeholder:text-slate-700"
                />
              </div>
            </div>

            <div className="grid sm:grid-cols-1 gap-8">
              <div className="space-y-6">
                {/* <label className="text-xs font-extrabold uppercase tracking-widest text-slate-500 ml-1">Tipo de Telhado</label> */}
                <textarea
                  name="message"
                  placeholder="Conte um pouco sobre seu projeto"
                  rows={5}
                  value={data.message}
                  onChange={handleChange}
                  className="w-full bg-slate-950 border-2 border-slate-800 rounded-2xl px-6 py-4 text-white focus:outline-none focus:border-emerald-500 transition-all placeholder:text-slate-700"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isSent}
              className={`w-full py-5 rounded-2xl font-black text-lg flex items-center justify-center gap-3 transition-all shadow-xl ${isSent
                ? 'bg-emerald-900/20 text-emerald-400 cursor-default border border-emerald-900/50'
                : 'bg-emerald-600 hover:bg-emerald-500 text-white shadow-emerald-950/20'
                }`}
            >
              {isSent ? (
                <>✓ Dados enviados com sucesso!</>
              ) : (
                <>
                  Enviar Solicitação Técnica
                  <Send size={20} />
                </>
              )}
            </button>
          </form>
        </motion.div>

        <div className="pt-24 grid grid-cols-1 sm:grid-cols-3 gap-12 max-w-4xl text-left">
          <div className="flex flex-col items-start group">
            <div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center text-emerald-400 mb-4 border border-slate-800 group-hover:bg-emerald-500 group-hover:text-white transition-all">
              <Mail size={22} />
            </div>
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">E-mail</span>
            <p className="text-sm font-bold text-slate-200 mt-1">adcore.energy@gmail.com</p>
          </div>
          <div className="flex flex-col items-start group">
            <div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center text-emerald-400 mb-4 border border-slate-800 group-hover:bg-emerald-500 group-hover:text-white transition-all">
              <Phone size={22} />
            </div>
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">WhatsApp</span>
            <p className="text-sm font-bold text-slate-200 mt-1"><b>SP: </b>(11) 91955-0501</p>
            <p className="text-sm font-bold text-slate-200 mt-1"><b>SC: </b>(48) 99130-3262</p>
          </div>
          <div className="flex flex-col items-start group">
            <div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center text-emerald-400 mb-4 border border-slate-800 group-hover:bg-emerald-500 group-hover:text-white transition-all">
              <MapPin size={22} />
            </div>
            <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Sede</span>
            <p className="text-sm font-bold text-slate-200 mt-1">São Paulo, SP</p>
            <p className="text-sm font-bold text-slate-200 mt-1">Florianópolis, SC</p>
          </div>
        </div>
      </div>
    </section>
  );
};
