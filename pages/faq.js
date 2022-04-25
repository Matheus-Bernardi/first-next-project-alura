import FAQScreen from "../src/screens/FAQScreen";

export default FAQScreen;

export async function getServerSideProps() {
  const FAQ_API_URL = "https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json";
  const respostaDoServidor = await fetch(FAQ_API_URL);
  
  return {
    props: {
      faq: await respostaDoServidor.json()
    },
  };
}

// export default function FAQPage({ faq }) {
//   return (
//     <div>
//       <Head>
//         <title>Home - Alura Cases Campanha</title>
//       </Head>
//       <h1>Página dee perguntas</h1>
//       <Link href="/">
//         Ir para a Home
//       </Link>
//       <ul>
//         {faq.map(({ question, answer }) => (
//           <li key={question}>
//             <article>
//               <h2>{question}</h2>
//               <p>{answer}</p>
//             </article>
//           </li>
//         ))}
//       </ul>
//     </div>
//   )
// }

// SSG - Static Site Gerneration
// SSR - Server Side Rendering
// ISG - Incremental Static Generation
// getServerSideProps: Roda a cada acesso que você recebe (yarn build && yarn start)
// getStaticProps: Roda somente em build time (Apenas para sites estáticos)
// Em DEV os dois rodam a cada acesso