import { genPageMetadata } from 'app/seo'

import Chip from '@/components/Chip'
import { careers } from '@/data/career/careers'
import { Education, educations } from '@/data/career/educations'
import Profile from '@/components/Profile'

export const metadata = genPageMetadata({ title: 'Career' })

const EducationItem = ({ education }: { education: Education }) => {
  return (
    <>
      <div className="mb-10 flex flex-col md:flex-row">
        <div className="mb-2 flex w-full flex-col md:mb-0 md:w-[250px]">
          <p className="mb-[8px] text-[24px] font-bold md:mb-[16px] md:text-[32px]">
            {education.time}
          </p>
        </div>
        <div className="flex flex-1 flex-col">
          <p className="mb-[8px] text-[24px] font-bold md:mb-[16px] md:text-[32px]">
            {education.title}
          </p>

          {education.descriptions.map((descripion) => {
            return (
              <p key={descripion} className="mb-[2px] text-[12px] md:mb-[4px] md:text-[14px]">
                {descripion}
              </p>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default function Page() {
  return (
    <main>
      <Profile />
      {/*  */}
      <section id="introduce" className="mb-[40px] flex flex-col">
        <p className="mb-[20px] text-[40px] font-bold text-yellow-300">INTRODUCE</p>
        <ul className="flex flex-col gap-4">
          <li>
            <p>
              React Native, Electron, Web을 넘나들며 플랫폼에 구애받지 않는 문제 해결에 강한
              프론트엔드 개발자입니다.
            </p>
          </li>
          <li>
            <p>
              복잡한 네이티브 브릿지 연동부터 상태관리 구조 개선, 성능 최적화까지 주도적으로
              해결해왔습니다.
            </p>
          </li>
          <li>
            <p>사용자 경험 개선과 팀의 개발 효율 모두에 기여하는 개발자를 지향합니다.</p>
          </li>
        </ul>
      </section>
      {/*  */}
      <p className="mb-[20px] text-[40px] font-bold text-yellow-300">CAREER</p>
      {careers.map((career) => {
        return (
          <section
            key={career.title}
            className="mb-10 flex w-full flex-col items-center md:flex-row md:items-start"
          >
            {/* 좌측: 기간, 로고 */}
            <div className="flex w-full flex-row md:mb-0 md:w-[250px] md:flex-col md:items-start">
              <div className="flex w-full flex-col md:items-center md:items-start">
                <p className="mb-[8px] text-[24px] font-bold md:mb-[16px] md:text-[32px]">
                  {career.time}
                </p>
                <div className="mb-4 flex flex-row items-center md:mb-0">
                  <Chip text={career.duration} />
                </div>
              </div>
              <div className="flex flex-row md:mt-10">
                <img
                  src={career.image}
                  alt="logo"
                  className="rounded-[20px]"
                  width={120}
                  height={120}
                />
              </div>
            </div>
            {/* 우측: 내용 */}
            <div className="flex w-full flex-1 flex-col">
              <p className="mb-4 text-[20px] text-[32px] font-bold">{career.title}</p>
              {career.descriptions.map((descripion) => {
                return (
                  <p
                    key={descripion}
                    className="mb-[4px] text-[13px] text-[#70767E] md:text-[14px]"
                  >
                    {descripion}
                  </p>
                )
              })}
              <div className="mt-5 flex max-w-full flex-row flex-wrap gap-[8px] md:max-w-[600px]">
                {career.skills.map((skill) => {
                  return <Chip key={skill} text={skill} />
                })}
              </div>

              {career.dos.length != 0 && (
                <ul className="mt-4 ml-5 list-disc">
                  {career.dos.map((item, index) => {
                    return (
                      <div key={item.problem}>
                        <li>
                          <div className="mb-1 flex flex-row">
                            <p className="max-w-[80px] min-w-[80px]">Project:</p>
                            <p>{item.project}</p>
                          </div>
                          <div className="my-2 flex flex-row">
                            <p className="text-[13px] text-[#70767E] md:text-[14px]">{item.role}</p>
                          </div>
                          <div className="mb-2 ml-4 flex flex-row">
                            <p className="max-w-[80px] min-w-[80px]">Problem:</p>
                            <p>{item.problem}</p>
                          </div>
                          <div className="mb-2 ml-4 flex flex-row">
                            <p className="max-w-[80px] min-w-[80px]">Solve:</p>
                            <p>{item.solve}</p>
                          </div>
                          <div className="ml-4 flex flex-row">
                            <p className="max-w-[80px] min-w-[80px]">Effect:</p>
                            <p>{item.effect}</p>
                          </div>
                        </li>
                        <div className="my-6 max-h-[1px] min-h-[1px] border-[0.5px] border-[#70767E] opacity-30"></div>
                      </div>
                    )
                  })}
                </ul>
              )}

              {career.etcs.length != 0 && (
                <>
                  <p className="mt-3 mb-2 text-[16px] font-bold md:text-[18px]">ETC.</p>
                  <ul className="mb-2 ml-[20px] list-disc">
                    {career.etcs.map((etc) => {
                      return (
                        <li key={etc} className="mb-[8px]">
                          {etc}
                        </li>
                      )
                    })}
                  </ul>
                </>
              )}
            </div>
          </section>
        )
      })}
      {/*  */}
      <section id="introduce" className="mb-[40px] flex flex-col">
        <p className="mb-[20px] text-[40px] font-bold text-yellow-300">EDUCATION</p>
        {educations.map((education) => {
          return <EducationItem key={education.title} education={education} />
        })}
      </section>
    </main>
  )
}
