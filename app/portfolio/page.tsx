import { genPageMetadata } from 'app/seo'

import Chip from '@/components/Chip'
import { Portfolio, portfolios } from './portfolio'
import createDOMPurify from 'dompurify'
import { JSDOM } from 'jsdom'
import Profile from '@/components/Profile'

export const metadata = genPageMetadata({ title: 'Career' })

const PortfolioItem = ({ portfolio, index }: { portfolio: Portfolio; index: number }) => {
  const window = new JSDOM('').window
  const DOMPurify = createDOMPurify(window)

  return (
    <>
      <div className="mb-[80px] flex flex-col">
        <div className="mb-[20px] flex flex-row items-center">
          <p className="mr-3 text-[24px] font-bold">
            {index + 1}. {portfolio.title}
          </p>
          <p className="mr-3 text-[20px]">{portfolio.time}</p>
          <Chip text={portfolio.duration} />
        </div>
        <div className="mb-10 flex flex-row items-center justify-center">
          {portfolio.image.map((image) => {
            return (
              <img
                key={image}
                className="mx-2 rounded-[8px]"
                src={`/static/images/portfolio/${image}`}
                width={0}
                height={0}
                alt={''}
                style={{
                  width: `${100 / portfolio.image.length - 1}%`,
                  height: 'auto',
                }}
              />
            )
          })}
        </div>

        <div className="flex flex-row">
          <div
            className="flex flex-1 flex-col"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(portfolio.html),
            }}
          ></div>
          <div className="mx-3 min-h-[100%] w-[1px] bg-[#bec4cd]"></div>
          <div className="flex w-[350px] flex-col">
            <p className="mb-2 text-[20px] font-bold">FE</p>
            <div className="mb-5 flex flex-row">{portfolio.fe.join(', ')}</div>
            <p className="mb-2 text-[20px] font-bold">Deployment</p>
            <p>{portfolio.deployment.join(', ')}</p>
          </div>
        </div>
      </div>
    </>
  )
}
export default function Page() {
  return (
    <>
      <Profile />
      <section id="PROJECT" className="flex flex-col">
        <div className="mt-10 mb-[20px] flex flex-col">
          {portfolios.map((portfolio, index) => {
            return <PortfolioItem key={portfolio.title} index={index} portfolio={portfolio} />
          })}
        </div>
      </section>
      {/*  */}
    </>
  )
}
