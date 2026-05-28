export const WHATSAPP_NUMBER = "351927272913";
export const WHATSAPP_URL =
  "https://wa.me/351927272913?text=" +
  encodeURIComponent(
    "Olá, gostaria de pedir um orçamento de pintura à Vilson Pinturas."
  );

export const COMPANY = {
  name: "Vilson Pinturas",
  tagline: "Acabamento que valoriza.",
  fullName: "Vilson Pinturas",
  region: "Portugal",
  phone: "927 272 913",
  phoneIntl: "+351 927 272 913",
  email: "geral@vilsonpinturas.pt",
} as const;

export const NAV_LINKS = [
  { href: "#inicio", label: "Início" },
  { href: "#servicos", label: "Serviços" },
  { href: "#sobre", label: "Sobre" },
  { href: "#galeria", label: "Galeria" },
  { href: "#faq", label: "Perguntas" },
  { href: "#contacto", label: "Contacto" },
] as const;
