import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { Card1 } from '../components/Card1'
import { Card2 } from '../components/Card2'
import { Card3 } from '../components/Card3'
import { Theme } from 'react-daisyui'
import { parseCookies } from 'nookies'
import { setCookies } from '../utils/setCookies'

const Home: NextPage = () => {
  const [theme, setTheme] = useState<any>()
  const [language, setLanguage] = useState<any>()
  const { Theme: ThemeCookies } = parseCookies()
  const { Language: LanguageCookies } = parseCookies()

  useEffect(() => {
    setCookies('Theme', theme)
  }, [theme]) //para setar os cookies toda vez que o state mudar

  useEffect(() => {
    setCookies('Language', language)
  }, [language])

  useEffect(() => {
    setTheme(ThemeCookies)
    setLanguage(LanguageCookies)
  }, []) //para pegar o cookies quando a tela carregar

  return (
    <Theme
      dataTheme={`${theme == 'light' ? 'light' : 'dark'}`}
      className="bg-base-200 transition-all duration-150"
    >
      <Head>
        <title>Murilo - MySkills</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">Murilo Fernandes</a>
        </div>
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <div tabIndex={0} className="btn gap-1 normal-case btn-ghost">
              <svg
                width="20"
                height="20"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block h-5 w-5 stroke-current md:h-6 md:w-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
                ></path>
              </svg>
              <span className="text-xs">
                {language === 'portugues' ? 'Tema' : 'Theme'}
              </span>
              <svg
                width="12px"
                height="12px"
                className="ml-1 hidden h-3 w-3 fill-current opacity-60 sm:inline-block"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 2048 2048"
              >
                <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu gap-4 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <div
                className="outline-base-content overflow-hidden rounded-lg outline outline-2 outline-offset-2"
                data-set-theme="light"
                data-act-className="outline"
              >
                <div
                  className="bg-base-100 text-base-content w-full cursor-pointer font-sans"
                  onClick={() => setTheme('light')}
                >
                  <div className="grid grid-cols-5 grid-rows-3">
                    <div className="col-span-5 row-span-3 row-start-1 flex gap-1 py-3 px-4">
                      <div className="flex-grow text-sm font-bold">
                        {language === 'portugues' ? 'Claro' : 'Light'}
                      </div>{' '}
                      <div className="flex flex-shrink-0 flex-wrap gap-1">
                        <div className="bg-primary w-2 rounded"></div>{' '}
                        <div className="bg-secondary w-2 rounded"></div>{' '}
                        <div className="bg-accent w-2 rounded"></div>{' '}
                        <div className="bg-neutral w-2 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="outline-base-content overflow-hidden rounded-lg outline outline-2 outline-offset-2">
                <div
                  className="bg-base-100 text-base-content w-full cursor-pointer font-sans"
                  onClick={() => setTheme('dark')}
                >
                  <div className="grid grid-cols-5 grid-rows-3">
                    <div className="col-span-5 row-span-3 row-start-1 flex gap-1 py-3 px-4">
                      <div className="flex-grow text-sm font-bold">
                        {language === 'portugues' ? 'Escuro' : 'Dark'}
                      </div>{' '}
                      <div className="flex flex-shrink-0 flex-wrap gap-1">
                        <div className="bg-primary w-2 rounded"></div>{' '}
                        <div className="bg-secondary w-2 rounded"></div>{' '}
                        <div className="bg-accent w-2 rounded"></div>{' '}
                        <div className="bg-neutral w-2 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ul>
          </div>
          <div className="dropdown dropdown-end">
            <div tabIndex={1} className="btn btn-ghost gap-1 normal-case">
              <svg
                className="inline-block h-4 w-4 fill-current md:h-5 md:w-5"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 512 512"
              >
                <path d="M363,176,246,464h47.24l24.49-58h90.54l24.49,58H480ZM336.31,362,363,279.85,389.69,362Z"></path>
                <path d="M272,320c-.25-.19-20.59-15.77-45.42-42.67,39.58-53.64,62-114.61,71.15-143.33H352V90H214V48H170V90H32v44H251.25c-9.52,26.95-27.05,69.5-53.79,108.36-32.68-43.44-47.14-75.88-47.33-76.22L143,152l-38,22,6.87,13.86c.89,1.56,17.19,37.9,54.71,86.57.92,1.21,1.85,2.39,2.78,3.57-49.72,56.86-89.15,79.09-89.66,79.47L64,368l23,36,19.3-11.47c2.2-1.67,41.33-24,92-80.78,24.52,26.28,43.22,40.83,44.3,41.67L255,362Z"></path>
              </svg>
              <span className="text-xs">
                {language === 'portugues' ? 'Idioma' : 'Lenguage'}
              </span>
              <svg
                width="12px"
                height="12px"
                className="ml-1 hidden h-3 w-3 fill-current opacity-60 sm:inline-block"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 2048 2048"
              >
                <path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path>
              </svg>
            </div>
            <ul
              tabIndex={1}
              className="dropdown-content menu gap-4 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li onClick={() => setLanguage('english')}>
                <div className="col-span-5 row-span-3 row-start-1 flex gap-1 py-3 px-4">
                  <div className="flex-grow text-sm font-bold">
                    {language === 'portugues' ? 'Inglês' : 'English'}
                  </div>{' '}
                  <div className="flex flex-shrink-0 flex-wrap gap-1">
                    <div className="bg-primary w-2 rounded"></div>{' '}
                    <div className="bg-secondary w-2 rounded"></div>{' '}
                    <div className="bg-accent w-2 rounded"></div>{' '}
                    <div className="bg-neutral w-2 rounded"></div>
                  </div>
                </div>
              </li>
              <li onClick={() => setLanguage('portugues')}>
                <div className="col-span-5 row-span-3 row-start-1 flex gap-1 py-3 px-4">
                  <div className="flex-grow text-sm font-bold">
                    {language === 'portugues' ? 'Português' : 'Portuguese'}
                  </div>{' '}
                  <div className="flex flex-shrink-0 flex-wrap gap-1">
                    <div className="bg-primary w-2 rounded"></div>{' '}
                    <div className="bg-secondary w-2 rounded"></div>{' '}
                    <div className="bg-accent w-2 rounded"></div>{' '}
                    <div className="bg-neutral w-2 rounded"></div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="md:grid flex flex-col py-4 mr-4 ml-4 md:px-0 md:grid-cols-5 gap-3 max-w-7xl mx-auto">
        <Card1 language={language} />
        <Card2 language={language} />
        <Card3 language={language} theme={theme} />
      </div>
    </Theme>
  )
}

export default Home
