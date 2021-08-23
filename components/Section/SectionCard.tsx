import Image from "next/image"
import { isLessonCompleted } from "../../utils/machineUtils"

export default function SectionCard({
  lesson,
  lessonPath,
  progressService,
  index,
}) {
  const [sectionSlug] = lessonPath.split("/")

  return (
    <>
      <div className="section-lesson-card relative border-2 rounded mx-auto py-8 px-4 max-w-xs ml-12 mt-6 sm:px-6 lg:px-8 lg:py-12 lg:my-12 lg:ml-8 xl:max-w-7xl">
        <button
          data-test={`lesson-card-status-${index}`}
          type="button"
          className="absolute -top-4 -left-6 inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded-full shadow-sm text-white bg-green-700 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          {isLessonCompleted(progressService, `${sectionSlug}/${lesson.slug}`)
            ? "Completed"
            : "Upcoming"}
        </button>
        <div className="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
          <div className="lg:col-span-2">
            <ul className="space-y-12 sm:divide-y sm:divide-gray-200 sm:space-y-0 sm:-mt-8 lg:gap-x-8 lg:space-y-0">
              <li key={lesson.slug} className="sm:py-8">
                <div className="space-y-4 sm:grid sm:grid-cols-3 sm:items-start sm:gap-6 sm:space-y-0">
                  <div className="aspect-w-3 aspect-h-2 sm:aspect-w-3 sm:aspect-h-4">
                    <Image
                      className="object-cover shadow-lg rounded-lg"
                      src="https://source.unsplash.com/1600x900/?science"
                      alt=""
                      layout="fill"
                    />
                  </div>

                  <div className="sm:col-span-2">
                    <div className="space-y-4">
                      <div className="text-lg leading-6 font-medium space-y-1">
                        <a href={`${sectionSlug}/${lesson.slug}`}>
                          <h3>{lesson.title}</h3>
                        </a>
                      </div>
                      <div className="text-lg">
                        <p className="text-gray-500">{lesson.description}</p>
                      </div>
                    </div>

                    {/* Buttons */}
                    <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
                      <a
                        href={`${sectionSlug}/${lesson.slug}`}
                        className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                      >
                        Start Lesson
                      </a>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
