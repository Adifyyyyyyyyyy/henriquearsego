import { motion } from "framer-motion";
import { X } from "lucide-react";
import { useState } from "react";

const WhatsAppFormModal = ({ onClose }: { onClose: () => void }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // 1. Disparo para o Data Layer (GTM Web)
    // @ts-ignore
    window.dataLayer = window.dataLayer || [];
    // @ts-ignore
    window.dataLayer.push({
      event: "whatsapp_lead_submit", // Evento diferente para distinguir do formulário fixo
      user_data: {
        nome: name,
        email: email,
      },
      form_location: "whatsapp_modal"
    });

    // 2. Lógica do WhatsApp
    const message = encodeURIComponent(
      `Olá! Meu nome é ${name} (${email}) e gostaria de agendar um diagnóstico gratuito.`
    );

    window.open(
      `https://wa.me/5551996719696?text=${message}`,
      "_blank"
    );

    onClose();
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
        className="relative w-full max-w-sm bg-white rounded-2xl p-6 shadow-2xl"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <X />
        </button>

        <h3 className="text-xl font-bold text-gray-900 mb-2">
          Antes de ir pro WhatsApp
        </h3>
        <p className="text-sm text-gray-600 mb-5">
          Preencha rapidinho para eu entender melhor seu momento 👇
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Seu nome"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#25D366]"
          />

          <input
            type="email"
            placeholder="Seu e-mail"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#25D366]"
          />

          <button
            type="submit"
            className="w-full bg-[#25D366] text-white font-semibold py-3 rounded-lg hover:brightness-110 transition"
          >
            Ir para o WhatsApp
          </button>
        </form>

        <p className="text-xs text-gray-500 text-center mt-4">
          Diagnóstico estratégico • Sem compromisso
        </p>
      </motion.div>
    </motion.div>
  );
};

export default WhatsAppFormModal;