import { GrMailOption } from 'react-icons/gr'
import { FaGitAlt } from 'react-icons/fa'

export default function Profile() {
  return (
    <section id="profile" className="my-11 flex flex-col items-center md:items-start">
      <div className="flex flex-col items-center md:w-full md:flex-row">
        <img
          src="/static/images/profile/profile.jpg"
          alt="logo"
          className="mb-6 rounded-[20px] md:mr-[40px] md:mb-0"
          width={170}
          height={220}
        />

        <div className="flex flex-col justify-between">
          <div className="flex flex-col items-center md:flex-row">
            <p className="text-[32px] font-bold md:text-[40px]">윤준영</p>
            <div className="mx-3 hidden h-[60%] min-w-[2px] bg-yellow-300 md:block"></div>
            <div className="my-2 block h-[2px] w-8 bg-yellow-300 md:hidden"></div>
            <p className="text-[20px] font-bold md:mt-3 md:text-[24px]">Frontend Engineer</p>
          </div>

          <div className="mt-6 flex flex-col md:mt-8">
            <div className="mb-[12px] flex flex-col items-center md:flex-row md:items-center">
              <div className="flex flex-row">
                <GrMailOption size={22} className="mr-[20px] items-center" />
                <p className="w-[50px]">연락처</p>
                <p className="md:mr-4 md:ml-4"></p>
              </div>
              <p>dbswnsdud12336@gmail.com</p>
            </div>
            <div className="mb-[12px] flex flex-col items-center md:flex-row md:items-center">
              <div className="flex flex-row">
                <FaGitAlt size={22} className="mr-[20px] items-center" />
                <p className="w-[50px]">Git</p>
                <p className="md:mr-4 md:ml-4"></p>
              </div>
              <p>https://github.com/dbswnsdud123</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
