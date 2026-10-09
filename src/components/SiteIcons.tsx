import { HiArrowUpRight } from 'react-icons/hi2'

export function ArrowIcon({ className = '' }: { className?: string }) {
  return <HiArrowUpRight aria-hidden="true" className={`arrow-icon ${className}`.trim()} focusable="false" />
}

export function AsteriskIcon() {
  return (
    <svg aria-hidden="true" className="asterisk" focusable="false" viewBox="0 0 40 40" fill="none">
      <path d="M20 2v36M2 20h36M7.3 7.3l25.4 25.4M32.7 7.3 7.3 32.7" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  )
}
