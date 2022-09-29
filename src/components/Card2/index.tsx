export const Card2 = ({ language }: any) => {
  return (
    <div className="flex flex-col col-span-3 gap-5">
      <div className="card text-start bg-base-100 shadow-xl text-primary-content ">
        <div className="card-body">
          <h1 className="text-2xl font-bold text-base-content">
            {language === 'portugues' ? 'Sobre' : 'About'}
          </h1>
          <span>
            {language === 'portugues'
              ? 'Meu nome é Murilo Fernandes, moro em Araçatuba e tenho 20 anos, sempre gostei de tecnologia e sempre fui bem curioso, no ensino médio queria estudar engenharia da computação. A tecnologia sempre foi minha primeira opção, depois que acabei o colegial prestei o Enem e passei no instito federal para TSI(tecnologia e sistemas para internet), e desde lá trabalho com programação, mais expecifico front-end.'
              : "My name is Murilo Fernandes, I live in Araçatuba and I'm 20 years old, I've always liked technology and I've always been very curious, in high school I wanted to study processing engineering. Technology was always my first choice, after the Enem and I passed the federal institute for TSI (technology and systems for the internet), and since then I work with programming, more specifically front-end."}
          </span>
        </div>
      </div>
      <div className="card text-start bg-base-100 shadow-xl text-primary-content ">
        <div className="card-body">
          <h1 className="text-2xl font-bold text-base-content">
            {' '}
            {language === 'portugues' ? 'Objetivos' : 'Objective'}
          </h1>
          <ul className="list-disc">
            <li>
              {language === 'portugues'
                ? ' Construir um bom ambiente de trabalho onde eu possa crescer e ajudar outras pessoas a crescerem'
                : 'Build a good work environment where I can grow and help others grow'}
            </li>
            <li>
              {language === 'portugues'
                ? 'Conquistar todos os meus sonhos'
                : 'conquer all my dreams'}
            </li>
            <li>
              {language === 'portugues'
                ? 'Ter uma família que me ajuda e apoia meus projetos'
                : 'Having a family that helps me and supports my projects'}
            </li>
          </ul>
        </div>
      </div>
      <div className="card text-start bg-base-100 shadow-xl text-primary-content ">
        <div className="card-body">
          <h1 className="text-2xl font-bold text-base-content">
            {language === 'portugues' ? 'Conquistas' : 'Conquests'}
          </h1>
          <ul className="list-disc">
            <li>
              {language === 'portugues'
                ? 'Primeiro emprego na área de programação'
                : 'First job in the programming field'}
            </li>
            <li>
              {language === 'portugues'
                ? 'Aprovado em uma faculdade pública de qualidade'
                : 'Approved at a quality public college'}
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}
