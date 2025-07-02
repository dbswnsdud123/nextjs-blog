import { genPageMetadata } from 'app/seo'

import Chip from '@/components/Chip'
import { careers } from './careers'
import { Education, educations } from './educations'
import Profile from '@/components/Profile'

export const metadata = genPageMetadata({ title: 'Career' })

const EducationItem = ({ education }: { education: Education }) => {
  return (
    <>
      <div className="mb-10 flex flex-row">
        <div className="flex w-[250px] flex-col">
          <p className="mb-[16px] text-[32px] font-bold">{education.time}</p>
        </div>
        <div className="flex flex-1 flex-col">
          <p className="mb-[16px] text-[32px] font-bold">{education.title}</p>

          {education.descriptions.map((descripion) => {
            return (
              <p key={descripion} className="mb-[4px] text-[14px]">
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
    <>
      <Profile />
      {/*  */}
      <section id="introduce" className="mb-[40px] flex flex-col">
        <p className="mb-[20px] text-[40px] font-bold text-yellow-300">INTRODUCE</p>
        <ul className="flex flex-col gap-2">
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
      {careers.map((career) => {
        return (
          <section key={career.title} className="mb-10 flex flex-row">
            <div className="flex w-[250px] flex-col">
              <p className="mb-[16px] text-[32px] font-bold">{career.time}</p>
              <div className="flex flex-row items-center">
                <Chip text={career.duration} />
              </div>
              <div className="mt-10 flex flex-row">
                <img
                  src={career.image}
                  alt="logo"
                  className="rounded-[20px]"
                  width={120}
                  height={120}
                />
              </div>
            </div>
            <div className="flex flex-1 flex-col">
              <p className="mb-4 text-[32px] font-bold">{career.title}</p>
              {career.descriptions.map((descripion) => {
                return (
                  <p key={descripion} className="mb-[4px] text-[14px] text-[#70767E]">
                    {descripion}
                  </p>
                )
              })}
              <div className="mt-5 flex max-w-[600px] flex-row flex-wrap gap-[8px]">
                {career.skills.map((skill) => {
                  return <Chip key={skill} text={skill} />
                })}
              </div>

              {career.dos.length != 0 && (
                <ul className="mt-4 ml-5 list-disc">
                  {career.dos.map((item, index) => {
                    return (
                      <div key={item.problem}>
                        <li key={item.problem}>
                          <div className="mb-1 flex flex-row">
                            <p className="max-w-[80px] min-w-[80px]">Project:</p>
                            <p>{item.project}</p>
                          </div>
                          <div className="my-2 flex flex-row">
                            <p className="text-[14px] text-[#70767E]">{item.role}</p>
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
                  <p className="mt-3 mb-2 text-[18px] font-bold">ETC.</p>
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
        <p className="mb-[20px] text-[40px] font-bold text-[#BD871F]">EDUCATION</p>
        {educations.map((education) => {
          return <EducationItem key={education.title} education={education} />
        })}
      </section>
    </>
  )
}
