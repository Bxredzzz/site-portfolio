import Header from "./components/header";
import Titre from "./components/titre";
import Skill from "./components/skill";
import Qualite from "./components/qualite";

export default function Home() {
  return (
    <div id="root">
      <div className="app">
        <div className="allpage">
          <div className="header">
            <Header />
          </div>
          <div className="body-b">
            <Titre />
            <div className="texteContainer3">
              <div className="gradient">
              <h1 id="Pr" className="pl-8 pt-5"> Présentation : </h1>
              <p className="text2">
                Je m&apos;appelle Axel Treinsoutrot, j&apos;ai 21 ans et je suis actuellement en dernière année de licence à l&apos;université Paul Sabatier et je souhaite rentrer à Ynov en master 1 Expert en développement web tout en réalisant une alternance. Ma formation à l&apos;université m&apos;a donné de grandes capacités d&apos;apprentissage des technologies informatiques et d&apos;autonomies je développe en auto formation en plus de ma licence mes compétences en web.
              </p>
              </div>
            </div>
            <div className="texteContainer">
              <h1 id = "c" className="pb-8"> Compétences :</h1>
            </div>
            <div  className="texteContainer2">
              <Skill />
            </div>
            <div className="texteContainer">
              <h1 className="pb-8"> Qualités :</h1>
            </div>
            <div id="q" className="texteContainer2">
              <Qualite />
            </div>
            <div className="texteContainer3 gradient">
              <h1 className="pl-8 pt-5"> Mon rapport avec le développement : </h1>
              <p className="text2">
                J&apos;ai commencé à coder à l&apos;âge de 14 ans ça a toujours été une passion pour moi et avec mes années de fac j&apos;ai acquis une rigueur sur la qualité du travail que je devais effectuer de plus je suis devenue plus compétitif avec cette envie persistante de toujours faire mieux.
              </p>
            </div>
            <div className="texteContainer gradient">
              <h1> Merci d&apos;avoir regardé mon site ! </h1>
              <p className="text2 pb-7">(il a été réalisé en Next JS et entièrement par moi)</p>
            </div>
            <div className="texteContainer4 ">
              <h1 id="cv" className="pb-5 pt-5"> Voici mon CV en format PDF :</h1>
              <a
                href="/Cv_Axel_Treinsoutrot_Ynov.pdf"
                target="_blank"
                className="mb-5 inline-block rounded-full border-2 border-neutral-50 px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-300 hover:text-neutral-200 focus:border-neutral-300 focus:text-neutral-200 focus:outline-none focus:ring-0 active:border-neutral-300 active:text-neutral-200 motion-reduce:transition-none dark:hover:bg-neutral-600 dark:focus:bg-neutral-600"
              >
                Download
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
