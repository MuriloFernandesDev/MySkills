import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faCake,
  faLocationDot,
  faBriefcase,
  faGraduationCap,
  faHeart,
  faMoneyBill,
} from '@fortawesome/free-solid-svg-icons'

export const Card1 = ({ language }: any) => {
  return (
    <div className="flex flex-col col-span-1 gap-5">
      <div className="card text-center bg-base-100 shadow-xl">
        <div className="card-body p-2">
          <p className="text-sm text-base-content font-normal italic ">
            {language === 'portugues' ? 'Desenvolvedor' : 'Developer'}
          </p>
          <h1 className="text-xl text-base-content font-bold">
            Murilo Fernandes de Lima
          </h1>
        </div>
        <div className="card-body p-2">
          <figure className="mask mask-circle">
            <img
              src="https://avatars.githubusercontent.com/u/103587328?v=4"
              alt="MuriloImg"
              className="w-60 h-60"
            />
          </figure>
        </div>
        <div className="card-body p-2 italic  text-base-content">
          <span>
            {language === 'portugues'
              ? 'Programador front-end, cristão, apaixonado por tecnologia e na aprendizagem com os processos'
              : 'Front-end programmer, Christian, passionate about technology and learning with processes'}
          </span>
        </div>
      </div>
      <div className="card text-center bg-base-100 shadow-xl text-primary-content">
        <div className="card-body p-2">
          <div className="flex">
            <div className="flex flex-col justify-between text-start">
              <div className="flex items-center">
                <FontAwesomeIcon
                  icon={faCake}
                  className="mr-2 w-5 h-5 text-base-content"
                />
                <span>20 {language === 'portugues' ? 'anos' : 'years'}</span>
              </div>
              <div className="flex items-center">
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="mr-2 w-5 h-5 text-base-content"
                />
                <span>Araçatuba</span>
              </div>
              <div className="flex items-center">
                <FontAwesomeIcon
                  icon={faBriefcase}
                  className="mr-2 w-5 h-5 text-base-content"
                />
                <span>
                  {language === 'portugues'
                    ? 'Desenvolvedor Front-end'
                    : 'Front end developer'}
                </span>
              </div>
            </div>
            <div className="flex flex-col justify-between">
              <div className="flex items-center">
                <FontAwesomeIcon
                  icon={faHeart}
                  className="mr-2 w-5 h-5 text-base-content"
                />
                <span>{language === 'portugues' ? 'Solteiro' : 'single'}</span>
              </div>
              <div className="flex items-center">
                <FontAwesomeIcon
                  icon={faGraduationCap}
                  className="mr-2 w-5 h-5 text-base-content"
                />
                <span>TSI - IFSP</span>
              </div>
              <div className="flex items-center">
                <FontAwesomeIcon
                  icon={faMoneyBill}
                  className="mr-2 w-5 h-5 text-base-content"
                />
                <span>2mil 2.5mil</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
