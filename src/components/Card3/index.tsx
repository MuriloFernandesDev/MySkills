import Image from 'next/image'
import SkillsImg from '../assets/skills.png'

export const Card3 = ({ language }: any) => {
  return (
    <div className="flex flex-col col-span-1 gap-5">
      <div className="card text-start bg-base-100 shadow-xl text-primary-content">
        <div className="card-body gap-2">
          <div className="flex flex-col gap-2">
            <div className="flex justify-between">
              <span>
                {language === 'portugues' ? 'Introvertido' : 'Introvert'}
              </span>
              <span>
                {language === 'portugues' ? 'Extrovertido' : 'Outgoing'}
              </span>
            </div>
            <div className="flex">
              <div className="w-full h-1 rounded-full bg-base-content/50 relative"></div>
              <div className="w-8 h-4 rounded-full bg-base-content absolute ml-14 -mt-[6px]"></div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex justify-between">
              <span>
                {language === 'portugues' ? 'Tempo Livre' : 'Free Time'}
              </span>
              <span>{language === 'portugues' ? 'Oculpado' : 'Busy'}</span>
            </div>
            <div className="flex">
              <div className="w-full h-1 rounded-full bg-base-content/50 relative"></div>
              <div className="w-8 h-4 rounded-full bg-base-content absolute ml-14 -mt-[6px]"></div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex justify-between">
              <span>{language === 'portugues' ? 'Analógico' : 'Analog'}</span>
              <span>{language === 'portugues' ? 'Digital' : 'Digital'}</span>
            </div>
            <div className="flex">
              <div className="w-full h-1 rounded-full bg-base-content/50 relative"></div>
              <div className="w-8 h-4 rounded-full bg-base-content absolute ml-14 -mt-[6px]"></div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex justify-between">
              <span>{language === 'portugues' ? 'Sentário' : 'Sitting'}</span>
              <span>{language === 'portugues' ? 'Atleta' : 'Athlete'}</span>
            </div>
            <div className="flex">
              <div className="w-full h-1 rounded-full bg-base-content/50 relative"></div>
              <div className="w-8 h-4 rounded-full bg-base-content absolute ml-14 -mt-[6px]"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="card text-start bg-base-100 shadow-xl text-primary-content ">
        <div className="card-body">
          <h1 className="text-2xl font-bold text-base-content">
            {language === 'portugues' ? 'Necessidade' : 'Need'}
          </h1>
          <ul className="list-disc">
            <li>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint.
            </li>
            <li>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint.
            </li>
          </ul>
        </div>
      </div>
      <div className="card text-start bg-base-100 shadow-xl text-primary-content ">
        <div className="card-body">
          <figure>
            <Image src={SkillsImg}></Image>
          </figure>
        </div>
      </div>
    </div>
  )
}
