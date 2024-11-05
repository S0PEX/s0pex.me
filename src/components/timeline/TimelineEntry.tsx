import { cn } from '@/utils'

type Props = {
  title: string
  subTitle?: string
  dateFrom: string
  dateTo?: string
  children: JSX.Element | JSX.Element[]
}

function getDate(dateFrom: string, dateTo?: string) {
  return dateTo ? `${dateFrom} - ${dateTo}` : dateFrom
}

const TimelineDot = () => (
  <div className="absolute w-3 h-3 bg-gray-400 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
)

const TimelineEntry = ({
  title,
  subTitle,
  dateFrom,
  dateTo,
  children,
}: Props) => (
  <li className="mb-10 ms-4">
    <TimelineDot />
    <time className="mb-1 text-sm font-normal leading-none text-gray-500 dark:text-gray-500">
      {getDate(dateFrom, dateTo)}
    </time>
    <h3
      className={cn(
        'text-lg mb-1 font-semibold text-gray-900 dark:text-white',
        subTitle ? 'mb-1' : '',
      )}
    >
      {title}
    </h3>
    {subTitle && (
      <p className="block text-sm font-normal leading-none text-gray-500 dark:text-gray-500">
        {subTitle}
      </p>
    )}
    <p className="mb-4 text-base font-normal">{children}</p>
  </li>
)

export { TimelineEntry }
