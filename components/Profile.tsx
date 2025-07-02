import { GrMailOption } from 'react-icons/gr'
import Description from './Description'
import { FaGitAlt } from 'react-icons/fa'

export default function Profile() {
  return (
    <section id="profile" className="my-11 flex flex-col">
      <div className="flex flex-row">
        <img
          src="/static/images/profile/profile.jpg"
          alt="logo"
          className="mr-[40px] rounded-[20px]"
          width={170}
          height={220}
        />

        <div className="flex flex-col justify-between">
          <div className="flex flex-row items-center">
            <p className="text-[40px] font-bold">윤준영</p>
            <div className="mx-3 h-[60%] min-w-[2px] bg-yellow-300"></div>
            <p className="mt-3 text-[24px] font-bold">Frontend Engineer</p>
          </div>

          <div className="flex flex-col">
            <div className="mb-[12px] flex flex-row items-center">
              <GrMailOption size={22} className="mr-[20px] items-center" />
              <Description title="연락처" description="dbswnsdud12336@gmail.com" />
            </div>
            <div className="mb-[12px] flex flex-row items-center">
              <FaGitAlt size={22} className="mr-[20px] items-center" />
              <Description title="Git" description="https://github.com/dbswnsdud123" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
