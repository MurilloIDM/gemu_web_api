import { Bank, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const BANKS: Omit<Bank, "id">[] = [
  { code: "001", name: "Banco do Brasil S.A." },
  { code: "033", name: "Banco Santander (Brasil) S.A." },
  { code: "104", name: "Caixa Econômica Federal" },
  { code: "237", name: "Bradesco S.A." },
  { code: "341", name: "Itaú Unibanco S.A." },
  { code: "745", name: "Banco Citibank S.A." },
  { code: "399", name: "HSBC Bank Brasil S.A." },
  { code: "041", name: "Banrisul S.A." },
  { code: "756", name: "Bancoob – Banco Cooperativo do Brasil S.A." },
  { code: "655", name: "Votorantim S.A." },
  { code: "260", name: "Nu Pagamentos S.A. (Nubank)" },
  { code: "077", name: "Banco Inter S.A." },
  { code: "237", name: "Banco Bradesco S.A." },
  { code: "280", name: "Avista S.A. Crédito, Financiamento e Investimento" },
  { code: "290", name: "PagSeguro Internet S.A." },
  { code: "323", name: "Mercado Pago – Conta do Mercado Livre" },
  { code: "336", name: "Banco C6 S.A. (C6 Bank)" },
  { code: "741", name: "Banco Ribeirão Preto S.A." },
  { code: "743", name: "Banco Semear S.A." },
  { code: "630", name: "Smartbank S.A." },
  { code: "096", name: "Banco B3 S.A." },
  { code: "380", name: "PicPay Serviços S.A." },
  { code: "084", name: "Uniprime Norte do Paraná" },
  { code: "085", name: "Cooperativa Central de Crédito - Ailos" },
  { code: "089", name: "Cooperativa Unicred" },
];

async function main() {
  await prisma.bank.createMany({ data: BANKS });
}

main()
  .then(async () => await prisma.$disconnect())
  .catch(async () => {
    await prisma.$disconnect();
    process.exit(1);
  });
