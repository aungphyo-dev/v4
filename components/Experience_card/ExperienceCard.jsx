const ExperienceCard = ({experience}) => {
  return(
      <li className="mb-12 cursor-pointer">
          <div
              className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:opacity-100">
              <div
                  className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
              <header
                  className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2">
                  {experience.experience}
              </header>
              <div className="z-10 sm:col-span-6">
                  <h3 className="font-medium leading-snug text-slate-200">
                      <div>
                          <div
                              className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base">
                                    <span>
                                        {experience.position}
                                    </span>
                          </div>
                      </div>
                  </h3>
                  <p className="mt-2 text-sm leading-normal text-[#5eead4]">
                      {experience.description}
                  </p>
                  <ul className="mt-2 flex flex-wrap">
                      {experience.skills.map(skill=><li key={skill} className="mr-1.5 mt-2">
                          <div
                              className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">{skill}
                          </div>
                      </li>)}
                  </ul>
              </div>
          </div>
      </li>
  )
}
export default ExperienceCard