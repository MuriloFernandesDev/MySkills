import {
  faReact,
  faHtml5,
  faJsSquare,
  faCss3,
  faBootstrap,
  faGit,
  faGithub,
  faFigma,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const Card3 = ({ language, theme }: any) => {
  return (
    <div className="flex flex-col col-span-1 gap-5">
      <div className="card text-start bg-base-100 shadow-xl text-primary-content">
        <div className="card-body gap-2 text-xs">
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
              <div className="w-8 h-4 rounded-full bg-base-content absolute ml-24 -mt-[6px]"></div>
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
              <div className="w-8 h-4 rounded-full bg-base-content absolute ml-9 -mt-[6px]"></div>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex justify-between">
              <span>{language === 'portugues' ? 'Analógico' : 'Analog'}</span>
              <span>{language === 'portugues' ? 'Digital' : 'Digital'}</span>
            </div>
            <div className="flex">
              <div className="w-full h-1 rounded-full bg-base-content/50 relative"></div>
              <div className="w-8 h-4 rounded-full bg-base-content absolute ml-28 -mt-[6px]"></div>
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
              {language === 'portugues'
                ? 'Estar em um bom ambiente de trabalho'
                : 'Being in a good working environment'}
            </li>
            <li>
              {language === 'portugues'
                ? 'Possuir horários flexiveis e ter opções para trabalhar Presencial e home office'
                : 'Have flexible hours and have options to work Face-to-face and home office'}
            </li>
          </ul>
        </div>
      </div>
      <div className="card text-start bg-base-100 shadow-xl text-primary-content ">
        <div className="card-body">
          <h1 className="text-2xl font-bold text-base-content">
            {language === 'portugues' ? 'Habilidades' : 'Skills'}
          </h1>
          <div className="flex-wrap flex gap-2 font-medium">
            <div
              className={
                'badge gap-1 ' +
                (theme === 'light'
                  ? 'badge-info text-white'
                  : 'badge-accent text-black')
              }
            >
              <FontAwesomeIcon icon={faJsSquare} className="w-4 h-4" />
              Javascript
            </div>
            <div
              className={
                'badge gap-1 ' +
                (theme === 'light'
                  ? 'badge-info text-white'
                  : 'badge-accent text-black')
              }
            >
              <FontAwesomeIcon icon={faReact} className="w-4 h-4" />
              React
            </div>
            <div
              className={
                'badge gap-1 ' +
                (theme === 'light'
                  ? 'badge-info text-white'
                  : 'badge-accent text-black')
              }
            >
              <FontAwesomeIcon icon={faHtml5} className="w-4 h-4" />
              Javascript
            </div>
            <div
              className={
                'badge gap-1 ' +
                (theme === 'light'
                  ? 'badge-info text-white'
                  : 'badge-accent text-black')
              }
            >
              <FontAwesomeIcon icon={faCss3} className="w-4 h-4" />
              Css
            </div>
            <div
              className={
                'badge gap-1 ' +
                (theme === 'light'
                  ? 'badge-info text-white'
                  : 'badge-accent text-black')
              }
            >
              <FontAwesomeIcon icon={faBootstrap} className="w-4 h-4" />
              BootStrap
            </div>
            <div
              className={
                'badge gap-1 ' +
                (theme === 'light'
                  ? 'badge-info text-white'
                  : 'badge-accent text-black')
              }
            >
              <FontAwesomeIcon icon={faGit} className="w-4 h-4" />
            </div>
            <div
              className={
                'badge gap-1 ' +
                (theme === 'light'
                  ? 'badge-info text-white'
                  : 'badge-accent text-black')
              }
            >
              <FontAwesomeIcon icon={faGithub} className="w-4 h-4" />
              GitHub
            </div>
            <div
              className={
                'badge gap-1 ' +
                (theme === 'light'
                  ? 'badge-info text-white'
                  : 'badge-accent text-black')
              }
            >
              <FontAwesomeIcon icon={faFigma} className="w-4 h-4" />
              GitHub
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
